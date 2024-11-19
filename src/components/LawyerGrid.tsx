import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  IconBriefcase,
  IconCalendar,
  IconScale,
  IconUser,
} from "@tabler/icons-react";
import React from "react";

export function LawyerGrid() {
  const lawyers = [
    {
      name: "Zaid Bhatti",
      specialization: "Criminal Defense",
      description: "Expert in handling high-profile harassment cases.",
      hourlyRate: "$2000/hour",
      contactNumber: "(555) 234-5678",
      icon: <IconBriefcase className="h-5 w-5 text-neutral-500" />,
      imageUrl:
        "https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg",
    },
    {
      name: "Jane Doe",
      specialization: "Civil Law",
      description: "Proven record in managing sensitive civil disputes.",
      hourlyRate: "$1500/hour",
      contactNumber: "(555) 234-5678",
      icon: <IconCalendar className="h-5 w-5 text-neutral-500" />,
      imageUrl:
        "https://images.pexels.com/photos/3184404/pexels-photo-3184404.jpeg",
    },
    {
      name: "Robert Johnson",
      specialization: "Family Law",
      description: "Dedicated to resolving family matters with care.",
      hourlyRate: "$1800/hour",
      contactNumber: "(555) 234-5678",
      icon: <IconUser className="h-5 w-5 text-neutral-500" />,
      imageUrl:
        "https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg",
    },
    {
      name: "Emily Davis",
      specialization: "Intellectual Property",
      description: "Protecting copyrights and trademarks efficiently.",
      hourlyRate: "$2200/hour",
      contactNumber: "(555) 234-5678",
      icon: <IconScale className="h-5 w-5 text-neutral-500" />,
      imageUrl:
        "https://images.pexels.com/photos/3184406/pexels-photo-3184406.jpeg",
    },
    {
      name: "Michael Brown",
      specialization: "Tax Law",
      description: "Providing expert advice on corporate taxes.",
      hourlyRate: "$2000/hour",
      contactNumber: "(555) 234-5678",
      icon: <IconBriefcase className="h-5 w-5 text-neutral-500" />,
      imageUrl:
        "https://images.pexels.com/photos/3184399/pexels-photo-3184399.jpeg",
    },
    {
      name: "Laura Wilson",
      specialization: "Employment Law",
      description: "Focused on safeguarding workplace rights.",
      hourlyRate: "$1900/hour",
      contactNumber: "(555) 234-5678",
      icon: <IconBriefcase className="h-5 w-5 text-neutral-500" />,
      imageUrl:
        "https://images.pexels.com/photos/3184400/pexels-photo-3184400.jpeg",
    },
  ];

  return (
    <BentoGrid className="max-w-6xl mx-auto px-6 py-10 gap-8 mt-32">
      {lawyers.map((lawyer, index) => (
        <BentoGridItem
          key={index}
          title={lawyer.name}
          description={`${lawyer.specialization} - ${lawyer.description}`}
          header={
            <div className="flex flex-col items-center justify-center h-48 w-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg p-6">
              {/* Display image first */}
              <img
                src={lawyer.imageUrl}
                alt={lawyer.name}
                className="h-16 w-16 rounded-full object-cover border-2 border-neutral-300 dark:border-neutral-700"
              />
              <p className="text-white text-xl font-bold mt-2">{lawyer.hourlyRate}</p>
            </div>
          }
          icon={lawyer.icon}
          imageUrl={lawyer.imageUrl}  // Pass the image URL
          contactNumber={lawyer.contactNumber}  // Pass the contact number
          className="p-6 bg-white dark:bg-zinc-900 rounded-lg shadow-lg"
        />
      ))}
    </BentoGrid>
  );
  
}
