import { api } from "@/lib/rpc";
import { useQuery } from "@tanstack/react-query";

export const useGetAccount = () => {
  const query = useQuery({
    queryKey: ["me"],
    queryFn: async () => {
      const res = await api.user.$get();

      const { data } = await res.json();

      return data;
    },
  });

  return query;
};
