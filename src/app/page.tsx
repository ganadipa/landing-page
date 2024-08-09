import BeyondPremium from "@/components/home/beyond-premium";
import DiscoverTailoredExperiences from "@/components/home/discover-tailored-experiences";
import Hero from "@/components/home/hero";
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
        width={2000}
        height={200}
        alt="Separator"
        className="w-full max-w-6xl mx-auto my-12"
      />
    </main>
  );
}
