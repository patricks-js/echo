"use server";

import { cookies } from "next/headers";
import { AUTH_COOKIE } from "../constants";

export const useSession = async () => {
  const cookieStore = await cookies();

  const session = cookieStore.get(AUTH_COOKIE);

  return session?.value;
};
