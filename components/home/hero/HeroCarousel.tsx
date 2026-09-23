import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import React from 'react'
import { heroSlides } from './hero.data'
import Image from 'next/image'
import HeroSearch from './HeroSearch'

const HeroCarousel = () => {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent>
        {heroSlides.map((slide) => (
          <CarouselItem key={slide.id}>
            <div  className="relative h-[calc(100svh-8rem)] min-h-120 max-h-160 w-full overflow-hidden">
              {/* Background */}
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={slide.id === heroSlides[0].id}
                sizes="100vw"
                className="object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/45" />

              {/* Temporary content */}
              <div className="relative z-10 flex h-full items-center px-4 sm:px-6">
                <div className="mx-auto w-full max-w-7xl">
                  <div className="mx-auto max-w-3xl text-center text-white">
                    <p className="text-xs font-semibold tracking-[0.18em] text-white/75 sm:text-sm">
                      {slide.eyebrow}
                    </p>

                    <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                      {slide.title}
                    </h1>

                    <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-white/80 sm:text-base">
                      {slide.description}
                    </p>
                    <HeroSearch />
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* Desktop controls */}
      <CarouselPrevious className="left-4 hidden border-white/30 bg-black/20 text-white hover:bg-white hover:text-foreground sm:flex" />

      <CarouselNext className="right-4 hidden border-white/30 bg-black/20 text-white hover:bg-white hover:text-foreground sm:flex" />
    </Carousel>
  )
}

export default HeroCarousel