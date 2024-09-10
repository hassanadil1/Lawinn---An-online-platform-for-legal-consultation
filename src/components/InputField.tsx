"use client";

import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";

export function InputField() {
  const placeholders = [
    "Is AI girlfriend Haram?",
    "Who is Tyler Durden?",
    "What is the meaning of life?",
    "Write a Python code to impress my teacher",
    "What are lists in Python?",
    "What is the best programming language?"
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <div className="h-[30rem] flex flex-col justify-center  items-center px-4">
      <h2 className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-3xl md:text-4xl lg:text-7xl font-sans py-4 md:py-10 relative z-20 font-bold tracking-tight">
          Ask Pybot
        </h2>
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
    </div>
  );
}
