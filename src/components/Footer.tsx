"use client";
import React from "react";
import { Boxes } from "./ui/background-boxes";
import { cn } from "@/lib/utils";

export function Footer_Boxes() {
  return (
    <footer className="h-80 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-t-lg">
      {/* Overlay for background effect */}
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />

      {/* Footer Heading */}
      <h1 className={cn("md:text-2xl text-lg text-white relative z-20 font-semibold")}>
        Stay Connected
      </h1>

      {/* Footer Description */}
      <p className="text-center mt-2 text-neutral-400 relative z-20 max-w-xs md:max-w-lg">
        Subscribe to our newsletter to receive updates, news, and helpful resources about coding and tech trends.
      </p>

      {/* Footer Links */}
      <div className="flex space-x-6 mt-4 relative z-20 text-neutral-300 text-sm">
        <a href="#about" className="hover:text-white">About Us</a>
        <a href="#contact" className="hover:text-white">Contact</a>
        <a href="#privacy" className="hover:text-white">Privacy Policy</a>
      </div>

      {/* Footer Bottom */}
      <div className="absolute bottom-2 text-center text-neutral-500 text-xs w-full z-20">
        © 2024 LawInn. All rights reserved.
      </div>
    </footer>
  );
}
