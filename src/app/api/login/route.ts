import { NextResponse } from "next/server";
import { db } from "../../../../configs/db"; // Adjust as per your project
import { usersTable, lawyersTable } from "../../../../configs/schema";
import { eq } from "drizzle-orm";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  if (!email || !password) {
    return NextResponse.json({ message: "Email and password are required" }, { status: 400 });
  }

  try {
    // Check in usersTable
    const user = await db
      .select()
      .from(usersTable)
      .where(eq(usersTable.email, email))
      .limit(1)
      .then((result) => result[0]);

    if (user && user.password === password) {
      return NextResponse.json({ message: "Login successful", user: { id: user.id, email: user.email, name: user.first_name } });
    }

    // Check in lawyersTable
    const lawyer = await db
      .select()
      .from(lawyersTable)
      .where(eq(lawyersTable.email, email))
      .limit(1)
      .then((result) => result[0]);

    if (lawyer && lawyer.password === password) {
      return NextResponse.json({ message: "Login successful", user: { id: lawyer.id, email: lawyer.email, name: lawyer.first_name } });
    }

    return NextResponse.json({ message: "Invalid email or password" }, { status: 400 });
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}