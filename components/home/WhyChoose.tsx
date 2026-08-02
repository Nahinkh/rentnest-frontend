import { BadgeCheck, Building2, CreditCard, ShieldCheck } from 'lucide-react';
import React from 'react'

const WhyChoose = () => {

const features = [
  {
    icon: Building2,
    title: "Verified Properties",
    description:
      "Every property is reviewed before it is published.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Booking",
    description:
      "Your rental requests and payments are protected.",
  },
  {
    icon: CreditCard,
    title: "Online Payments",
    description:
      "Pay rent securely using Stripe integration.",
  },
  {
    icon: BadgeCheck,
    title: "Trusted Platform",
    description:
      "Thousands of tenants and landlords trust RentNest.",
  },
];
  return (
    <section className="bg-muted/40 py-24">
      <div className="container mx-auto px-4">
        <div className="mb-14 text-center">
          <p className="text-primary font-semibold">
            Why Choose Us
          </p>

          <h2 className="mt-2 text-4xl font-bold">
            Everything You Need In One Platform
          </h2>

          <p className="text-muted-foreground mx-auto mt-4 max-w-2xl">
            RentNest helps tenants find homes and enables landlords
            to manage their properties with confidence.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-2xl border bg-card p-8 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="bg-primary/10 text-primary mb-5 flex h-14 w-14 items-center justify-center rounded-xl">
                  <Icon className="size-7" />
                </div>

                <h3 className="mb-3 text-xl font-semibold">
                  {feature.title}
                </h3>

                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}

export default WhyChoose