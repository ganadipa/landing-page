import { Gallery, Itinerary } from "@/lib/types";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { ImageSlideshow } from "../images-slideshow";
import { cn } from "@/lib/utils";
import { getDaysAndNightsText } from "./shared";

export default function ItineraryShort({
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
      className={cn(
        "flex flex-col justify-between items-center gap-4 w-[280px] flex-shrink-0"
      )}
    >
      {/* Image Slideshow */}
      <div className="w-full flex flex-col gap-4">
        <ImageSlideshow images={images} className="aspect-square" />
        <div className="flex flex-col gap-2 lg:gap-0.5">
          <span className="uppercase text-xs">
            {getDaysAndNightsText(itinerary.itinerary_day)}
          </span>

          <h3 className="text-left text-dark-green text-base font-bold line-clamp-2">
            {itinerary.itinerary_name}
          </h3>

          <h6 className="text-left text-darker-green text-sm  line-clamp-1 font-bold">
            Organized by {itinerary.partner_alias}
          </h6>
        </div>
      </div>

      {/* Pricing and See Details */}
      <div className="mt-auto w-full flex flex-col gap-6 justify-between items-center self-end">
        <div className="flex flex-col text-darker-green self-start">
          <span className=" text-xs ">Start from</span>
          <span className="font-unbounded text-lg  font-medium">
            IDR{" "}
            {Number(
              itinerary.related_variant.itinerary_variant_pub_price
            ).toLocaleString()}
          </span>
        </div>
        <Link
          href="/destination/premium-trip-labuan-bajo-liveboard-in-vinca-voyages-phinisi"
          className="self-start"
        >
          <Button className="button text-center inline-flex justify-center items-center px-6 py-2.5 rounded-full capitalize font-bold text-sm lg:text-base self-start transition-colors ease-in-out duration-300 bg-transparent text-darker-green border-2 border-darker-green hover:bg-darker-green hover:text-white-default hover:border-darker-green">
            See Details
          </Button>
        </Link>
      </div>
    </div>
  );
}
