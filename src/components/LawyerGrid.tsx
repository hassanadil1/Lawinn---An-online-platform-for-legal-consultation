"use client";
import { Love_Ya_Like_A_Sister } from "@next/font/google";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { IconBriefcase } from "@tabler/icons-react";
import React, { useEffect, useState } from "react";

interface Lawyer {
  id: number;
  first_name: string;
  last_name: string;
  expertise: string;
  experience_years: number;
  pricing: string;
  phone_number: string;
  email: string;
}

export function LawyerGrid() {
  const [lawyers, setLawyers] = useState<Lawyer[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLawyers = async () => {
      try {
        const response = await fetch("/api/Gigs");
        const data = await response.json();
        setLawyers(data.lawyers);
      } catch (error) {
        console.error("Error fetching lawyers:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLawyers();
  }, []);

  if (loading) {
    return <div>Loading lawyers...</div>;
  }

  return (
    <BentoGrid className="max-w-6xl mx-auto px-6 py-10 gap-8 mt-32">
      {lawyers.map((lawyer) => (
        <BentoGridItem
          key={lawyer.id}
          title={`${lawyer.first_name} ${lawyer.last_name}`}
          expertise={`${lawyer.expertise}`}
          experience={`${lawyer.experience_years} years`}
          contact={`${lawyer.phone_number}`}
          header={
            <div className="flex flex-col items-center justify-center h-48 w-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg p-6">
              <p className="text-white text-xl font-bold mt-2">${lawyer.pricing}/hour</p>
            </div>
          }
          icon={<IconBriefcase className="h-5 w-5 text-neutral-500" />}
          className="p-6 bg-white dark:bg-zinc-900 rounded-lg shadow-lg"
        />
      ))}
    </BentoGrid>
  );
}