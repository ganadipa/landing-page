import Image from "next/image";
import React from "react";

export default function Logo() {
  return (
    <Image
      src={"/logo-white.png"}
      width={430}
      height={82}
      alt="Zamrood by Pandooin"
      className="h-12 w-auto"
    />
  );
}
