"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { Headset } from "@/utils/sanity/types";

export default function QuantityCounter({ data }: { data: Headset }) {
  const [quantity, setQuantity] = useState(data.quantity);
  return (
    <div className="flex gap-7 items-center">
      <h2 className="text-3xl font-bold">Quantity: </h2>
      <Button variant={"secondary"} onClick={() => setQuantity(quantity - 1)}>
        -
      </Button>
      <p className="text-3xl">{quantity}</p>
      <Button
        variant={"secondary"}
        onClick={() => {
          setQuantity((data.quantity = quantity + 1));
        }}
      >
        +
      </Button>
    </div>
  );
}
