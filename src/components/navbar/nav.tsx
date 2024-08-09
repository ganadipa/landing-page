"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import path from "path";
import React from "react";

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
    <nav className="flex gap-6">
      {navItems.map((navItem, index) => (
        <NavElement
          key={index}
          label={navItem.label}
          href={navItem.href}
          active={pathname === navItem.href}
          className={
            navItem.label === "Need Assistance?"
              ? "px-6 py-2.5 border-2 border-white-default rounded-full "
              : ""
          }
        />
      ))}
    </nav>
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
        `bg-transparent text-white-default font-albert-sans px-6 py-2.5 text-base font-bold hover:border-b-2 hover:border-b-white-default `,
        {
          "border-b-2 border-b-white-default": active,
        },
        className
      )}
    >
      {label}
    </Link>
  );
}
