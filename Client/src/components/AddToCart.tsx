"use client";

import React from "react";
import { Button } from "./ui/button";
import { Headset } from "@/utils/sanity/types";
import { useCart } from "@/context";

export default function AddToCart({ data }: { readonly data: Headset }) {
  const { addToCart } = useCart();

  return (
    <Button
      variant={"secondary"}
      className="font-bold"
      onClick={() => addToCart(data)}
    >
      Add to cart
    </Button>
  );
}
