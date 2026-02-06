import { useState } from 'react';
import { Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useAddComment } from '../../hooks/useDiscussions';
import { useInternetIdentity } from '../../hooks/useInternetIdentity';
import { toast } from 'sonner';

const MAX_COMMENT_LENGTH = 5000;

interface NewCommentFormProps {
  threadId: bigint;
  parentCommentId: bigint | null;
  onSuccess?: () => void;
  onCancel?: () => void;
  placeholder?: string;
}

export default function NewCommentForm({
  threadId,
  parentCommentId,
  onSuccess,
  onCancel,
  placeholder = 'Share your thoughts...',
}: NewCommentFormProps) {
  const [content, setContent] = useState('');
  const { identity } = useInternetIdentity();
  const isAuthenticated = !!identity;
  const addComment = useAddComment();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isAuthenticated) {
      toast.error('Please log in to post a comment');
      return;
    }

    const trimmedContent = content.trim();

    if (!trimmedContent) {
      toast.error('Comment cannot be empty');
      return;
    }

    if (trimmedContent.length > MAX_COMMENT_LENGTH) {
      toast.error(`Comment must be ${MAX_COMMENT_LENGTH} characters or less`);
      return;
    }

    try {
      await addComment.mutateAsync({
        threadId,
        parentCommentId,
        content: trimmedContent,
      });
      toast.success('Comment posted successfully!');
      setContent('');
      onSuccess?.();
    } catch (error: any) {
      console.error('Failed to post comment:', error);
      const errorMessage = error?.message || 'Failed to post comment';
      if (errorMessage.includes('Authentication required')) {
        toast.error('Please log in to post a comment');
      } else {
        toast.error(errorMessage);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <Textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder={isAuthenticated ? placeholder : 'Log in to comment...'}
        rows={3}
        maxLength={MAX_COMMENT_LENGTH}
        disabled={addComment.isPending || !isAuthenticated}
      />
      <div className="flex items-center justify-between">
        <p className="text-xs text-muted-foreground">
          {content.length}/{MAX_COMMENT_LENGTH} characters
        </p>
        <div className="flex gap-2">
          {onCancel && (
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={onCancel}
              disabled={addComment.isPending}
            >
              Cancel
            </Button>
          )}
          <Button
            type="submit"
            size="sm"
            disabled={addComment.isPending || !isAuthenticated}
            className="gap-2"
          >
            {addComment.isPending && <Loader2 className="h-4 w-4 animate-spin" />}
            {addComment.isPending ? 'Posting...' : parentCommentId ? 'Reply' : 'Comment'}
          </Button>
        </div>
      </div>
    </form>
  );
}
