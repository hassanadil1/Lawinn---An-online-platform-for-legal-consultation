import { NextResponse } from "next/server";
import { db } from "../../../../../configs/db";
import { QuestionTable } from "../../../../../configs/schema";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";

export async function POST(req: Request) {
  const token = req.headers.get("Authorization")?.split(" ")[1];
  const { text } = await req.json();

  if (!token || !text) {
    return NextResponse.json({ message: "Unauthorized or invalid data" }, { status: 401 });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as { id: number; role: string };

    if (decoded.role !== "user") {
      return NextResponse.json({ message: "Only users can post questions" }, { status: 403 });
    }

    const newQuestion = await db.insert(QuestionTable).values({
      text,
      user_id: decoded.id,
    });

    return NextResponse.json({ message: "Question posted successfully", question: newQuestion });
  } catch (error) {
    console.error("Error posting question:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
