import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer id="footer" className="mt-12 bg-dark-green w-full">
      <div
        id="footer-wrapper"
        className="p-6 w-full max-w-6xl flex max-md:flex-col justify-between items-center mx-auto max-md:gap-8"
      >
        <span className="text-white-default text-sm lg:text-base">
          © 2023 Zamrood by PT Teknologi Pandu Wisata
        </span>

        <div id="social-media" className="flex gap-4">
          <Link
            href={"https://web.facebook.com/profile.php?id=100094528566390"}
          >
            <Image
              src={"/fb.svg"}
              width={24}
              height={24}
              alt="Facebook"
              className="h-auto"
            />
          </Link>
          <Link href={"https://www.instagram.com/zamrood.asia/"}>
            <Image src={"/ig.svg"} width={24} height={24} alt="Instagram" />
          </Link>
          <Link href={"mailto:zamrood@pandooin.com"}>
            <Image src={"/email.svg"} width={24} height={24} alt="Email" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
