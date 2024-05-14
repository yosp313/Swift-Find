import Link from "next/link";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Image from "next/image";

import shoppingCart from "../../public/shopping-cart.svg";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import LogoutButton from "./logout/LogoutButton";

export type User = {
  id: string;
  fullName: string;
  email: string;
  imageUrl: string;
};

export const NavBar = () => {
  const cookiesStore = cookies();
  const userCookie: string = cookiesStore.get("user")?.value.slice(2) as string;

  if (!userCookie) {
    return redirect("/");
  }

  const user: User = JSON.parse(userCookie)[0];

  return (
    <nav className="flex justify-between mt-5 pb-5 mb-10 border-b-2 border-gray-700 items-center">
      <Link href="/" className="pl-10 text-xl font-bold">
        Swift Find
      </Link>
      <div className="flex gap-7 pr-20 items-center">
        <Link href="/products">
          <Button className="text-white text-xl" variant={"link"}>
            Products
          </Button>
        </Link>
        <Link href="/shopping-cart">
          <Button className="text-white font-semibold" variant={"link"}>
            <Image src={shoppingCart} alt="" height={24} width={24} />
          </Button>
        </Link>
        <LogoutButton />
        <Avatar>
          <AvatarImage src={user.imageUrl} alt="User profile picture" />
          <AvatarFallback className="bg-slate-500">
            {user.fullName}
          </AvatarFallback>
        </Avatar>
        {user.fullName}
      </div>
    </nav>
  );
};
