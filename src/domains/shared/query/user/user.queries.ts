import { useMutation } from "@tanstack/react-query";
import UserRepository from "./user.repository";

export const usePostUser = () => {
  return useMutation({
    mutationKey: ["postUser"],
    mutationFn: (data: string) => UserRepository.postUser(data),
  });
};
