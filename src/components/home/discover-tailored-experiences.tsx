import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function DiscoverTailoredExperiences() {
  return (
    <section
      id="discover-tailored-experiences"
      className="flex max-md:flex-col justify-center items-center max-w-6xl w-4/5 mx-auto "
    >
      <div className="md:w-1/2 w-full">
        <Image
          src={"/discover-tailored-experiences.png"}
          width={2000}
          height={2000}
          alt="Discover Tailored Experiences"
          className="w-64 mx-auto"
        />
      </div>
      <div className="md:w-1/2 flex flex-col gap-8 max-md:text-center">
        <h2 className="text-darker-green text-2xl lg:text-3xl font-bold font-unbounded ">
          Discover Tailored Experiences{" "}
        </h2>
        <p className="text-base lg:text-lg">
          Create your own journey, personalized to suit your preferences and
          interests, ensuring a once-in-a-lifetime adventure awaits.
        </p>
        <Link
          href={
            "https://pandooin.com/id/tailor-made/create?utm_source=zamrood&utm_medium=website&utm_campaign=premium"
          }
          className="px-6 py-2.5 bg-darker-green text-white-default rounded-full  md:self-start hover:bg-gold  transition-all duration-300 font-bold"
        >
          Customize Your Trip
        </Link>
      </div>
    </section>
  );
}
