import { NextResponse } from "next/server";
import { db } from "../../../../configs/db"; // Adjust based on your project structure
import { lawyersTable } from "../../../../configs/schema";

export async function GET() {
  try {
    // Fetch all lawyers from the database
    const lawyers = await db.select().from(lawyersTable);

    // Respond with the fetched data
    return NextResponse.json({ message: "Lawyers fetched successfully", lawyers });
  } catch (error) {
    console.error("Error fetching lawyers:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
