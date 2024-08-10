import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function PandooinDotCom() {
  return (
    <section id="pandooin" className="mt-12 w-full max-w-6xl mx-auto over">
      <Link href={"https://pandooin.com"}>
        <div className="w-full p-4 flex lg:flex-row space-y-2 justify-between items-center bg-no-repeat bg-center bg-cover overflow-hidden lg:h-36 h-48 relative">
          {/* Background Image */}
          <Image
            src={"/pandooin-bg.jpeg"}
            width={1200}
            height={1200}
            alt="Pandooin Website"
            className="w-full"
          />

          {/* Floating */}
          <div
            id="floating-pandooin"
            className="absolute flex max-lg:flex-col lg:justify-around items-center w-full h-full gap-4 "
          >
            {/* Logo */}
            <Image
              src={"/logo-white.png"}
              width={500}
              height={500}
              alt="Pandooin Logo"
              className="w-32 h-auto  left-6"
            />

            {/* Text */}
            <div className="text-white-default right-5 flex flex-col lg:items-end items-center">
              <p className="font-semibold">
                Want to see other destinations? Check us at our website
              </p>
              <div className="underline font-extrabold inline-flex">
                Pandooin.com <ArrowUpRight size={24} className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
}
