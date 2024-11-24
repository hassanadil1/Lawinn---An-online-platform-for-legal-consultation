"use client";

import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";

export function InputField() {
  const placeholders = [
    "Is AI girlfriend Haram?",
    "Who is Tyler Durden?",
    "Is weed legal in Lahore?",
    "Can I blackmail in Nigeria?",
    "Is vaping Legal?",
    "Harvey Spectre Phone Number?",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <div className="flex flex-col items-center px-4 space-y-4"> {/* Removed excessive height */}
      <h2 className=" text-transparent bg-clip-text bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
        Ask LawInn
      </h2>
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
    </div>
  );
}
