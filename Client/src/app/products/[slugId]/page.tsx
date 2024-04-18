import { NavBar } from "@/components/NavBar";
import { Button } from "@/components/ui/button";
import { getSingleProduct } from "@/utils/sanity/sanity";
import Image from "next/image";
import React from "react";

export default async function ProductPage({
  params,
}: {
  readonly params: { slugId: string };
}) {
  const product = await getSingleProduct(params.slugId);

  return (
    <>
      <NavBar />
      <div className="flex justify-center items-center gap-5">
        <div className="flex flex-col gap-5">
          <h1 className="text-4xl font-semibold">{product.title}</h1>
          <Image
            className="rounded"
            src={product.mainImage.asset.url}
            alt={`${product.title} image`}
            width={400}
            height={400}
          />
        </div>
        <div className="flex flex-col items-center gap-20 pl-20">
          <p>{product.description}</p>
          <Button variant={"secondary"}>Purchase</Button>
        </div>
      </div>
    </>
  );
}
