
import { BackgroundLinesDemo } from "@/components/Bg-lines";
import { Footer_Boxes } from "@/components/Footer";
import Hero from "@/components/Hero";
import { TypewriterEffectDemo } from "@/components/Hero2";
import { LoginForm } from "@/components/Login";
import { SignUp } from "@/components/SignUp";

import { TracingBeamDemo } from "@/components/TracingBeam";

import { StickyScrollRevealDemo } from "@/components/ui/StickyScroll";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";


export default function Home() 
{
  return (

    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
       <LoginForm />  
       <Footer_Boxes />
    </main>
  
  );
}
