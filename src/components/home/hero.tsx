import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex justify-center h-screen" id="hero">
      <Image
        src={"/hero.png"}
        width={1440}
        height={810}
        alt="Zamrood by Pandooin"
        className="h-screen w-full object-cover -z-50"
      />
      <div
        id="text-hero"
        className="absolute z-0 max-w-6xl w-full flex flex-col gap-6 mt-64"
      >
        <div id="text-hero-wrapper" className="">
          <h1 className="text-gold font-thesignature text-9xl mb-[-40px]">
            Premium Travel
          </h1>
          <h3 className="text-white-default font-unbounded font-bold text-6xl">
            Beyond Expectation
          </h3>
        </div>
        <p className="text-white-default text-2xl max-w-3xl">
          Experience the finest that Indonesia has to offer with our curated
          selection of premium trips, ensuring comfort every step of the way
        </p>
        <Link
          href="/#destination"
          className="self-start text-base text-white-default bg-transparent border-2 border-white rounded-full px-6 py-2.5 hover:bg-gold hover:border-gold transition-colors duration-300 font-bold"
        >
          Take me there
        </Link>
      </div>
    </section>
  );
}
