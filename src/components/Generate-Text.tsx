"use client";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const words = `To be, or not to be, that is the question:
Whether 'tis nobler in the mind to suffer
The slings and arrows of outrageous fortune,
Or to take arms against a sea of troubles
And by opposing end them.
`;

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} />;
}
