"use client";

import React, { useEffect, useState } from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

interface Answer {
  id: number;
  text: string;
  lawyer_name: string;
}

interface Question {
  id: number;
  text: string;
  user_name: string;
  answers: Answer[];
}

export function ForumQuestions() {
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch("/api/Forum/getquestions");
        if (response.ok) {
          const data = await response.json();
          setQuestions(data.questions || []);
        } else {
          throw new Error(response.statusText);
        }
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };

    fetchQuestions();
  }, []);

  return (
    <div className="p-10">
      {questions.length > 0 ? (
        <StickyScroll
          content={questions.map((q) => ({
            id: q.id, 
            title: q.text,
            description: `Asked by: ${q.user_name}`,
            answers: q.answers.map((a) => `${a.lawyer_name}: ${a.text}`),
          }))}
        />
      ) : (
        <p>No questions available. Be the first to ask!</p>
      )}
    </div>
  );
}
