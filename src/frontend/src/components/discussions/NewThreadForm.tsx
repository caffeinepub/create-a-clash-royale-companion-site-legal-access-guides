import { useState } from 'react';
import { Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useCreateThread } from '../../hooks/useDiscussions';
import { toast } from 'sonner';

const MAX_TITLE_LENGTH = 200;
const MAX_CONTENT_LENGTH = 10000;

interface NewThreadFormProps {
  onSuccess?: () => void;
}

export default function NewThreadForm({ onSuccess }: NewThreadFormProps) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const createThread = useCreateThread();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const trimmedTitle = title.trim();
    const trimmedContent = content.trim();

    if (!trimmedTitle) {
      toast.error('Thread title cannot be empty');
      return;
    }

    if (!trimmedContent) {
      toast.error('Thread content cannot be empty');
      return;
    }

    if (trimmedTitle.length > MAX_TITLE_LENGTH) {
      toast.error(`Title must be ${MAX_TITLE_LENGTH} characters or less`);
      return;
    }

    if (trimmedContent.length > MAX_CONTENT_LENGTH) {
      toast.error(`Content must be ${MAX_CONTENT_LENGTH} characters or less`);
      return;
    }

    try {
      await createThread.mutateAsync({ title: trimmedTitle, content: trimmedContent });
      toast.success('Thread created successfully!');
      setTitle('');
      setContent('');
      onSuccess?.();
    } catch (error: any) {
      console.error('Failed to create thread:', error);
      const errorMessage = error?.message || 'Failed to create thread';
      if (errorMessage.includes('Authentication required')) {
        toast.error('Please log in to create a thread');
      } else {
        toast.error(errorMessage);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="thread-title">Title</Label>
        <Input
          id="thread-title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="What's your thread about?"
          maxLength={MAX_TITLE_LENGTH}
          disabled={createThread.isPending}
        />
        <p className="text-xs text-muted-foreground mt-1">
          {title.length}/{MAX_TITLE_LENGTH} characters
        </p>
      </div>

      <div>
        <Label htmlFor="thread-content">Content</Label>
        <Textarea
          id="thread-content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Share your thoughts, strategies, or questions..."
          rows={6}
          maxLength={MAX_CONTENT_LENGTH}
          disabled={createThread.isPending}
        />
        <p className="text-xs text-muted-foreground mt-1">
          {content.length}/{MAX_CONTENT_LENGTH} characters
        </p>
      </div>

      <Button type="submit" disabled={createThread.isPending} className="gap-2">
        {createThread.isPending && <Loader2 className="h-4 w-4 animate-spin" />}
        {createThread.isPending ? 'Creating...' : 'Create Thread'}
      </Button>
    </form>
  );
}
