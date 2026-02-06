import { useState } from 'react';
import { MessageSquare, ArrowLeft, Clock, User, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useGetAllThreads, useGetThread } from '../hooks/useDiscussions';
import { useInternetIdentity } from '../hooks/useInternetIdentity';
import NewThreadForm from '../components/discussions/NewThreadForm';
import NewCommentForm from '../components/discussions/NewCommentForm';
import CommentTree from '../components/discussions/CommentTree';
import type { DiscussionThread } from '../backend';

export default function DiscussionsPage() {
  const [selectedThreadId, setSelectedThreadId] = useState<bigint | null>(null);
  const [showNewThreadForm, setShowNewThreadForm] = useState(false);
  const { identity } = useInternetIdentity();
  const isAuthenticated = !!identity;

  const { data: threads, isLoading: threadsLoading } = useGetAllThreads();
  const { data: selectedThread, isLoading: threadLoading } = useGetThread(selectedThreadId);

  const formatTimestamp = (timestamp: bigint) => {
    const date = new Date(Number(timestamp) / 1000000);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return 'just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;
    return date.toLocaleDateString();
  };

  const countComments = (thread: DiscussionThread): number => {
    const countRecursive = (comments: typeof thread.comments): number => {
      return comments.reduce((total, comment) => {
        return total + 1 + countRecursive(comment.children);
      }, 0);
    };
    return countRecursive(thread.comments);
  };

  if (selectedThreadId && selectedThread) {
    return (
      <div className="container max-w-4xl py-8">
        <Button
          variant="ghost"
          onClick={() => setSelectedThreadId(null)}
          className="mb-6 gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Discussions
        </Button>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-2xl">{selectedThread.title}</CardTitle>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2">
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                <span>{selectedThread.author.toString().slice(0, 8)}...</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{formatTimestamp(selectedThread.timestamp)}</span>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="whitespace-pre-wrap">{selectedThread.content}</p>
          </CardContent>
        </Card>

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-4">
            Comments ({countComments(selectedThread)})
          </h3>
          {!isAuthenticated && (
            <Alert className="mb-4">
              <AlertDescription>
                Please log in to post comments and join the discussion.
              </AlertDescription>
            </Alert>
          )}
          <NewCommentForm threadId={selectedThreadId} parentCommentId={null} />
        </div>

        <div className="space-y-4">
          {selectedThread.comments.length === 0 ? (
            <p className="text-center text-muted-foreground py-8">
              No comments yet. Be the first to comment!
            </p>
          ) : (
            <CommentTree comments={selectedThread.comments} threadId={selectedThreadId} />
          )}
        </div>
      </div>
    );
  }

  if (selectedThreadId && threadLoading) {
    return (
      <div className="container max-w-4xl py-8">
        <Skeleton className="h-10 w-32 mb-6" />
        <Card>
          <CardHeader>
            <Skeleton className="h-8 w-3/4" />
            <Skeleton className="h-4 w-1/2 mt-2" />
          </CardHeader>
          <CardContent>
            <Skeleton className="h-24 w-full" />
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container max-w-4xl py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Clash Royale Discussions</h1>
          <p className="text-muted-foreground">
            Chat about strategies, decks, and everything Clash Royale
          </p>
        </div>
        {!showNewThreadForm && (
          <Button
            onClick={() => {
              if (!isAuthenticated) {
                alert('Please log in to create a thread');
                return;
              }
              setShowNewThreadForm(true);
            }}
            className="gap-2"
          >
            <MessageSquare className="h-4 w-4" />
            New Thread
          </Button>
        )}
      </div>

      {!isAuthenticated && (
        <Alert className="mb-6">
          <AlertDescription>
            You can browse discussions, but you'll need to log in to create threads or post comments.
          </AlertDescription>
        </Alert>
      )}

      {showNewThreadForm && (
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Create New Thread</CardTitle>
          </CardHeader>
          <CardContent>
            <NewThreadForm onSuccess={() => setShowNewThreadForm(false)} />
            <Button
              variant="ghost"
              onClick={() => setShowNewThreadForm(false)}
              className="mt-4"
            >
              Cancel
            </Button>
          </CardContent>
        </Card>
      )}

      {threadsLoading ? (
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <Card key={i}>
              <CardHeader>
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-1/2 mt-2" />
              </CardHeader>
            </Card>
          ))}
        </div>
      ) : threads && threads.length > 0 ? (
        <div className="space-y-4">
          {threads
            .sort((a, b) => Number(b.timestamp - a.timestamp))
            .map((thread) => (
              <Card
                key={thread.id.toString()}
                className="cursor-pointer hover:border-primary/50 transition-colors"
                onClick={() => setSelectedThreadId(thread.id)}
              >
                <CardHeader>
                  <CardTitle className="text-xl">{thread.title}</CardTitle>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>{thread.author.toString().slice(0, 8)}...</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{formatTimestamp(thread.timestamp)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageSquare className="h-4 w-4" />
                      <span>{countComments(thread)} comments</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground line-clamp-2">
                    {thread.content}
                  </p>
                </CardContent>
              </Card>
            ))}
        </div>
      ) : (
        <Card>
          <CardContent className="py-12 text-center">
            <MessageSquare className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
            <h3 className="text-lg font-semibold mb-2">No discussions yet</h3>
            <p className="text-muted-foreground mb-4">
              Be the first to start a conversation about Clash Royale!
            </p>
            {isAuthenticated && (
              <Button onClick={() => setShowNewThreadForm(true)} className="gap-2">
                <MessageSquare className="h-4 w-4" />
                Create First Thread
              </Button>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
