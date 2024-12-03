"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-tighter flex justify-center items-center gap-2">
          <span className="">
            <Image
              src={"/someflagger-logo.png"}
              width={40}
              height={40}
              alt="logo"
            />
          </span>
          SoMeFlagger.com
        </Link>

        <Sheet>
          <SheetTrigger asChild>
            <button className="p-2">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </button>
          </SheetTrigger>
          <SheetContent>
            <nav className="flex flex-col gap-4">
              <Link href="/" className="text-lg">
                Home
              </Link>
              <Link href="/report" className="text-lg">
                Report
              </Link>
              <Link href="/about" className="text-lg">
                About
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
