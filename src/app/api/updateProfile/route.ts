import { NextResponse } from "next/server";
import jwt from "jsonwebtoken"; // Import the jwt module
import { db } from "../../../../configs/db";
import { usersTable, lawyersTable } from "../../../../configs/schema";
import { eq } from "drizzle-orm";

export async function POST(req: Request) {
  const { id, first_name, last_name, phone_number, email, expertise, experience_years, pricing } = await req.json();

  if (!id || !first_name || !last_name || !phone_number || !email) {
    return NextResponse.json({ message: "Required fields are missing" }, { status: 400 });
  }

  try {
    // Check user role from the JWT token
    const token = req.headers.get("Authorization")?.replace("Bearer ", "");
    if (!token) {
      return NextResponse.json({ message: "Authorization token is missing" }, { status: 401 });
    }

    // Decode the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "") as any;
    if (!decoded) {
      return NextResponse.json({ message: "Invalid token" }, { status: 401 });
    }

    // Update user data
    if (decoded.role === "user") {
      const updatedUser = await db
        .update(usersTable)
        .set({ first_name, last_name, phone_number, email })
        .where(eq(usersTable.id, id))
        .returning();
      return NextResponse.json({ message: "User profile updated successfully", updatedUser });
    }

    // Update lawyer data
    if (decoded.role === "lawyer") {
      const updatedLawyer = await db
        .update(lawyersTable)
        .set({ first_name, last_name, phone_number, email, expertise, experience_years, pricing })
        .where(eq(lawyersTable.id, id))
        .returning();
      return NextResponse.json({ message: "Lawyer profile updated successfully", updatedLawyer });
    }

    return NextResponse.json({ message: "Unauthorized user role" }, { status: 403 });
  } catch (error) {
    console.error("Error updating profile:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
