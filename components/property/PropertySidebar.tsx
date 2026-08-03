import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
} from "../ui/sidebar";
import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Building, Building2, Home, RotateCcw, Search, Warehouse } from "lucide-react";

const PropertySidebar = () => {
  const categories = [
    {
      label: "Apartment",
      icon: Building2,
    },
    {
      label: "House",
      icon: Home,
    },
    {
      label: "Office",
      icon: Building,
    },
    {
      label: "Commercial",
      icon: Warehouse,
    },
  ];
  return (
    <Sidebar
      variant="floating"
      collapsible="offcanvas"
      className="top-20 h-[calc(100svh-5rem)]"
    >
      <SidebarHeader className="border-b">
        <h2 className="text-xl font-bold">Filters</h2>

        <SidebarInput placeholder="Search property..." />
      </SidebarHeader>

      <SidebarContent>
        {/* Category */}

        <SidebarGroup>
          <SidebarGroupLabel>Category</SidebarGroupLabel>

          <SidebarGroupContent className="space-y-3">
            {categories.map((category) => (
              <label
                key={category.label}
                className="flex cursor-pointer items-center gap-3 rounded-lg px-2 py-2 transition hover:bg-muted"
              >
                <Checkbox />

                <category.icon className="size-4 text-primary" />

                <span>{category.label}</span>
              </label>
            ))}
          </SidebarGroupContent>
        </SidebarGroup>

        {/* City */}

        <SidebarGroup>
          <SidebarGroupLabel>City</SidebarGroupLabel>

          <SidebarGroupContent>
            <Input placeholder="Dhaka" />
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Price */}

        <SidebarGroup>
          <SidebarGroupLabel>Maximum Rent</SidebarGroupLabel>

          <SidebarGroupContent>
            <Input type="number" placeholder="50000" />
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Bedrooms */}

        <SidebarGroup>
          <SidebarGroupLabel>Bedrooms</SidebarGroupLabel>

          <SidebarGroupContent className="grid grid-cols-4 gap-2">
            {[1, 2, 3, "4+"].map((bed) => (
              <Button key={bed} variant="outline" size="sm">
                {bed}
              </Button>
            ))}
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Availability */}

        <SidebarGroup>
          <SidebarGroupLabel>Availability</SidebarGroupLabel>

          <SidebarGroupContent className="space-y-3">
            <label className="flex items-center gap-3">
              <Checkbox />
              Available
            </label>

            <label className="flex items-center gap-3">
              <Checkbox />
              Rented
            </label>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t">
        <Button className="w-full">Apply Filters</Button>

        <Button variant="outline" className="w-full">
          <RotateCcw className="mr-2 size-4" />
          Reset Filters
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
};

export default PropertySidebar;
