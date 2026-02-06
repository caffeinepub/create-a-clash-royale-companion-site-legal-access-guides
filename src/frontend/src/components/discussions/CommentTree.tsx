import { useState } from 'react';
import { Clock, User, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import NewCommentForm from './NewCommentForm';
import type { Comment } from '../../backend';

interface CommentTreeProps {
  comments: Comment[];
  threadId: bigint;
  depth?: number;
}

export default function CommentTree({ comments, threadId, depth = 0 }: CommentTreeProps) {
  return (
    <div className={depth > 0 ? 'ml-6 border-l-2 border-border pl-4 space-y-4' : 'space-y-4'}>
      {comments.map((comment) => (
        <CommentItem key={comment.id.toString()} comment={comment} threadId={threadId} depth={depth} />
      ))}
    </div>
  );
}

interface CommentItemProps {
  comment: Comment;
  threadId: bigint;
  depth: number;
}

function CommentItem({ comment, threadId, depth }: CommentItemProps) {
  const [showReplyForm, setShowReplyForm] = useState(false);

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

  return (
    <div>
      <Card>
        <CardContent className="pt-4">
          <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
            <div className="flex items-center gap-1">
              <User className="h-3 w-3" />
              <span className="font-medium">{comment.author.toString().slice(0, 8)}...</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              <span>{formatTimestamp(comment.timestamp)}</span>
            </div>
          </div>

          <p className="whitespace-pre-wrap mb-3">{comment.content}</p>

          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowReplyForm(!showReplyForm)}
            className="gap-2 h-8 px-2"
          >
            <MessageSquare className="h-3 w-3" />
            Reply
          </Button>

          {showReplyForm && (
            <div className="mt-4">
              <NewCommentForm
                threadId={threadId}
                parentCommentId={comment.id}
                onSuccess={() => setShowReplyForm(false)}
                onCancel={() => setShowReplyForm(false)}
                placeholder="Write a reply..."
              />
            </div>
          )}
        </CardContent>
      </Card>

      {comment.children.length > 0 && (
        <div className="mt-4">
          <CommentTree comments={comment.children} threadId={threadId} depth={depth + 1} />
        </div>
      )}
    </div>
  );
}
