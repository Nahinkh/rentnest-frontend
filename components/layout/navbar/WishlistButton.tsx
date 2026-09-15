import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import Link from "next/link";
import React from "react";

const WishlistButton = () => {
  return (
    <Button
      variant="ghost"
      size="icon"
      className="h-9 w-9 rounded-full"
    >
      <Link href="/wishlist" aria-label="Wishlist">
        <Heart className="h-4 w-4" />
      </Link>
    </Button>
  );
};

export default WishlistButton;
