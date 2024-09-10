import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import Link from "next/link";

export function BackgroundLinesDemo() {
  return (
    <BackgroundLines className="flex items-center justify-center w-full min-h-screen flex-col px-4">
      <div className="flex flex-col items-center justify-center text-center">
        <h2 className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-3xl md:text-4xl lg:text-7xl font-sans py-4 md:py-10 relative z-20 font-bold tracking-tight">
          Master Python<br /> With Pybot.
        </h2>
        <p className="max-w-lg text-sm md:text-lg text-neutral-700 dark:text-neutral-400 mt-4">
          A Simple, Easy to Use AI-Powered Chatbot to Help You Code Smarter.
        </p>
      </div>
    </BackgroundLines>
  );
}
