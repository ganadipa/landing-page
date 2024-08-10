import Image from "next/image";
import React from "react";
import Link from "next/link";
import Header from "../navbar/header";

export default function Hero() {
  return (
    <section
      className="flex justify-center max-h-screen h-[1000px] relative"
      id="hero"
    >
      <Image
        src={"/hero.png"}
        width={1440}
        height={810}
        alt="Zamrood by Pandooin"
        className="h-[1000px] max-h-screen w-full object-cover -z-50"
      />
      <div
        id="text-hero"
        className="absolute z-0 max-w-6xl w-full flex flex-col gap-6 bottom-1/3 px-12"
      >
        <div
          id="text-hero-wrapper"
          className="flex flex-col max-md:items-center "
        >
          <h1 className="text-gold font-thesignature text-6xl md:text-8xl lg:text-9xl md:mb-[-40px] mb-[-15px]">
            Premium Travel
          </h1>
          <h3 className="text-white-default font-unbounded font-bold text-xl md:text-2xl lg:text-6xl">
            Beyond Expectation
          </h3>
        </div>
        <p className="text-white-default text-base max-md:text-center  lg:text-2xl max-w-3xl">
          Experience the finest that Indonesia has to offer with our curated
          selection of premium trips, ensuring comfort every step of the way
        </p>
        <Link
          href="/#destination"
          className="lg:self-start self-center text-base text-white-default bg-transparent border-2 border-white rounded-full px-6 py-2.5 hover:bg-gold hover:border-gold transition-colors duration-300 font-bold"
        >
          Take me there
        </Link>
      </div>
    </section>
  );
}
