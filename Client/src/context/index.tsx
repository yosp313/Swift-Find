"use client";

import { Headset } from "@/utils/sanity/types";
import { createContext, useContext, useState } from "react";

type ContextType = {
  cart: Headset[];
  addToCart: (newItem: Headset) => void;
  removeFromCart: (itemId: string) => void;
};

export const CartContext = createContext<ContextType>({
  cart: [],
  addToCart: (newItem) => {},
  removeFromCart: (itemId) => {},
});

export function AppWrapper({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  const [cart, setCart] = useState<Headset[]>([]);

  const addToCart = (newItem: Headset) => {
    setCart((prevCart) => [...prevCart, newItem]);
  };

  const removeFromCart = (itemId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item._id !== itemId));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
