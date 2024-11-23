import { NextResponse } from "next/server";
import { db } from "../../../../configs/db";
import { lawyersTable } from "../../../../configs/schema";
import { eq } from "drizzle-orm/expressions";

export async function POST(req: Request) {
  try {
    const lawyer = await req.json();

    // Validate lawyer input
    if (
      !lawyer ||
      !lawyer.email ||
      !lawyer.password ||
      !lawyer.first_name ||
      !lawyer.last_name ||
      !lawyer.expertise ||
      !lawyer.experience_years ||
      !lawyer.pricing
    ) {
      return NextResponse.json({ error: "Invalid lawyer data" }, { status: 400 });
    }

    // Check if the lawyer already exists
    const existingLawyer = await db
      .select()
      .from(lawyersTable)
      .where(eq(lawyersTable.email, lawyer.email))
      .limit(1);

    if (existingLawyer.length > 0) {
      return NextResponse.json(
        { error: "A lawyer with this email already exists." },
        { status: 400 }
      );
    }

    // Destructure and map the lawyer object
    const {
      first_name,
      last_name,
      email,
      phone_number,
      expertise,
      experience_years,
      pricing,
      password,
    } = lawyer;

    // Insert new lawyer into the database
    const result = await db
      .insert(lawyersTable)
      .values({
        first_name,
        last_name,
        email,
        phone_number: phone_number || null, // Optional field
        expertise,
        experience_years: experience_years.toString(), // Convert to string
        pricing: pricing.toString(), // Convert to string
        password, // In production, hash the password
      })
      .returning();

    return NextResponse.json(result[0]); // Return the newly created lawyer
  } catch (error) {
    console.error("Error inserting lawyer:", error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
