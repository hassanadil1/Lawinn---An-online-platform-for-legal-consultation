import { AuroraBackgroundDemo } from "@/components/Bg-Lights";
import { BackgroundLinesDemo } from "@/components/Bg-lines";
import { Footer_Boxes } from "@/components/Footer";
import Hero from "@/components/Hero";
import { TracingBeamDemo } from "@/components/TracingBeam";
import { AuroraBackground } from "@/components/ui/aurora-background";


export default function Home() {
  return (

    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
       <BackgroundLinesDemo/>
       <TracingBeamDemo />
       <Footer_Boxes />
    </main>
  
  );
}
