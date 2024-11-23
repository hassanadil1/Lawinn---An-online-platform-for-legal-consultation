import { NextResponse } from "next/server";
import { db } from "../../../../configs/db"; // Adjust as per your project
import { usersTable } from "../../../../configs/schema";
import { eq } from "drizzle-orm";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  if (!email || !password) {
    return NextResponse.json({ message: "Email and password are required" }, { status: 400 });
  }

  try {
    const user = await db
      .select()
      .from(usersTable)
      .where(eq(usersTable.email, email))
      .limit(1)
      .then((result) => result[0]);

    if (!user || user.password !== password) {
      return NextResponse.json({ message: "Invalid email or password" }, { status: 400 });
    }

    return NextResponse.json({ message: "Login successful", user: { id: user.id, email: user.email, name: user.first_name } });
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
