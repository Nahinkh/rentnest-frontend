import { Link2, Mail, MapPin, Phone } from 'lucide-react'
import { FaFacebook, FaInstagram } from "react-icons/fa6"
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="mt-16 border-t border-border/60 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Main Footer */}
        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:py-16">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="inline-flex items-center text-xl font-bold tracking-tight"
            >
              Rent<span className="text-primary">Nest</span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-6 text-muted-foreground">
              Find a place you can call home. Discover rental properties,
              connect with landlords, and make renting simpler.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-2">
              <Link
                href="#"
                aria-label="Facebook"
                className="flex size-9 items-center justify-center rounded-full border border-border/60 text-muted-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
              >
                <FaFacebook className="size-4" />
              </Link>

              <Link
                href="#"
                aria-label="Instagram"
                className="flex size-9 items-center justify-center rounded-full border border-border/60 text-muted-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
              >
                <FaInstagram className="size-4" />
              </Link>

              <Link
                href="#"
                aria-label="LinkedIn"
                className="flex size-9 items-center justify-center rounded-full border border-border/60 text-muted-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Link2 className="size-4" />
              </Link>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-sm font-semibold">Explore</h3>

            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="/properties"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Browse Properties
                </Link>
              </li>

              <li>
                <Link
                  href="/wishlist"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Saved Properties
                </Link>
              </li>

              <li>
                <Link
                  href="/properties?division=dhaka"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Properties in Dhaka
                </Link>
              </li>

              <li>
                <Link
                  href="/properties?division=chattogram"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Properties in Chattogram
                </Link>
              </li>
            </ul>
          </div>

          {/* For Landlords */}
          <div>
            <h3 className="text-sm font-semibold">For Landlords</h3>

            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="/dashboard/landlord/properties/add"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  List Your Property
                </Link>
              </li>

              <li>
                <Link
                  href="/dashboard/landlord/properties"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Manage Properties
                </Link>
              </li>

              <li>
                <Link
                  href="/dashboard/landlord"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Landlord Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold">Contact</h3>

            <ul className="mt-4 space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />

                <span className="text-sm leading-5 text-muted-foreground">
                  Dhaka, Bangladesh
                </span>
              </li>

              <li>
                <Link
                  href="mailto:hello@rentnest.com"
                  className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Mail className="size-4 shrink-0 text-primary" />
                  hello@rentnest.com
                </Link>
              </li>

              <li>
                <Link
                  href="tel:+8801000000000"
                  className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Phone className="size-4 shrink-0 text-primary" />
                  +880 1000-000000
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col gap-4 border-t border-border/60 py-6 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} RentNest. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <Link
              href="/privacy"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Privacy
            </Link>

            <Link
              href="/terms"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer