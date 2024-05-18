"use client";

import { Headset } from "@/utils/sanity/types";
import { createContext, useContext, useEffect, useState } from "react";

type ContextType = {
  cart: Headset[];
  addToCart: (newItem: Headset) => void;
  removeFromCart: (itemId: string) => void;
  total: number;
};

export const CartContext = createContext<ContextType>({
  cart: [],
  addToCart: (newItem) => {},
  removeFromCart: (itemId) => {},
  total: 0,
});

export function AppWrapper({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  const savedCart =
    typeof window !== "undefined" ? localStorage.getItem("cart") : "";
  const [cart, setCart] = useState<Headset[]>(() =>
    savedCart ? JSON.parse(savedCart) : []
  );

  const addToCart = (newItem: Headset) => {
    setCart((prevCart) => [...prevCart, newItem]);
  };

  const [total, setTotal] = useState<number>(0);

  function calculateTotal(cart: Headset[]): number {
    const total = cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    return Number(total.toFixed(2));
  }

  useEffect(() => {
    setTotal(calculateTotal(cart));
    if (typeof window !== "undefined")
      localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const removeFromCart = (itemId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item._id !== itemId));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, total }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
