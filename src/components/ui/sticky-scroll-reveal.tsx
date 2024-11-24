"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    category?: string; // New field for category filtering
    tags?: string[]; // New field for tag filtering
    answers?: string[];
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const [filteredContent, setFilteredContent] = useState(content);
  const [filters, setFilters] = useState<{ category: string; tags: string[] }>({ category: "", tags: [] });

  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const linearGradients = [
    "linear-gradient(to bottom right, black, var(--cyan-500), black)",
    "linear-gradient(to bottom right, black, var(--pink-500), black)",
    "linear-gradient(to bottom right, black, var(--orange-500), black)",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  // Filter logic
  useEffect(() => {
    const filtered = content.filter((item) => {
      const matchesCategory =
        !filters.category || item.category === filters.category;
      const matchesTags =
        !filters.tags.length ||
        filters.tags.every((tag) => item.tags?.includes(tag));
      return matchesCategory && matchesTags;
    });
    setFilteredContent(filtered);
  }, [filters, content]);

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters((prev) => ({ ...prev, category: e.target.value }));
  };

  const handleTagChange = (e: React.ChangeEvent<HTMLInputElement>, tag: string) => {
    setFilters((prev) => {
      const tags = new Set(prev.tags);
      if (e.target.checked) {
        tags.add(tag);
      } else {
        tags.delete(tag);
      }
      return { ...prev, tags: Array.from(tags) };
    });
  };

  return (
    <motion.div
      animate={{
        backgroundImage: backgroundGradient,
      }}
      className="h-[30rem] w-full overflow-y-auto flex justify-center relative space-x-10 rounded-md p-10"
      ref={ref}
    >
      <div className="relative flex items-start px-4 w-full max-w-[1200px]">
        <div className="max-w-2xl">
          {filteredContent.map((item, index) => (
            <div key={item.title + index} className="my-20">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl font-bold text-slate-100"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-kg text-slate-300 max-w-sm mt-10"
              >
                {item.description}
              </motion.p>
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="mt-4"
              >
                {/* Answer Input Field */}
                <label htmlFor={`answer-${index}`} className="text-slate-200">
                  Your Answer:
                </label>
                <input
                  type="text"
                  id={`answer-${index}`}
                  placeholder="Type your answer here..."
                  className="mt-2 w-full px-4 py-2 rounded-md bg-slate-800 text-slate-100 border border-slate-600 focus:outline-none focus:ring focus:ring-cyan-500"
                />
                <button
                  type="button"
                  className="mt-2 w-full px-4 py-2 bg-cyan-600 text-white rounded-md hover:bg-cyan-700 focus:outline-none focus:ring focus:ring-cyan-500"
                >
                  Publish Answer
                </button>
              </motion.div>
              {/* Answers Section */}
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.8,
                }}
                className="mt-8"
              >
                <h3 className="text-lg font-semibold text-slate-100">
                  Answers:
                </h3>
                <ul className="mt-4 space-y-2">
                  {item.answers && item.answers.length > 0 ? (
                    item.answers.map((answer, answerIndex) => (
                      <li
                        key={`${item.title}-answer-${answerIndex}`}
                        className="p-4 bg-slate-800 rounded-md text-slate-300 border border-slate-700"
                      >
                        {answer}
                      </li>
                    ))
                  ) : (
                    <p className="text-slate-400">No answers yet.</p>
                  )}
                </ul>
              </motion.div>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      {/* Filter Card */}
      <div
        className={cn(
          "hidden lg:block h-60 w-80 rounded-md bg-black sticky top-10 overflow-hidden",
          contentClassName
        )}
      >
        <div className="p-4 text-slate-100">
          <h3 className="font-bold text-lg mb-4">Filter Questions</h3>
          {/* Category Filter */}
          <label className="block mb-2">Category:</label>
          <select
            className="w-full mb-4 p-2 rounded-md bg-slate-800 text-slate-100 border border-slate-600"
            onChange={handleCategoryChange}
          >
            <option value="">All</option>
            <option value="legal">Legal</option>
            <option value="policy">Policy</option>
            <option value="case-study">Case Study</option>
          </select>

          {/* Tag Filter */}
          <label className="block mb-2">Tags:</label>
          <div className="space-y-2">
            {["Contract Law", "Criminal Law", "Civil Law"].map((tag) => (
              <div key={tag} className="flex items-center">
                <input
                  type="checkbox"
                  id={tag}
                  onChange={(e) => handleTagChange(e, tag)}
                  className="mr-2"
                />
                <label htmlFor={tag} className="text-slate-200">
                  {tag}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
