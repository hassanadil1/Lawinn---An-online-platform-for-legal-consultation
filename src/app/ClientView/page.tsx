
import { Footer_Boxes } from "@/components/Footer";


import { LawyerCards } from "@/components/LawyerCards";
import Navbar from "@/components/Navbar";
import Navbar2 from '../../components/Navbar2';




export default function Home() {
  return (

    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
       <Navbar2 />
       <div className="flex flex-wrap justify-center mt-40 mb-40">
       <LawyerCards />
       </div>
       <Footer_Boxes />
    </main>
  
  );
}
