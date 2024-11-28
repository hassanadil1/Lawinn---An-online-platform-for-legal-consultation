"use client"; // Needed for React state in Next.js
import { useState } from "react";
import BoxReveal from "@/components/ui/box-reveal";

interface User {
  id: number;
  first_name: string;
  last_name: string;
  role: "lawyer" | "client";
  expertise?: string; // Specific to lawyers
  experience_years?: number; // Specific to lawyers
  pricing?: string; // Specific to lawyers
  phone_number: string;
  email: string;
  highlights?: string[]; // Specific to lawyers
}

const userData: User = {
  id: 1,
  first_name: "Hassan",
  last_name: "Adil",
  role: "lawyer",
  expertise: "Criminal Law",
  experience_years: 20,
  pricing: "$250",
  phone_number: "+1234567890",
  email: "hassan.adil@example.com",
  highlights: [
    "20+ Murder charges cleared",
    "Taught Harvey Spectre",
    "Made the Constitution of America",
    "Student of Qaid-e-Azam",
    "Loves Football",
    "100% closing rate, and knows all the judges in town",
  ],
};

export default function BoxRevealDemo() {
  const [user, setUser] = useState<User>(userData);
  const [editing, setEditing] = useState(false);

  const handleEdit = (field: keyof User, value: string | string[]) => {
    setUser((prev) => ({ ...prev, [field]: value }));
    setEditing(true);
  };

  const saveChanges = () => {
    console.log("Updated user data:", user); // Replace with API call if needed
    setEditing(false);
  };

  return (
    <div className="size-full max-w-lg items-center justify-center overflow-hidden pt-8 relative">
      {/* User Name */}
      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
  <div className="flex items-center">
    {/* Name */}
    <p className="text-[3.5rem] font-semibold">
      {user.first_name} {user.last_name}
    </p>

    {/* Buttons */}
    <div className="flex gap-2 ml-4">
      <button
        className="text-sm bg-[#5046e6] text-white px-2 py-1 rounded"
        onClick={() =>
          handleEdit(
            "first_name",
            prompt("Edit First Name", user.first_name) || user.first_name
          )
        }
      >
        Edit First Name
      </button>
      <button
        className="text-sm bg-[#5046e6] text-white px-2 py-1 rounded"
        onClick={() =>
          handleEdit(
            "last_name",
            prompt("Edit Last Name", user.last_name) || user.last_name
          )
        }
      >
        Edit Last Name
      </button>
    </div>
  </div>
</BoxReveal>


      {/* Role */}
      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <h2 className="mt-[.5rem] text-[1rem] flex items-center gap-2">
          Role: <span className="text-[#5046e6]">{user.role}</span>
          <button
            className="text-sm bg-[#5046e6] text-white px-2 py-1 rounded"
            onClick={() => handleEdit("role", prompt("Edit Role", user.role) || user.role)}
          >
            Edit
          </button>
        </h2>
      </BoxReveal>

      {/* Conditional Rendering for Lawyers */}
      {user.role === "lawyer" && (
        <>
          <BoxReveal boxColor={"#5046e6"} duration={0.5}>
            <h2 className="mt-[.5rem] text-[1rem] flex items-center gap-2">
              Expertise: <span className="text-[#5046e6]">{user.expertise}</span>
              <button
                className="text-sm bg-[#5046e6] text-white px-2 py-1 rounded"
                onClick={() =>
                  handleEdit("expertise", prompt("Edit Expertise", user.expertise || "") || user.expertise || "")
                }
              >
                Edit
              </button>
            </h2>
          </BoxReveal>

          <BoxReveal boxColor={"#5046e6"} duration={0.5}>
            <h2 className="mt-[.5rem] text-[1rem] flex items-center gap-2">
              Experience:{" "}
              <span className="text-[#5046e6]">{user.experience_years} years</span>
              <button
                className="text-sm bg-[#5046e6] text-white px-2 py-1 rounded"
                onClick={() =>
                  handleEdit(
                    "experience_years",
                    (prompt("Edit Experience (years)", user.experience_years?.toString() || "0") || "0")
                  )
                }
              >
                Edit
              </button>
            </h2>
          </BoxReveal>

          <BoxReveal boxColor={"#5046e6"} duration={0.5}>
            <h2 className="mt-[.5rem] text-[1rem] flex items-center gap-2">
              Pricing: <span className="text-[#5046e6]">{user.pricing}</span>
              <button
                className="text-sm bg-[#5046e6] text-white px-2 py-1 rounded"
                onClick={() => handleEdit("pricing", prompt("Edit Pricing", user.pricing || "") || user.pricing || "")}
              >
                Edit
              </button>
            </h2>
          </BoxReveal>

          <BoxReveal boxColor={"#5046e6"} duration={0.5}>
            <div className="mt-6">
              <h3 className="text-[1.25rem] font-semibold flex items-center gap-2">
                Highlights:
              </h3>
              <ul className="list-disc pl-6 mt-2 text-[1rem]">
                {user.highlights?.map((highlight, index) => (
                  <li key={index} className="text-[#5046e6] flex items-center gap-2">
                    {highlight}
                    <button
                      className="text-sm bg-[#5046e6] text-white px-2 py-1 rounded"
                      onClick={() => {
                        const updatedHighlight = prompt(
                          "Edit Highlight",
                          highlight
                        );
                        if (updatedHighlight) {
                          const newHighlights = [...(user.highlights || [])];
                          newHighlights[index] = updatedHighlight;
                          handleEdit("highlights", newHighlights);
                        }
                      }}
                    >
                      Edit
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </BoxReveal>
        </>
      )}

      {/* Contact Info */}
      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <h2 className="mt-[.5rem] text-[1rem] flex items-center gap-2">
          Contact:{" "}
          <span className="text-[#5046e6]">{user.phone_number}</span>,{" "}
          <span className="text-[#5046e6]">{user.email}</span>
          <button
            className="text-sm bg-[#5046e6] text-white px-2 py-1 rounded"
            onClick={() =>
              handleEdit(
                "phone_number",
                prompt("Edit Phone Number", user.phone_number) || user.phone_number
              )
            }
          >
            Edit
          </button>
        </h2>
      </BoxReveal>

      {/* Save Changes Button */}
      {editing && (
        <button
          className="fixed bottom-4 right-4 bg-green-600 text-white px-4 py-2 rounded shadow-lg"
          onClick={saveChanges}
        >
          Save Changes
        </button>
      )}
    </div>
  );
}
