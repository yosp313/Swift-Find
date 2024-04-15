import Link from "next/link";
import { Button } from "./ui/button";

export const NavBar = () => {
  return (
    <nav className="flex justify-between mt-5 pb-5 mb-10 border-b-2 border-gray-300 items-center">
      <Link href="/" className="pl-10">
        Logo
      </Link>
      <div className="flex gap-7 pr-20">
        <Link href="/products">
          <Button variant={"outline"}>Products</Button>
        </Link>
        <Link href="/sign-up">
          <Button variant={"outline"}>Sign-Up</Button>
        </Link>
        <Button variant={"outline"}>Profile</Button>
      </div>
    </nav>
  );
};
