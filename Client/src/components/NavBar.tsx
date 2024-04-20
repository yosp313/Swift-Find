import Link from "next/link";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Image from "next/image";

import shoppingCart from "../../public/shopping-cart.svg";

export const NavBar = () => {
  return (
    <nav className="flex justify-between mt-5 pb-5 mb-10 border-b-2 border-gray-700 items-center">
      <Link href="/" className="pl-10">
        Logo
      </Link>
      <div className="flex gap-7 pr-20">
        <Link href="/products">
          <Button className="text-white text-xl font-semibold" variant={"link"}>
            Products
          </Button>
        </Link>
        <Link href="/shopping-cart">
          <Button className="text-white font-semibold" variant={"link"}>
            <Image src={shoppingCart} alt="" height={24} width={24} />
          </Button>
        </Link>
        <Avatar>
          <AvatarImage src="" alt="User profile picture" />
          <AvatarFallback className="bg-slate-500">YA</AvatarFallback>
        </Avatar>
      </div>
    </nav>
  );
};
