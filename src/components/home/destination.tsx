import { Itinerary } from "@/lib/types";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";
import ItineraryWithDescription from "./itinerary-card";

export default async function Destination() {
  const resp = await fetch(
    "https://pandooin.com/api/zamrood/itinerary?highlight=true"
  );
  const data = await resp.json();
  const itineraries: Itinerary[] = data.data;

  const EXPECT_NUM_EXTEND = 3;
  const NUM_EXTEND = Math.min(EXPECT_NUM_EXTEND, itineraries.length);

  const EXPECT_NUM_REST = 4;
  const NUM_REST = Math.min(EXPECT_NUM_REST, itineraries.length - NUM_EXTEND);

  return (
    <section
      id="destination"
      className="w-full max-w-6xl mx-auto px-4 my-12 flex flex-col gap-12 my"
    >
      {/* Title */}
      <div className="flex max-lg:flex-col lg:gap-6 gap-2">
        <h2 className="font-bold font-unbounded text-dark-green text-2xl lg:text-4xl mb-2">
          Destinations
        </h2>
        <Link
          href="https://www.zamrood.com/destination"
          className="flex gap-4 text-dark-green items-center border-dark-green hover:border-gold hover:text-gold transition-all duration-300 max-lg:self-start"
        >
          <ChevronRight className="w-12 h-12 rounded-full border-2 border-inherit  mx-auto font-thin" />
          <span className="uppercase">Explore more</span>
        </Link>
      </div>

      {/* Extended Itineraries */}
      <div id="iteneraries-with-description" className="flex flex-col gap-24">
        {itineraries.slice(0, NUM_EXTEND).map((itinerary, index) => (
          <ItineraryWithDescription
            key={index}
            itinerary={itinerary}
            index={index}
          />
        ))}
      </div>

      {/* Rest Iteneraries */}

      {/* Explore More */}
      <Link
        href="https://www.zamrood.com/destination"
        className="flex gap-4 text-dark-green items-center border-dark-green hover:border-gold hover:text-gold transition-all duration-300 lg:self-end self-center"
      >
        <ChevronRight className="w-12 h-12 rounded-full border-2 border-inherit  mx-auto font-thin" />
        <span className="uppercase">Explore more</span>
      </Link>
    </section>
  );
}
