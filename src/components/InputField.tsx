"use client";

import { useState } from "react";
import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";
import { TextGenerateEffectDemo } from "./Generate-Text"; // To display the response

export function InputField() {
  const [userInput, setUserInput] = useState<string>(""); // Track user input
  const [response, setResponse] = useState<string>("");

  const placeholders = [
    "Is AI girlfriend Haram?",
    "Who is Tyler Durden?",
    "Is weed legal in Lahore?",
    "Can I blackmail in Nigeria?",
    "Is vaping Legal?",
    "Harvey Spectre Phone Number?",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value); // Update state as user types
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (userInput.trim() === "") return;

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userInput }),
      });

      const data = await response.json();
      setResponse(data.answer); // Set response from OpenAI
    } catch (error) {
      console.error("Error submitting the request:", error);
    }
  };

  return (
    <div className="flex flex-col items-center px-4 space-y-4">
      <h2 className="text-transparent bg-clip-text bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
        Ask LawInn
      </h2>
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
      {response && <TextGenerateEffectDemo words={response} />}
    </div>
  );
}
