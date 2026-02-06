import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';

interface FeedbackInput {
  name: string;
  email: string;
  message: string;
}

export function useSubmitFeedback() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ name, email, message }: FeedbackInput) => {
      if (!actor) throw new Error('Actor not available');
      await actor.submitFeedback(name, email, message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['allFeedback'] });
    },
  });
}
