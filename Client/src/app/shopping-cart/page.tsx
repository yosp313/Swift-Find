import { NavBar } from "@/components/NavBar";
import { Button } from "@/components/ui/button";
import { Product } from "@/utils/sanity/types";
import Image from "next/image";

export default async function ShoppingCart() {
  const response = await fetch("http://localhost:8000/cart");

  const cartItems: Product[] = await response.json();

  console.log(cartItems);

  return (
    <>
      <NavBar />
      <h1 className="text-7xl font-bold text-center">Shopping Cart</h1>
      <div className="flex items-center min-h-screen gap-96">
        <div className="flex flex-col justify-start items-start gap-10 pt-24 relative">
          {cartItems.map((item) => {
            return (
              <div
                className="flex items-center gap-44 pr-96 border-t-2 border-zinc-700 w-full"
                key={item._id}
              >
                <Image
                  src={item.mainImage.asset.url}
                  alt="Product Image"
                  width={150}
                  height={150}
                  className="m-5"
                />
                <h1>{item.title}</h1>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col justify-center items-center min-h-screen w-full bg-zinc-950">
          <h1 className="text-5xl font-bold p-28">Total: </h1>
          <form action="http://localhost:8000/payment" method="POST">
            <Button variant={"secondary"} type="submit">
              Purchase
            </Button>
          </form>
          <p className="text-center pt-9">powered by @stripe</p>
        </div>
      </div>
    </>
  );
}
