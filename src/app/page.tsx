
import { BackgroundLinesDemo } from "@/components/Bg-lines";
import { Footer_Boxes } from "@/components/Footer";
import { ForumShowcase } from "@/components/ForumShowcase";
import Hero from "@/components/Hero";
import { TypewriterEffectDemo } from "@/components/Hero2";
import { TracingBeamDemo } from "@/components/TracingBeam";


import { TypewriterEffect } from "@/components/ui/typewriter-effect";


export default function Home() {
  return (

    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <BackgroundLinesDemo />
      <TypewriterEffectDemo />
      <TracingBeamDemo />
      <div className="space-y-8">
        {/* Section Heading */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
            Explore LawInn Forums
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            A place where legal experts and enthusiasts ask and answer questions.
          </p>
        </div>

        {/* Forum Showcase Component */}
        <ForumShowcase />
      </div>
      <Footer_Boxes />
    </main>

  );
}
