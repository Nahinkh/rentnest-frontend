import Image from "next/image";
import Link from "next/link";
import React from "react";
import { LocationData } from "./browse-location.data";
import { ArrowUpRight } from "lucide-react";
interface LocationCardProps {
  location: LocationData;
}
const LocationCard = ({ location }: LocationCardProps) => {
  return (
    <Link
      href={`/properties?division=${location.slug}`}
      className="group relative block aspect-[4/3] overflow-hidden rounded-2xl"
    >
      <Image
        src={location.image}
        alt={`Properties in ${location.name}`}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/5" />

      <div className="absolute inset-x-0 bottom-0 p-5 text-white">
        <div className="flex items-end justify-between gap-3">
          <div>
            <h3 className="text-xl font-semibold tracking-tight">
              {location.name}
            </h3>

            <p className="mt-1 text-sm text-white/75">Explore properties</p>
          </div>

          <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm transition-colors group-hover:bg-white group-hover:text-black">
            <ArrowUpRight className="size-4" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default LocationCard;
