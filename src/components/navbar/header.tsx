import React from "react";
import Logo from "./logo";
import Nav from "./nav";
import Link from "next/link";

export default function Header() {
  return (
    <header
      id="navbar"
      className="sticky top-0 z-50 w-full flex items-center py-6 justify-center bg-white-default mx-auto"
    >
      <div
        id="logo-nav-wrapper"
        className="w-full flex items-center justify-between max-w-6xl px-12 lg:px-4 mx-auto"
      >
        <Link href={"www.zamrood.com"}>
          <Logo />
        </Link>
        <Nav />
      </div>
    </header>
  );
}
