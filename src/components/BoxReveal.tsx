import React, { useEffect, useState } from "react";
import BoxReveal from "@/components/ui/box-reveal";

interface Lawyer {
  id: number;
  first_name: string;
  last_name: string;
  expertise: string;
  experience_years: number;
  pricing: string;
  phone_number: string;
  email: string;
  highlights: string[];
}

export async function BoxRevealDemo({ lawyer }: { lawyer: Lawyer }) {
  return (
    <div className="size-full max-w-lg items-center justify-center overflow-hidden pt-8">
      {/* Lawyer's Name */}
      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <p className="text-[3.5rem] font-semibold">
          {lawyer.first_name} {lawyer.last_name}
          <span className="text-[#5046e6]">.</span>
        </p>
      </BoxReveal>

      {/* Lawyer's Expertise */}
      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <h2 className="mt-[.5rem] text-[1rem]">
          Lawyer With Expertise in :{" "}
          <span className="text-[#5046e6]">{lawyer.expertise}</span>
        </h2>
      </BoxReveal>

      {/* Lawyer's Highlights */}
      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <div className="mt-6">
          <p>
            <strong>Experience:</strong> {lawyer.experience_years} years of experience <br />
            {lawyer.highlights.map((highlight, idx) => (
              <span key={idx}>
                <strong>Highlight {idx + 1}:</strong> {highlight} <br />
              </span>
            ))}
          </p>
        </div>
      </BoxReveal>

      {/* Contact Information */}
      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <div className="mt-6">
          <p>
            <strong>Contact:</strong> {lawyer.phone_number} <br />
            <strong>Email:</strong> {lawyer.email} <br />
            <strong>Pricing:</strong> {lawyer.pricing} per hour
          </p>
        </div>
      </BoxReveal>
    </div>
  );
}

