"use server";

import { cookies } from "next/headers";

export const logout = () => {
  "use server";
  const cookieStore = cookies();
  cookieStore.delete("user");
};
