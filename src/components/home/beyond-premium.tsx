import Image from "next/image";
import React from "react";

const items = [
  {
    img: "/beyond-premium-1.png",
    title: "Personal Itineraries",
    description:
      "Our premium travel services offer tailor-made itineraries crafted to suit your unique preferences and desires.",
  },
  {
    img: "/beyond-premium-2.png",
    title: "Exclusive Experiences",
    description:
      "From private charters to behind-the-scenes tours, we offer access to unique opportunities that are designed to elevate your trip to the next level.",
  },
  {
    img: "/beyond-premium-3.png",
    title: "Best Facilities",
    description:
      "Experience the epitome of with our premium facility, designed to provide an unparalleled level of comfort and indulgence.",
  },
];

export default function BeyondPremium() {
  return (
    <section id="beyond-premium" className="max-w-6xl m-12 mx-auto ">
      <div id="beyond-premium-head" className="text-center mb-6">
        <h1 className="font-thesignature text-5xl lg:text-7xl text-dark-green">
          Beyond Premium
        </h1>
        <h3 className="uppercase font-unbounded text-darker-green font-bold text-xl lg:text-3xl">
          Elevate your experience
        </h3>
      </div>
      <div
        id="beyond-premium-body"
        className="flex max-lg:flex-col max-lg:items-center gap-8 max-md:px-8"
      >
        {items.map((item, index) => (
          <Element
            key={index}
            img={item.img}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
}

function Element({
  img,
  title,
  description,
}: {
  img: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col gap-6 items-center lg:w-1/3 w-full">
      <Image
        src={img}
        width={400}
        height={400}
        alt={title}
        className="w-36 aspect-square"
      />

      <div className="flex flex-col items-center max-w-96">
        <h2 className="uppercase text-dark-green text-xl mb-2">{title}</h2>
        <p className="text-center max-md:text-sm">{description}</p>
      </div>
    </div>
  );
}
