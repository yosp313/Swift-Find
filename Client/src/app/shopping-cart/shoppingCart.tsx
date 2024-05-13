"use client";

import DeleteButton from "@/components/DeleteButton";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ShoppingCart({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  const { cart } = useCart();
  const { total } = useCart();
  const router = useRouter();
  const [formData, setFormData] = useState({
    country: "",
    city: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const handleSubmit = async () => {
    const purchaseData = cart.map((item) => ({
      price: item["price_data"],
      quantity: item["quantity"],
    }));

    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/payment`,
      {
        data: purchaseData,
        location: formData,
      }
    );

    console.log(location);
    router.push(response.data);
  };

  return (
    <>
      {children}
      <h1 className="text-7xl font-bold text-center">Shopping Cart</h1>
      <div className="flex items-center min-h-screen gap-96">
        <div className="flex flex-col justify-start items-start gap-10 pt-24 relative">
          {cart.map((item) => {
            return (
              <div
                className="flex items-center gap-44 pr-96 border-t-2 border-zinc-800 w-full"
                key={item._id}
              >
                <Image
                  src={item.image.asset.url}
                  alt="Product Image"
                  width={150}
                  height={150}
                  className="m-5"
                />
                <div className="flex items-center justify-center gap-12">
                  <p className="flex-nowrap">
                    ${item.price} X {item.quantity}
                  </p>
                </div>
                <h1>{item.name}</h1>
                <DeleteButton id={item._id} />
              </div>
            );
          })}
        </div>
        <div className="flex flex-col justify-center items-center min-h-screen w-full ">
          <h1 className="text-5xl font-bold p-28">Total: ${total}</h1>
          <form action={handleSubmit}>
            <label htmlFor="country">Country: </label>
            <input
              name="country"
              id="country"
              type="text"
              placeholder="eg: South Korea"
              value={formData.country}
              onChange={handleChange}
            />
            <label htmlFor="city">City: </label>
            <input
              name="city"
              id="city"
              type="text"
              placeholder="eg: Seoul"
              value={formData.city}
              onChange={handleChange}
            />
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
