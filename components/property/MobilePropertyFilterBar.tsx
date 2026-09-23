"use client";
import { useEffect, useState } from "react";
import PropertyFilterBar from "./PropertyFilterBar";
import React from "react";

const MobilePropertyFilterBar = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 120);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`fixed inset-x-0 top-0 z-40 border-b bg-background/95 px-4 py-2 shadow-sm backdrop-blur-md transition-transform duration-300 md:hidden ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <PropertyFilterBar />
    </div>
  );
};

export default MobilePropertyFilterBar;
