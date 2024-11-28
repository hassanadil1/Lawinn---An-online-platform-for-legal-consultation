import { Footer_Boxes } from "@/components/Footer";
import  BoxRevealDemo  from "@/components/BoxReveal";
import { useAnimation } from 'framer-motion';



export default function About() {
  return (
    <>
      <div className="pl-10 mt-52 mb-40">
        <BoxRevealDemo/>
      </div>
      <Footer_Boxes />
    </>
  );
}
