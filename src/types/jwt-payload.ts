import type { JwtVariables } from "hono/jwt";

type JwtPayload = {
  sub: string;
  username: string;
  email: string;
  image: string;
  exp: number;
};

export type Variables = JwtVariables<JwtPayload>;
