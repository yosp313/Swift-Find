import React from "react";
import ShoppingCart from "./shoppingCart";
import { NavBar, User } from "@/components/NavBar";
import { cookies } from "next/headers";

export default function page() {
  const cookiesStore = cookies();
  const userCookie: string = cookiesStore.get("user")?.value.slice(2) as string;

  const user: User = JSON.parse(userCookie)[0];

  const userId = user.id;
  return (
    <ShoppingCart userId={userId}>
      <NavBar />
    </ShoppingCart>
  );
}
