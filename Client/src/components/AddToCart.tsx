"use client";

import React from "react";
import { Button } from "./ui/button";
import { Product } from "@/utils/sanity/types";

export default function AddToCart({ data }: { readonly data: Product }) {
  const handleSubmit = async () => {
    await fetch("http://localhost:8000/cart", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };
  return (
    <form action={handleSubmit}>
      <Button variant={"secondary"} className="font-bold" type="submit">
        Add to cart
      </Button>
    </form>
  );
}
