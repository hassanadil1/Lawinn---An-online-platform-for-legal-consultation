import { Footer_Boxes } from "@/components/Footer";
import { TextGenerateEffectDemo } from "@/components/Generate-Text";
import { InputField } from "@/components/InputField";
import { BoxRevealDemo } from "@/components/BoxReveal";

interface Lawyer {
    id: number;
    first_name: string;
    last_name: string;
    expertise: string;
    experience_years: number;
    pricing: string;
    phone_number: string;
    email: string;
    highlights: string[];
}

const lawyerData: Lawyer = {
    id: 1,
    first_name: "Hassan",
    last_name: "Adil",
    expertise: "Criminal Law",
    experience_years: 20,
    pricing: "$250",
    phone_number: "+1234567890",
    email: "hassan.adil@example.com",
    highlights: [
      "20+ Murder charges cleared",
      "Taught Harvey Spectre",
      "Made the Constitution of America",
      "Student of Qaid-e-Azam",
      "Loves Football",
      "100% closing rate, and knows all the judges in town"
    ],
  };
  

  
export default function About() {
    return (
        <>
        
            <div className="pl-10 mt-52 mb-40">
             <BoxRevealDemo lawyer = {lawyerData} />
            </div>
            <Footer_Boxes />

        </>
    );
}
