import { NavBar } from "@/components/NavBar";
import { Product } from "@/utils/sanity/types";
import Image from "next/image";

export default async function ShoppingCart() {
  const response = await fetch("http://localhost:8000/cart");

  const cartItems: Product[] = await response.json();

  console.log(cartItems);

  return (
    <>
      <NavBar />
      <div className="flex flex-col items-center min-h-screen">
        <h1 className="text-7xl font-bold">Shopping Cart</h1>
        <div className="flex flex-col justify-start items-start gap-10 pt-24 pr-96 mr-96 relative">
          {cartItems.map((item) => {
            return (
              <div
                className="flex items-center gap-44 pr-96 border-t-2 border-slate-500 w-full"
                key={item._id}
              >
                <Image
                  src={item.mainImage.asset.url}
                  alt="Product Image"
                  width={150}
                  height={150}
                />
                <h1>{item.title}</h1>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
