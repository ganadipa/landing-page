"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import path from "path";
import React from "react";
import { Button } from "../ui/button";
import { AlignJustify, AlignJustifyIcon, X } from "lucide-react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetClose,
} from "../ui/sheet";

const navItems = [
  {
    label: "Homepage",
    href: "/",
  },
  {
    label: "Customize Your Trip",
    href: "/#discover-tailored-experiences",
  },
  {
    label: "Destination",
    href: "/destination",
  },
  {
    label: "Article",
    href: "/#article",
  },
  {
    label: "Need Assistance?",
    href: "https://wa.me/6283831556160",
  },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <>
      <nav className="lg:flex gap-6 hidden">
        {navItems.map((navItem, index) => (
          <NavElement
            key={index}
            label={navItem.label}
            href={navItem.href}
            active={pathname === navItem.href}
            className={
              navItem.label === "Need Assistance?"
                ? "px-6 py-2.5 border-2 border-darker-green rounded-full hover:bg-darker-green hover:border-darker-green hover:text-white-default transition-all duration-300"
                : ""
            }
          />
        ))}
      </nav>
      <nav className="lg:hidden rounded-full border-2 flex items-center justify-center  border-darker-green w-12 h-12">
        <NavDrawer pathname={pathname} />
      </nav>
    </>
  );
}

function NavDrawer({ pathname }: { pathname: string }) {
  console.log(pathname);
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustifyIcon size="24" className="text-darker-green" />
      </SheetTrigger>
      <SheetContent side="right" className="bg-white-default">
        <SheetHeader>
          <SheetTitle className="text-dark-green">Navigation Menu</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col mt-12 items-end gap-6">
          {navItems.map((navItem, index) => (
            <Link
              key={index}
              href={navItem.href}
              className={cn(
                `bg-transparent text-dark-green font-albert-sans px-6 py-2.5 text-base font-bold hover:border-b-2 hover:border-b-darker-green `,
                {
                  "border-b-2 border-b-darker-green": pathname === navItem.href,
                  "px-6 py-2.5 border-2 border-darker-green rounded-full":
                    navItem.label === "Need Assistance?",
                }
              )}
            >
              <SheetClose>{navItem.label}</SheetClose>
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}

function NavElement({
  label,
  href,
  className,
  active,
}: {
  label: string;
  href: string;
  className?: string;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn(
        `bg-transparent text-dark-green font-albert-sans px-6 py-2.5 text-base font-bold hover:border-b-2 hover:border-b-darker-green `,
        {
          "border-b-2 border-b-darker-green": active,
        },
        className
      )}
    >
      {label}
    </Link>
  );
}
