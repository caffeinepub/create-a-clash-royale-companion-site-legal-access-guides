import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useSubmitFeedback } from '../hooks/useSubmitFeedback';
import { toast } from 'sonner';
import { Loader2, Send } from 'lucide-react';

export default function FeedbackForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const { mutate: submitFeedback, isPending } = useSubmitFeedback();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!message.trim()) {
      toast.error('Please enter a message');
      return;
    }

    if (message.length > 1000) {
      toast.error('Message must be 1000 characters or less');
      return;
    }

    submitFeedback(
      { name: name.trim(), email: email.trim(), message: message.trim() },
      {
        onSuccess: () => {
          toast.success('Feedback submitted successfully!');
          setName('');
          setEmail('');
          setMessage('');
        },
        onError: (error) => {
          toast.error(`Failed to submit feedback: ${error.message}`);
        },
      }
    );
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Send Us Feedback</CardTitle>
        <CardDescription>
          Have suggestions or questions? We'd love to hear from you!
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name (optional)</Label>
            <Input
              id="name"
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={isPending}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email (optional)</Label>
            <Input
              id="email"
              type="email"
              placeholder="your.email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isPending}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">
              Message <span className="text-destructive">*</span>
            </Label>
            <Textarea
              id="message"
              placeholder="Your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              disabled={isPending}
              rows={5}
              className="resize-none"
            />
            <p className="text-xs text-muted-foreground">
              {message.length}/1000 characters
            </p>
          </div>

          <Button type="submit" disabled={isPending} className="w-full gap-2">
            {isPending ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                <Send className="h-4 w-4" />
                Submit Feedback
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
