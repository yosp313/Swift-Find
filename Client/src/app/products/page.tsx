import { NavBar } from "@/components/NavBar";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { getProducts } from "@/utils/sanity/sanity";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function Products() {
  const products = await getProducts();

  return (
    <>
      <NavBar />
      <main className="flex flex-col min-h-screen items-center">
        <h1 className="text-7xl font-bold pb-20">Products</h1>
        <div className="flex gap-20 pt-20 flex-wrap items-end">
          {products.map((product) => (
            <Link href={`products/${product.slug}`} key={product._id}>
              <Card className="bg-black text-white border-2 border-zinc-500 flex flex-col items-center min-h-fit w-56">
                <CardContent className="flex flex-col gap-4 p-5">
                  <Image
                    className="rounded-md aspect-[5/6]"
                    src={product.image.asset.url}
                    alt={`${product.name} image`}
                    width={200}
                    height={200}
                  />
                  <CardTitle>{product.name}</CardTitle>
                  <CardDescription className="text-zinc-300">
                    ${product.price}
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
