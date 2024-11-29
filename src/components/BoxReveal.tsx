"use client"; // Needed for React state in Next.js
import { useState, useEffect } from "react";
import BoxReveal from "@/components/ui/box-reveal";

interface User {
  id: number;
  first_name: string;
  last_name: string;
  role: string;
  expertise?: string;
  experience_years?: number;
  pricing?: string;
  phone_number: string;
  email: string;
  highlights?: string[];
}

export default function BoxRevealDemo() {
  const [user, setUser] = useState<User | null>(null); // Default null to indicate loading state
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch("/api/getUserProfile", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          console.log(data); // Verify the structure of the user data returned
          setUser(data);
        } else {
          console.error("Failed to fetch user data");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };


    fetchUserData();
  }, []);

  const handleEdit = (field: keyof User, value: string | string[]) => {
    setUser((prev) => (prev ? { ...prev, [field]: value } : null));
    setEditing(true);
  };

  const saveChanges = async () => {
    if (user) {
      try {
        const response = await fetch("/api/updateProfile", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(user),
        });

        if (response.ok) {
          console.log("Profile updated successfully!");
          setEditing(false);
        } else {
          console.error("Failed to update profile");
        }
      } catch (error) {
        console.error("Error updating profile:", error);
      }
    }
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="size-full max-w-lg items-center justify-center overflow-hidden pt-8 relative">
      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <div className="flex items-center">
          <p className="text-[3.5rem] font-semibold">
            {user.first_name} {user.last_name}
          </p>
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

      {user.expertise !== null && (
        <>
          {user.expertise && (
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
          )}

          {user.experience_years && (
            <BoxReveal boxColor={"#5046e6"} duration={0.5}>
              <h2 className="mt-[.5rem] text-[1rem] flex items-center gap-2">
                Experience:{" "}
                <span className="text-[#5046e6]">{user.experience_years} years</span>
                <button
                  className="text-sm bg-[#5046e6] text-white px-2 py-1 rounded"
                  onClick={() =>
                    handleEdit(
                      "experience_years",
                      prompt("Edit Experience (years)", user.experience_years?.toString() || "") || user.experience_years?.toString() || ""
                    )
                  }
                >
                  Edit
                </button>
              </h2>
            </BoxReveal>
          )}

          {user.pricing && (
            <BoxReveal boxColor={"#5046e6"} duration={0.5}>
              <h2 className="mt-[.5rem] text-[1rem] flex items-center gap-2">
                Pricing:{" "}
                <span className="text-[#5046e6]">{user.pricing}</span>
                <button
                  className="text-sm bg-[#5046e6] text-white px-2 py-1 rounded"
                  onClick={() =>
                    handleEdit("pricing", prompt("Edit Pricing", user.pricing || "") || user.pricing || "")
                  }
                >
                  Edit
                </button>
              </h2>
            </BoxReveal>
          )}
        </>
      )}


      {/* Common fields */}
      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <h2 className="mt-[.5rem] text-[1rem] flex items-center gap-2">
          Phone Number:{" "}
          <span className="text-[#5046e6]">{user.phone_number}</span>
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

      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <h2 className="mt-[.5rem] text-[1rem] flex items-center gap-2">
          Email:{" "}
          <span className="text-[#5046e6]">{user.email}</span>
          <button
            className="text-sm bg-[#5046e6] text-white px-2 py-1 rounded"
            onClick={() =>
              handleEdit(
                "email",
                prompt("Edit Email", user.email) || user.email
              )
            }
          >
            Edit
          </button>
        </h2>
      </BoxReveal>

      {/* Save changes */}
      {editing && (
        <button
          className="mt-4 bg-[#5046e6] text-white py-2 px-4 rounded"
          onClick={saveChanges}
        >
          Save Changes
        </button>
      )}
    </div>
  );
}
