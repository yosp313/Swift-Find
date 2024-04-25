import React from "react";
import { Button } from "./ui/button";
import { useCart } from "@/context";

export default function DeleteButton({ id }: { readonly id: string }) {
  const { removeFromCart } = useCart();
  return (
    <Button variant={"destructive"} onClick={() => removeFromCart(id)}>
      Delete
    </Button>
  );
}
