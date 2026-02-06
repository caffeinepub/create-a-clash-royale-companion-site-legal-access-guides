import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { UserRole } from '../backend';

export function useGetCallerUserRole() {
  const { actor, isFetching } = useActor();

  return useQuery<UserRole>({
    queryKey: ['callerUserRole'],
    queryFn: async () => {
      if (!actor) throw new Error('Actor not available');
      return actor.getCallerUserRole();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetAllFeedback() {
  const { actor, isFetching } = useActor();

  return useQuery({
    queryKey: ['allFeedback'],
    queryFn: async () => {
      if (!actor) throw new Error('Actor not available');
      return actor.getAllFeedback();
    },
    enabled: !!actor && !isFetching,
  });
}
