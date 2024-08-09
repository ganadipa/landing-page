import React from "react";
import Logo from "./logo";
import Nav from "./nav";

export default function Header() {
  return (
    <header
      id="navbar"
      className="sticky top-0 z-10 w-full flex items-center py-6 justify-center bg-transparent"
    >
      <div
        id="logo-nav-wrapper"
        className="w-full flex items-center justify-between max-w-7xl px-4 mx-auto"
      >
        <Logo />
        <Nav />
      </div>
    </header>
  );
}
