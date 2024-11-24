import { Footer_Boxes } from "@/components/Footer";
import { TextGenerateEffectDemo } from "@/components/Generate-Text";
import { InputField } from "@/components/InputField";
import {BoxRevealDemo} from "@/components/BoxReveal";

export default function About() {
    return (
        <>
        <div className="pl-10 mt-52 mb-40">
            <BoxRevealDemo />
        </div>
            <Footer_Boxes />
        </>
    );
}
