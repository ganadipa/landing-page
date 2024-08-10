import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function PandooinDotCom() {
  return (
    <section id="pandooin" className="mt-12 w-full max-w-6xl mx-auto over">
      <Link href={"https://pandooin.com"}>
        <div className="w-full p-4 flex flex-col lg:flex-row space-y-2 justify-between items-center bg-no-repeat bg-center bg-cover overflow-hidden h-[100px] relative">
          <Image
            src={"/pandooin-bg.jpeg"}
            width={1200}
            height={1200}
            alt="Pandooin Website"
            className="w-full"
          />
          <Image
            src={"/logo-white.png"}
            width={500}
            height={500}
            alt="Pandooin Logo"
            className="w-32 h-auto absolute left-6"
          />
          <div className="text-white-default absolute right-5 flex flex-col items-end">
            <p>Want to see other destinations? Check us at our website</p>
            <span className="underline font-extrabold">Pandooin.com</span>
          </div>
        </div>
      </Link>
    </section>
  );
}
