"use client";

import React from "react";
import { Button } from "./ui/button";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();
  const handleLogout = () => {
    Cookies.remove("user", { path: "/" });
    router.push("/");
  };

  return (
    <div>
      <Button
        variant={"secondary"}
        className="text-black bg-white"
        onClick={handleLogout}
      >
        Logout
      </Button>
    </div>
  );
}
