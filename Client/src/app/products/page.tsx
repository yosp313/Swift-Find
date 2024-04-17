import { NavBar } from "@/components/NavBar";
import { getProducts } from "@/utils/sanity/sanity";
import Link from "next/link";
import React from "react";

export default async function Products() {
  const products = await getProducts();

  return (
    <>
      <NavBar />
      <main className="flex flex-col min-h-screen justify-center items-center">
        <h1 className="text-7xl font-bold">Products</h1>
        {products.map((product: any) => (
          <div key={product.id}>
            <Link href={`/${product.id}`}>
              <h2>{product.title}</h2>
            </Link>
            <p>{product.description}</p>
          </div>
        ))}
      </main>
    </>
  );
}
