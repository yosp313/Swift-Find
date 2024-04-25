import AddToCart from "@/components/AddToCart";
import { NavBar } from "@/components/NavBar";
import { getSingleProduct } from "@/utils/sanity/sanity";
import Image from "next/image";

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
          <h1 className="text-4xl font-semibold">{product.name}</h1>
          <Image
            className="rounded-md h-auto w-auto"
            src={product.image.asset.url}
            alt={`${product.name} image`}
            width={400}
            height={400}
          />
        </div>
        <div className="flex flex-col items-center gap-20 pl-20">
          <p>{product.description}</p>
          <AddToCart data={product} />
        </div>
      </div>
    </>
  );
}
