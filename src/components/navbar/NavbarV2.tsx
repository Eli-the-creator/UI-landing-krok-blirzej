import React from "react";
import Logo from "./Logo";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky bg-white border rounded-full top-8 px-9 py-2 w-[90%] mx-auto shadow-sm z-50">
      <div className="flex justify-between items-center">
        <div>
          <Logo />
        </div>
        <div className="flex justify-between items-center h-full space-x-4 hidden xl:block lg:block">
          <Button
            variant={"outline"}
            asChild
            className=" rounded-full p-5 text-md"
          >
            <Link href="#">Start</Link>
          </Button>

          <Button
            asChild
            variant={"outline"}
            className=" rounded-full p-5 text-md"
          >
            <Link href="#">Mówcy</Link>
          </Button>

          <Button
            asChild
            className="rounded-full p-7 text-lg text-white shadow-md"
          >
            <Link href="#">Kup bilet</Link>
          </Button>
        </div>

        <div className="sm:block md:block xl:hidden lg:hidden">
          <Sheet>
            <SheetTrigger>
              <Button variant={"outline"} className="border-none" size={"icon"}>
                <Menu className="h-8 w-8" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Krok bliżej</SheetTitle>
                <SheetDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </SheetDescription>
              </SheetHeader>
              <div className="flex flex-col gap-y-6 mt-12">
                <Button
                  className="rounded-full p-5 text-md"
                  variant={"outline"}
                >
                  Mówcy
                </Button>
                <Button
                  className="rounded-full p-5 text-md"
                  variant={"outline"}
                >
                  Event plan
                </Button>

                <Button className="relative inline-flex rounded-full p-7 text-lg text-white shadow-md">
                  Kup bilet
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
