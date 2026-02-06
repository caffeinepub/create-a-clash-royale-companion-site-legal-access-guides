import Map "mo:core/Map";
import Array "mo:core/Array";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";
import Nat64 "mo:core/Nat64";
import Text "mo:core/Text";
import Time "mo:core/Time";
import Iter "mo:core/Iter";

import MixinAuthorization "authorization/MixinAuthorization";
import AccessControl "authorization/access-control";


actor {
  // Initialize the access control system
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  // User profile type and storage
  public type UserProfile = {
    name : Text;
  };

  let userProfiles = Map.empty<Principal, UserProfile>();

  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can access profiles");
    };
    userProfiles.get(caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };

  // Feedback form functionality
  type Feedback = {
    name : Text;
    email : Text;
    message : Text;
  };

  let submissions = Map.empty<Text, Feedback>();

  // Public endpoint - accessible to everyone including guests
  public shared ({ caller }) func submitFeedback(name : Text, email : Text, message : Text) : async () {
    let feedback : Feedback = {
      name;
      email;
      message;
    };

    submissions.add(message, feedback);
  };

  // Admin-only endpoint - for reviewing feedback submissions
  public query ({ caller }) func getAllFeedback() : async [Feedback] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can view all feedback");
    };
    submissions.values().toArray();
  };

  // Discussion system types
  public type Comment = {
    id : Nat64;
    parentCommentId : ?Nat64;
    author : Principal;
    content : Text;
    timestamp : Int;
    children : [Comment];
  };

  public type DiscussionThread = {
    id : Nat64;
    title : Text;
    author : Principal;
    content : Text;
    timestamp : Int;
    comments : [Comment];
  };

  // Storage for threads and auto-incremental ID counters
  let threads = Map.empty<Nat64, DiscussionThread>();
  var threadCounter = 0 : Nat64;
  var commentCounter = 0 : Nat64;

  // Content safety limits
  let MAX_TITLE_LENGTH = 200;
  let MAX_THREAD_CONTENT_LENGTH = 10000;
  let MAX_COMMENT_LENGTH = 5000;

  // Helper function to get current timestamp
  func getCurrentTimestamp() : Int {
    Time.now();
  };

  // Create thread - any authenticated user can post
  public shared ({ caller }) func createThread(title : Text, content : Text) : async Nat64 {
    // Authorization: Only authenticated users can create threads
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Authentication required: Please sign in with Internet Identity to create a thread");
    };

    // Content validation: empty/whitespace check
    if (title.trim(#char ' ') == "") {
      Runtime.trap("Thread title cannot be empty");
    };
    if (content.trim(#char ' ') == "") {
      Runtime.trap("Thread content cannot be empty");
    };

    // Content safety: maximum length enforcement
    if (title.size() > MAX_TITLE_LENGTH) {
      Runtime.trap("Thread title exceeds maximum length of " # Nat64.fromNat(MAX_TITLE_LENGTH).toText() # " characters");
    };
    if (content.size() > MAX_THREAD_CONTENT_LENGTH) {
      Runtime.trap("Thread content exceeds maximum length of " # Nat64.fromNat(MAX_THREAD_CONTENT_LENGTH).toText() # " characters");
    };

    threadCounter += 1;
    let threadId = threadCounter;

    let thread : DiscussionThread = {
      id = threadId;
      title;
      author = caller;
      content;
      timestamp = getCurrentTimestamp();
      comments = [];
    };

    threads.add(threadId, thread);
    threadId;
  };

  // Add comment/reply - must be authenticated
  public shared ({ caller }) func addComment(threadId : Nat64, parentCommentId : ?Nat64, content : Text) : async Nat64 {
    // Authorization: Only authenticated users can post comments
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Authentication required: Please sign in with Internet Identity to post a comment");
    };

    // Content validation: empty/whitespace check
    if (content.trim(#char ' ') == "") {
      Runtime.trap("Comment cannot be empty");
    };

    // Content safety: maximum length enforcement
    if (content.size() > MAX_COMMENT_LENGTH) {
      Runtime.trap("Comment exceeds maximum length of " # Nat64.fromNat(MAX_COMMENT_LENGTH).toText() # " characters");
    };

    let thread = switch (threads.get(threadId)) {
      case (null) { Runtime.trap("Thread not found") };
      case (?t) { t };
    };

    commentCounter += 1;
    let commentId = commentCounter;

    let newComment : Comment = {
      id = commentId;
      parentCommentId;
      author = caller;
      content;
      timestamp = getCurrentTimestamp();
      children = [];
    };

    let updatedComments = addCommentToList(thread.comments, newComment, parentCommentId);
    let updatedThread = { thread with comments = updatedComments };

    threads.add(threadId, updatedThread);
    commentId;
  };

  // Recursive helper function to add comments as children
  func addCommentToList(comments : [Comment], newComment : Comment, parentCommentId : ?Nat64) : [Comment] {
    switch (parentCommentId) {
      case (null) {
        comments.concat([newComment]);
      };
      case (?parentId) {
        comments.map(
          func(c) {
            if (c.id == parentId) {
              { c with children = c.children.concat([newComment]) };
            } else {
              { c with children = addCommentToList(c.children, newComment, parentCommentId) };
            };
          }
        );
      };
    };
  };

  // Fetch all threads with comments - public read access (no authentication required)
  public query ({ caller }) func getAllThreads() : async [DiscussionThread] {
    // No authorization check - anyone including guests can read threads
    let threadValues = threads.values();
    threadValues.toArray();
  };

  // Fetch single thread with all comments - public read access (no authentication required)
  public query ({ caller }) func getThread(threadId : Nat64) : async ?DiscussionThread {
    // No authorization check - anyone including guests can read threads
    threads.get(threadId);
  };
};
