import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "./ui/navigation-menu";

export const NavBar = () => {
  return (
    <nav className="flex justify-center mt-5 pb-5 mb-10 border-b-2 border-gray-300">
      <NavigationMenu>
        <NavigationMenuList className="flex justify-between items-center text-xl font-semibold gap-96">
          <NavigationMenuItem>
            <Link href="/">Logo</Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/products">products</Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/sign-up">Sign-Up</Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
};
