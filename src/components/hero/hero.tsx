import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <section className="flex justify-center h-screen" id="hero">
      <Image
        src={"/hero.png"}
        width={1440}
        height={810}
        alt="Zamrood by Pandooin"
        className="max-h-screen h-[810px] min-w-full object-cover absolute top-0 left-0 -z-10"
      />
      <div
        id="text-hero"
        className="z-10 max-w-6xl w-full flex flex-col gap-6 mt-36"
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
        <Button className="self-start text-base bg-transparent border-2 border-white rounded-full px-6 py-6 hover:bg-gold hover:border-gold">
          Take me there
        </Button>
      </div>
    </section>
  );
}
