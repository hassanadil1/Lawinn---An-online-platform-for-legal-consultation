import { NextResponse } from "next/server";
import { db } from "../../../../configs/db";
import { usersTable, lawyersTable } from "../../../../configs/schema";
import { eq } from "drizzle-orm";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "your_secret_key";

export async function GET(req: Request) {
  const token = req.headers.get("Authorization")?.split(" ")[1];

  if (!token) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "") as any;
    console.log(decoded); // Log the decoded token

    const { id, role } = decoded;

    let userData;
    if (role === "user") {
      userData = await db
        .select()
        .from(usersTable)
        .where(eq(usersTable.id, id))
        .limit(1)
        .then((result) => result[0]);
    } else if (role === "lawyer") {
      userData = await db
        .select()
        .from(lawyersTable)
        .where(eq(lawyersTable.id, id))
        .limit(1)
        .then((result) => result[0]);
    }

    if (userData) {
      return NextResponse.json(userData);
    }

    return NextResponse.json({ message: "User not found" }, { status: 404 });
  } catch (error) {
    console.error("Error verifying token:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
