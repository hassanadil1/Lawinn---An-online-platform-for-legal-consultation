"use client";

import { useState } from "react";
import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";

export function ForumInput() {
  const placeholders = [
    "Is AI girlfriend Haram?",
    "Who is Tyler Durden?",
    "Is weed legal in Lahore?",
    "Can I blackmail in Nigeria?",
    "Is vaping Legal?",
    "Harvey Spectre Phone Number?",
  ];

  const [question, setQuestion] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setQuestion(e.target.value);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const token = localStorage.getItem("token"); // Adjust auth logic as necessary.
    if (!token) {
      alert("Please log in to submit a question.");
      return;
    }

    try {
      const response = await fetch("/api/Forum/question", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Corrected here
        },
        body: JSON.stringify({ text: question }),
      });

      if (response.ok) {
        const data = await response.json();
        alert("Question submitted successfully!");
        setQuestion(""); 
      } else {
        throw new Error(response.statusText);
      }
    } catch (error) {
      console.error("Error submitting question:", error);
      alert("Failed to submit the question. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center px-4 space-y-4">
      <h2 className="text-transparent bg-clip-text bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
        Enter Your Question Here:
      </h2>
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
    </div>
  );
}
