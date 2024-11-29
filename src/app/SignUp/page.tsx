
import { BackgroundLinesDemo } from "@/components/Bg-lines";
import { Footer_Boxes } from "@/components/Footer";
import Hero from "@/components/Hero";
import { TypewriterEffectDemo } from "@/components/Hero2";
import { SignUp } from "@/components/sigin";

import { TracingBeamDemo } from "@/components/TracingBeam";

import { StickyScrollRevealDemo } from "@/components/ui/StickyScroll";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";


export default function Home() 
{
  return (

    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
       <SignUp />
       <Footer_Boxes />
    </main>
  
  );
}


// import React from 'react';
// import type { Metadata } from "next";
// import localFont from "next/font/local";
// import "@/app/globals.css";
// import Navbar from "@/components/Navbar";
// import Navbar2 from '@/components/Navbar2';
// interface SignUpLayoutProps {
//     children: React.ReactNode;
// }

// const SignUpLayout: React.FC<SignUpLayoutProps> = ({ children }) => {
//     return (
//         <div className="signup-layout">
//             <div className="relative w-full flex items-center justify-center">
//                 <Navbar />
//             </div>
//             <main>
//                 {children}
//             </main>

//         </div>
//     );
// };

// export default SignUpLayout;
