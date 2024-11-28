import { NextResponse } from "next/server";
import { db } from "../../../../configs/db";
import { usersTable, lawyersTable } from "../../../../configs/schema";
import { eq } from "drizzle-orm";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "067a3421b6520af36a4a058455d1a15d1ba25fbf0756989de0ab496067906e9342c99950db5ee9a87e4c0249d983591c0207731af690ed7d27ee2da97e8b2495";

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
      const token = jwt.sign(
        { id: user.id, role: "user", first_name: user.first_name }, // Include first_name here
        JWT_SECRET,
        { expiresIn: "1h" }
      );
      return NextResponse.json({ message: "Login successful", token });
    }

    // Check in lawyersTable
    const lawyer = await db
      .select()
      .from(lawyersTable)
      .where(eq(lawyersTable.email, email))
      .limit(1)
      .then((result) => result[0]);

    if (lawyer && lawyer.password === password) {
      const token = jwt.sign(
        { id: lawyer.id, role: "lawyer", first_name: lawyer.first_name }, // Include first_name here
        JWT_SECRET,
        { expiresIn: "1h" }
      );
      return NextResponse.json({ message: "Login successful", token });
    }

    return NextResponse.json({ message: "Invalid email or password" }, { status: 400 });
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
