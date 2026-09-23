import React from "react";
import HeroCarousel from "./HeroCarousel";
import HeroSearch from "./HeroSearch";

const Hero = () => {
  return (
    <section className="w-full pt-4 sm:pt-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="overflow-hidden rounded-2xl sm:rounded-3xl">
          <HeroCarousel />
        </div>
      </div>
    </section>
  );
};

export default Hero;
