import { cookies } from "next/headers";

export async function getSession() {
  const cookie = await cookies();
  const session = cookie.get("user_session");

  if (!session) {
    return null;
  }

  return JSON.parse(session.value);
}
