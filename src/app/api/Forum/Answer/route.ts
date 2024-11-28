import { NextResponse } from "next/server";
import { db } from "../../../../../configs/db";
import { AnswerTable } from "../../../../../configs/schema";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";

export async function POST(req: Request) {
  const token = req.headers.get("Authorization")?.split(" ")[1];
  const { text, question_id } = await req.json();

  if (!token || !text || !question_id) {
    return NextResponse.json({ message: "Unauthorized or invalid data" }, { status: 401 });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as { id: number; role: string };

    if (decoded.role !== "lawyer") {
      return NextResponse.json({ message: "Only lawyers can post answers" }, { status: 403 });
    }

    const newAnswer = await db.insert(AnswerTable).values({
      text,
      question_id,
      lawyer_id: decoded.id,
    });

    return NextResponse.json({ message: "Answer posted successfully", answer: newAnswer });
  } catch (error) {
    console.error("Error posting answer:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
