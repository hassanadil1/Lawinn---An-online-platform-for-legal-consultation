"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
    {
      title: "What are the legal implications of breaking a contract?",
      description: "Learn about the potential legal actions and consequences.",
      answers: ["Breaking a contract can lead to damages being awarded."],
    },
    {
      title: "How to file a trademark?",
      description:
        "Understand the steps and processes involved in filing for a trademark.",
      answers: ["You need to apply through your country's intellectual property office.", "You need to pay a fee."],
      
    },
    {
        title: "How to file a trademark?",
        description:
          "Understand the steps and processes involved in filing for a trademark.",
        answers: ["You need to apply through your country's intellectual property office.", "You need to pay a fee."],
        
      },
      {
        title: "How to file a trademark?",
        description:
          "Understand the steps and processes involved in filing for a trademark.",
        answers: ["You need to apply through your country's intellectual property office.", "You need to pay a fee."],
        
      },
      {
        title: "How to file a trademark?",
        description:
          "Understand the steps and processes involved in filing for a trademark.",
        answers: ["You need to apply through your country's intellectual property office.", "You need to pay a fee."],
        
      },
  ];
  
export function ForumQuestions() {
  return (
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
  );
}
