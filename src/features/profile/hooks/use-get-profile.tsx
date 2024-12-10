import { api } from "@/lib/rpc";
import { useQuery } from "@tanstack/react-query";

export const useGetProfile = (username: string) => {
  const query = useQuery({
    queryKey: ["profile", username],
    queryFn: async () => {
      const res = await api.profiles[":username"].$get({
        param: { username },
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.error);
      }

      const { data } = await res.json();
      return data;
    },
  });

  return query;
};
