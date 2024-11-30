"use client";

import React, { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

export function SignupLawyer() {
  const [lawyer, setLawyer] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    expertise: "",
    experience_years: "",
    pricing: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLawyer((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Check for required fields
    if (
      !lawyer.first_name ||
      !lawyer.last_name ||
      !lawyer.email ||
      !lawyer.expertise ||
      !lawyer.phone_number||
      !lawyer.experience_years ||
      !lawyer.pricing ||
      !lawyer.password
    ) {
      setError("All fields are required.");
      return;
    }

    setError(""); // Clear any previous errors
    setSuccessMessage(""); // Clear success message

    try {
      const response = await fetch("/api/lawyer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(lawyer),
      });

      const result = await response.json();

      if (response.ok) {
        setSuccessMessage("Lawyer registered successfully!");
        setTimeout(() => router.push("/ClientView")); // Redirect to login after 2 seconds
      } else {
        setError(result.message || "Something went wrong.");
      }
    } catch (err) {
      setError("Error connecting to the server.");
    }
  };

  return (
    <div className="mt-32 max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Welcome to LawInn.
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Please provide your details so clients can view your services.
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        {/* First and Last name fields */}
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">First Name</Label>
            <Input
              id="firstname"
              name="first_name"
              value={lawyer.first_name}
              onChange={handleChange}
              placeholder="Tyler"
              type="text"
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last Name</Label>
            <Input
              id="lastname"
              name="last_name"
              value={lawyer.last_name}
              onChange={handleChange}
              placeholder="Durden"
              type="text"
            />
          </LabelInputContainer>
        </div>

        {/* Email field */}
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            name="email"
            value={lawyer.email}
            onChange={handleChange}
            placeholder="example@lawinn.com"
            type="email"
          />
        </LabelInputContainer>

        {/* Phone Number */}
        <LabelInputContainer className="mb-4">
          <Label htmlFor="phone_number">Phone Number</Label>
          <Input
            id="phone_number"
            name="phone_number"
            value={lawyer.phone_number}
            onChange={handleChange}
            placeholder="123-456-7890"
            type="text"
          />
        </LabelInputContainer>

        {/* Expertise */}
        <LabelInputContainer className="mb-4">
          <Label htmlFor="expertise">Field of Expertise</Label>
          <Input
            id="expertise"
            name="expertise"
            value={lawyer.expertise}
            onChange={handleChange}
            placeholder="Criminal Law"
            type="text"
          />
        </LabelInputContainer>

        {/* Experience Years */}
        <LabelInputContainer className="mb-4">
          <Label htmlFor="experience_years">Years of Experience</Label>
          <Input
            id="experience_years"
            name="experience_years"
            value={lawyer.experience_years}
            onChange={handleChange}
            placeholder="5"
            type="number"
          />
        </LabelInputContainer>

        {/* Pricing */}
        <LabelInputContainer className="mb-4">
          <Label htmlFor="pricing">Pricing Per Hour ($)</Label>
          <Input
            id="pricing"
            name="pricing"
            value={lawyer.pricing}
            onChange={handleChange}
            placeholder="100"
            type="number"
          />
        </LabelInputContainer>

        {/* Password */}
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            value={lawyer.password}
            onChange={handleChange}
            placeholder="••••••••"
            type="password"
          />
        </LabelInputContainer>

        {/* Display Error or Success Messages */}
        {error && <p className="text-red-500">{error}</p>}
        {successMessage && <p className="text-green-500">{successMessage}</p>}

        <button
          className="mb-3 bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Register &rarr;
        </button>
      </form>
    </div>
  );
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
