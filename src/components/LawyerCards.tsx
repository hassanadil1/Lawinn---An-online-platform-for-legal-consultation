"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";

export function LawyerCards({ lawyer }: { lawyer: { name: string; specialization: string; description: string; image: string; hourlyRate: string } }) {
  return (
    <div className="border border-gray-300 rounded-lg shadow-md hover:shadow-lg overflow-hidden">
      <BackgroundGradient className="p-4 sm:p-6 bg-white dark:bg-zinc-900">
        <Image
          src={lawyer.image}
          alt={`${lawyer.name}'s profile`}
          height="300"
          width="400"
          className="object-cover w-full h-[200px] sm:h-[250px] rounded-t-lg"
        />
        <div className="p-4">
          <p className="text-lg font-bold text-black dark:text-neutral-200">
            {lawyer.name}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
            {lawyer.specialization}
          </p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {lawyer.description}
          </p>
          <button className="mt-4 inline-flex items-center justify-center bg-black text-white rounded-full px-4 py-2 text-xs font-bold dark:bg-zinc-800">
            Hourly Consultancy: 
            <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 ml-2 text-white">
              ${lawyer.hourlyRate}/Hour
            </span>
          </button>
        </div>
      </BackgroundGradient>
    </div>
  );
}

export default function Home() {
  const lawyers = [
    {
      name: "Zaid Bhatti",
      specialization: "Harassment Cases",
      description: "Expert in wasooli and badmashi.",
      image: "https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?w=500&h=400",
      hourlyRate: "2000",
    },
    {
      name: "Jane Doe",
      specialization: "Criminal Defense",
      description: "Proven track record in defending high-profile cases.",
      image: "https://images.pexels.com/photos/3184404/pexels-photo-3184404.jpeg?w=500&h=400",
      hourlyRate: "1500",
    },
    {
      name: "Robert Johnson",
      specialization: "Family Law",
      description: "Dedicated to resolving sensitive family disputes.",
      image: "https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?w=500&h=400",
      hourlyRate: "1800",
    },
    {
      name: "Emily Davis",
      specialization: "Intellectual Property",
      description: "Specialist in protecting copyrights and trademarks.",
      image: "https://images.pexels.com/photos/3184406/pexels-photo-3184406.jpeg?w=500&h=400",
      hourlyRate: "2200",
    },
    {
      name: "Michael Brown",
      specialization: "Tax Law",
      description: "Providing guidance on corporate and personal tax matters.",
      image: "https://images.pexels.com/photos/3184399/pexels-photo-3184399.jpeg?w=500&h=400",
      hourlyRate: "2000",
    },
    {
      name: "Laura Wilson",
      specialization: "Employment Law",
      description: "Focused on workplace rights and compliance.",
      image: "https://images.pexels.com/photos/3184400/pexels-photo-3184400.jpeg?w=500&h=400",
      hourlyRate: "1900",
    },
  ];

  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <div className="text-center mt-20">
        <h1 className="text-4xl font-bold text-white mb-6">Meet Our Expert Lawyers</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Discover legal professionals specializing in various fields to assist you with all your legal needs.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 mt-12">
        {lawyers.map((lawyer, index) => (
          <LawyerCards key={index} lawyer={lawyer} />
        ))}
      </div>
    </main>
  );
}
