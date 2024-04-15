import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="h-[50rem] w-full dark:bg-black bg-black  dark:bg-grid-white/[0.2] bg-grid-white/[0.2] relative flex flex-col items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <h1 className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-600 py-8">
          Swift Find
        </h1>
        <p className="text-xl sm:text-2xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-600 py-8">
          The only place that conveys ease and speed of finding products.
        </p>
        <Link href={"/sign-up"}>
          <Button className="text-md" variant={"secondary"}>
            <Image
              //add google icon here
              src={"@/public/next.svg"}
              alt=""
              width={20}
              height={20}
            />
            Get Started
          </Button>
        </Link>
      </div>
    </main>
  );
}
