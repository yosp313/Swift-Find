import { NavBar } from "@/components/NavBar";
import React from "react";

export default function Products() {
  return (
    <>
      <NavBar />
      <main className="flex flex-col min-h-screen justify-center items-center">
        <h1 className="text-7xl font-bold">Products</h1>
      </main>
    </>
  );
}
