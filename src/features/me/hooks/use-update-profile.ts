import { api } from "@/lib/rpc";
import { useMutation } from "@tanstack/react-query";
import type { InferRequestType, InferResponseType } from "hono";
import { toast } from "sonner";

type ResponseType = InferResponseType<(typeof api.user)["$put"], 200>;
type RequestType = InferRequestType<(typeof api.user)["$put"]>["json"];

export const useUpdateProfile = () => {
  const mutation = useMutation<ResponseType, Error, RequestType>({
    mutationFn: async (json) => {
      const res = await api.user.$put({ json });

      const data = await res.json();

      return data;
    },
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: () => {
      toast.success("Profile updated. 🎉");
    },
  });

  return mutation;
};
