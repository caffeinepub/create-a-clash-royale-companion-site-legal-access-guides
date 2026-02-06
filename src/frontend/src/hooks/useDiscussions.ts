import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { DiscussionThread } from '../backend';

export function useGetAllThreads() {
  const { actor, isFetching } = useActor();

  return useQuery<DiscussionThread[]>({
    queryKey: ['discussionThreads'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllThreads();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetThread(threadId: bigint | null) {
  const { actor, isFetching } = useActor();

  return useQuery<DiscussionThread | null>({
    queryKey: ['discussionThread', threadId?.toString()],
    queryFn: async () => {
      if (!actor || !threadId) return null;
      return actor.getThread(threadId);
    },
    enabled: !!actor && !isFetching && threadId !== null,
  });
}

export function useCreateThread() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ title, content }: { title: string; content: string }) => {
      if (!actor) throw new Error('Actor not available');
      return actor.createThread(title, content);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['discussionThreads'] });
    },
  });
}

export function useAddComment() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      threadId,
      parentCommentId,
      content,
    }: {
      threadId: bigint;
      parentCommentId: bigint | null;
      content: string;
    }) => {
      if (!actor) throw new Error('Actor not available');
      return actor.addComment(threadId, parentCommentId, content);
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['discussionThreads'] });
      queryClient.invalidateQueries({
        queryKey: ['discussionThread', variables.threadId.toString()],
      });
    },
  });
}
