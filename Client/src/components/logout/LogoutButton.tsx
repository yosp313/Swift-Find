"use client";

import React from "react";
import { Button } from "../ui/button";
import { logout } from "./logout";

export default function LogoutButton() {
  const handleLogout = async () => {
    logout();
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
