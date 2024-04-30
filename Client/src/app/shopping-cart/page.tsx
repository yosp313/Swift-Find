import React from "react";
import ShoppingCart from "./shoppingCart";
import { NavBar } from "@/components/NavBar";

export default function page() {
  return (
    <ShoppingCart>
      <NavBar />
    </ShoppingCart>
  );
}
