import { Building2, Home, MapPin, Search, Store, Warehouse } from "lucide-react";
import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const PropertyHero = () => {
  const categories = [
    { name: "All", icon: Home },
    { name: "Apartments", icon: Building2 },
    { name: "Family Homes", icon: Home },
    { name: "Offices", icon: Store },
    { name: "Commercial", icon: Warehouse },
  ];
  return (
    <section className="relative overflow-hidden border-b bg-linear-to-br from-primary via-background to-primary/20">
      {/* Background Blur */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-emerald-500/10 blur-[120px]" />

      <div className="container relative mx-auto px-4 py-24">
        <div className="mx-auto max-w-4xl text-center">
          {/* <span className="inline-flex rounded-full border bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            🏡 Discover Your Next Home
          </span>

          <h1 className="mt-6 text-5xl font-bold tracking-tight md:text-6xl">
            Find Your
            <span className="text-primary"> Perfect Rental </span>
            Home
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Browse verified apartments, family homes, offices, and commercial
            spaces across Bangladesh.
          </p> */}

          {/* Search Box */}
          <div className="mt-12 rounded-3xl border bg-card p-4 shadow-xl">
            <div className="grid gap-4 md:grid-cols-[1fr_1fr_auto]">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" />
                <Input
                  className="h-12 pl-11"
                  placeholder="Search by property..."
                />
              </div>

              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" />
                <Input className="h-12 pl-11" placeholder="City or Location" />
              </div>

              <Button size="lg" className="h-12 px-8">
                Search
              </Button>
            </div>
          </div>

          {/* Bottom Category List */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <button
                  key={index}
                  className="inline-flex items-center gap-2 rounded-full border bg-card/60 px-5 py-2.5 text-sm font-medium shadow-sm transition-all hover:border-primary hover:bg-primary/5 hover:text-primary"
                >
                  <Icon className="size-4 text-primary" />
                  {category.name}
                </button>
              );
            })}
          </div>

          {/* Stats */}
          {/* <div className="mt-12 grid grid-cols-3 gap-8">
            <div>
              <h3 className="text-3xl font-bold text-primary">500+</h3>
              <p className="text-muted-foreground">Properties</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-primary">64</h3>
              <p className="text-muted-foreground">Cities</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-primary">2K+</h3>
              <p className="text-muted-foreground">Happy Tenants</p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default PropertyHero;
