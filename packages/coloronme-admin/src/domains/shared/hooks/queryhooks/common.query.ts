import { useMutation, useQuery } from '@tanstack/react-query';
import commonRepository from './common.repository';
import { queryClient } from '@/src/pages/_app';

export const useUserByQR = (qruuid: string) => {
  return useQuery(['user', qruuid], () => commonRepository.getUserByQR(qruuid), {
    refetchOnWindowFocus: false,
    enabled: !!qruuid,
  });
};

export const useMutateUser = () => {
  return useMutation(['mutation user'], commonRepository.registerCustomer, {
    onError: (error) => console.error(error),
  });
};

export const useLogin = () => {
  return useMutation(['login'], commonRepository.login, {
    onError: (error) => console.error(error),
  });
};

export const useUsers = () => {
  return useQuery(['users'], commonRepository.getUsers, {
    refetchOnWindowFocus: false,
  });
};

export const useMe = () => {
  return useQuery(['me'], commonRepository.getMe, {
    refetchOnWindowFocus: false,
  });
};

export const useMutationMe = () => {
  return useMutation(['me'], commonRepository.mutateMe, {
    onSuccess: () => {
      queryClient.fetchQuery(['me']);
    },
  });
};
