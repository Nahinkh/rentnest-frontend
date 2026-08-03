"use client";

import React from 'react'
import { Button } from '../ui/button';
import { ArrowUpDown, Briefcase, Building2, Grid2X2, Home, LayoutList, Store, WarehouseIcon } from 'lucide-react';
interface PropertyToolbarProps {
  total?: number;
  activeCategory?: string;
  onSelectCategory?: (category: string) => void;
}
const PropertyToolbar = ({ activeCategory, onSelectCategory }: PropertyToolbarProps) => {
    const categories = [
  { name: "All", icon: Home },
  { name: "Apartments", icon: Building2 },
  { name: "Family Homes", icon: Home },
  { name: "Offices", icon: Briefcase },
  { name: "Commercial", icon: Store },
  { name: "Warehouse", icon: WarehouseIcon },
];
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t bg-background/80 backdrop-blur-md md:hidden">
      <div className="container mx-auto flex items-center justify-around overflow-x-auto px-2 py-3">
        {categories.map((category, index) => {
          const Icon = category.icon;
          const isActive = activeCategory === category.name;

          return (
            <Button
              key={index}
              onClick={() => onSelectCategory && onSelectCategory(category.name)}
              className={`flex flex-col items-center gap-1 px-3 py-1 text-xs font-medium transition-colors ${
                isActive ? "text-primary" : "text-muted-foreground hover:text-primary"
              }`}
            >
              <Icon className="size-5" />
              <span>{category.name}</span>
            </Button>
          );
        })}
      </div>
    </div>
  )
}

export default PropertyToolbar