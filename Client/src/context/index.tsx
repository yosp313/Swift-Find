"use client";

import { createContext, useContext, useState } from "react";

export type Cart = {
  price_data: string;
  quantity: number;
};

type ContextType = {
  cart: Cart[];
  addToCart: (newItem: Cart) => void;
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
  const [cart, setCart] = useState<Cart[]>([]);

  const addToCart = (newItem: Cart) => {
    setCart((prevCart) => [...prevCart, newItem]);
  };

  const removeFromCart = (itemId: string) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.price_data !== itemId)
    );
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
