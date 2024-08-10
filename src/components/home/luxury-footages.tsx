"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import {
  Fullscreen,
  Thumbnails,
  Zoom,
} from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { ImageSlideshow } from "./images-slideshow";

export default function LuxuryFootages() {
  const [index, setIndex] = useState(-1);
  const images = new Array(6)
    .fill("0")
    .map((_, index) => `/luxury-${index}.png`);

  return (
    <section id="luxury-footages" className="bg-gold w-full">
      <Lightbox
        open={index >= 0}
        plugins={[Zoom, Thumbnails, Fullscreen]}
        close={() => setIndex(-1)}
        slides={new Array(6).fill("0").map((_, index) => ({
          src: `/luxury-${index}.png`,
          alt: `Luxury Footage ${index + 1}`,
        }))}
        className=""
        index={index}
      />
      <div
        id="luxury-contents"
        className="w-full max-w-6xl p-6 mx-auto max-lg:hidden"
      >
        <h2 className="font-thesignature text-8xl text-darker-green my-12">
          Luxury Footages
        </h2>
        <div className="grid grid-cols-3 gap-6 auto-rows-min">
          {new Array(6).fill("0").map((_, index) => (
            <React.Fragment key={index}>
              <Image
                src={`/luxury-${index}.png`}
                width={2000}
                height={2000}
                alt={`Luxury Footage ${index + 1}`}
                className="w-full h-auto cursor-pointer"
                onClick={() => setIndex(index)}
              />
              {index === 2 && (
                <Image
                  src={"/separator-white.png"}
                  alt="separator"
                  width={1200}
                  height={1200}
                  className="col-span-3"
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
      <div
        id="luxury-contents"
        className="w-full max-w-6xl p-6 mx-auto lg:hidden"
      >
        <h2 className="font-thesignature text-6xl text-darker-green my-12">
          Luxury Footages
        </h2>
        <ImageSlideshow images={images} onImageClick={setIndex} />
      </div>
    </section>
  );
}
