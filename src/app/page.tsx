import Articles from "@/components/home/articles";
import BeyondPremium from "@/components/home/beyond-premium";
import DiscoverTailoredExperiences from "@/components/home/discover-tailored-experiences";
import Hero from "@/components/home/hero";
import LuxuryFootages from "@/components/home/luxury-footages";
import PandooinDotCom from "@/components/home/pandooin-dot-com";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <Hero />

      {/* Section with title Beyond Premium */}
      <BeyondPremium />

      {/* Section with title Discover Tailored Experiences */}
      <DiscoverTailoredExperiences />

      {/* Separator with color */}
      <Image
        src="/separator-color.png"
        width={400}
        height={400}
        alt="Separator"
        className="w-full max-w-6xl mx-auto my-12"
      />

      {/* Section with title Luxury Footages */}
      <LuxuryFootages />

      {/* Pandooin.com */}
      <PandooinDotCom />

      {/* Articles Section */}
      <Articles />
    </main>
  );
}
