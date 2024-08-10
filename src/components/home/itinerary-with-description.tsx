import { Gallery, Itinerary } from "@/lib/types";
import React from "react";
import { ImageSlideshow } from "../images-slideshow";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "../ui/button";
import { getDaysAndNightsText } from "./shared";

export default function ItineraryWithDescription({
  itinerary,
  index,
}: {
  itinerary: Itinerary;
  index: number;
}) {
  const EXPECT_NUM_SLIDESHOW = 2;
  const NUM_SLIDESHOW = Math.min(
    itinerary.related_galleries.length,
    EXPECT_NUM_SLIDESHOW
  );

  const images = itinerary.related_galleries
    .slice(0, NUM_SLIDESHOW)
    .map((gallery: Gallery) => {
      return gallery.src;
    });

  return (
    <div
      className={cn("flex flex-col items-center gap-4", {
        "lg:flex-row-reverse": index % 2 === 0,
        "lg:flex-row": index % 2 === 1,
      })}
    >
      {/* Image Slideshow */}
      <div className="lg:w-[52%] w-full ">
        <ImageSlideshow images={images} className="aspect-video" />
      </div>

      {/* Description */}
      <div className="lg:w-1/2 w-full flex flex-col lg:justify-between gap-8">
        <div className="flex flex-col gap-2 lg:gap-0.5">
          <span className="uppercase text-xs lg:text-base">
            {getDaysAndNightsText(itinerary.itinerary_day)}
          </span>

          <h3 className="text-left text-dark-green text-base lg:text-4xl font-bold line-clamp-2">
            {itinerary.itinerary_name}
          </h3>

          <h6 className="text-left text-darker-green text-sm lg:text-base line-clamp-1 font-bold">
            Organized by {itinerary.partner_alias}
          </h6>

          <p className="text-left text-base lg:text-lg text-dark-teal line-clamp-4">
            {itinerary.itinerary_short_description}
          </p>
        </div>

        {/* Pricing and See Details */}
        <div className="mt-auto w-full inline-flex justify-between items-center">
          <div className="flex flex-col text-darker-green">
            <span className=" text-xs lg:text-base">Start from</span>
            <span className="font-unbounded text-lg lg:text-3xl font-medium">
              IDR{" "}
              {Number(
                itinerary.related_variant.itinerary_variant_pub_price
              ).toLocaleString()}
            </span>
          </div>
          <Link href="/destination/premium-trip-labuan-bajo-liveboard-in-vinca-voyages-phinisi">
            <Button className="button text-center inline-flex justify-center items-center px-6 py-2.5 rounded-full capitalize font-bold text-sm lg:text-base transition-colors ease-in-out duration-300 bg-transparent text-darker-green border-2 border-darker-green hover:bg-darker-green hover:text-white-default hover:border-darker-green">
              See Details
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
