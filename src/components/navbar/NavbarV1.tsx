import React from "react";
import Logo from "./Logo";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky bg-white border rounded-full top-8 px-9 py-2 w-[90%] mx-auto shadow-sm">
      <div className="flex justify-between items-center">
        <div>
          <Logo />
        </div>
        <div className="flex justify-between items-center h-full space-x-4">
          <Button className="rounded-full p-5 text-md" variant={"outline"}>
            Mówcy
          </Button>
          <Button className="rounded-full p-5 text-md" variant={"outline"}>
            Event plan
          </Button>

          <Button className="relative inline-flex rounded-full p-7 text-lg text-white shadow-md">
            Kup bilet
          </Button>
          {/* <Menu className="h-8 w-8" /> */}
        </div>
      </div>
    </nav>
  );
}
