"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { Headset } from "@/utils/sanity/types";
import { useCart } from "@/context";
import { useToast } from "./ui/use-toast";

export default function ClientButtons({ data }: { readonly data: Headset }) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(data.quantity);
  const { toast } = useToast();

  return (
    <>
      <div className="flex gap-7 items-center">
        <h2 className="text-3xl font-bold">Quantity: </h2>
        <Button
          variant={"secondary"}
          onClick={() => {
            data.quantity = quantity - 1;
            if (data.quantity >= 1) setQuantity(data.quantity);
          }}
        >
          -
        </Button>
        <p className="text-3xl">{quantity}</p>
        <Button
          variant={"secondary"}
          onClick={() => {
            data.quantity = quantity + 1;
            setQuantity(data.quantity);
          }}
        >
          +
        </Button>
      </div>
      <Button
        variant={"secondary"}
        className="font-bold"
        onClick={() => {
          toast({
            className: "bg-green-400 border-green-400",
            title: "Item has been added to the cart!",
          });
          addToCart(data);
        }}
      >
        Add to cart
      </Button>
    </>
  );
}
