import { z } from "zod";

export const usernameParamSchema = z.object({
  username: z.string().min(2),
});
