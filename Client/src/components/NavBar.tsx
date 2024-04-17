import Link from "next/link";
import { Button } from "./ui/button";

export const NavBar = () => {
  return (
    <nav className="flex justify-between mt-5 pb-5 mb-10 border-b-2 border-gray-700 items-center">
      <Link href="/" className="pl-10">
        Logo
      </Link>
      <div className="flex gap-7 pr-20">
        <Link href="/products">
          <Button className="text-white font-semibold" variant={"link"}>
            Products
          </Button>
        </Link>
        <Button className="text-white font-semibold" variant={"link"}>
          Profile
        </Button>
      </div>
    </nav>
  );
};
