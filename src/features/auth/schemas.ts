import { insertUserSchema } from "@/db/schema";

export const loginSchema = insertUserSchema.pick({
  email: true,
  password: true,
});

export const registerSchema = insertUserSchema.pick({
  username: true,
  email: true,
  password: true,
});
