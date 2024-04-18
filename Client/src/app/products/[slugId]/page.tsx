import { NavBar } from "@/components/NavBar";
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
      <div className="flex flex-col justify-center items-center gap-11">
        <h1 className="text-4xl font-semibold">{product.title}</h1>
        <Image
          className="rounded"
          src={product.mainImage.asset.url}
          alt={`${product.title} image`}
          width={400}
          height={400}
        />
        <p>{product.description}</p>
      </div>
    </>
  );
}
