import { NextResponse } from "next/server";
import { db } from "../../../../../configs/db";
import { AnswerTable } from "../../../../../configs/schema";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";

export async function POST(req: Request) {
  try {
    const token = req.headers.get("Authorization")?.split(" ")[1];
    const { text, question_id } = await req.json();

    if (!token) {
      return NextResponse.json({ message: "Unauthorized: No token provided" }, { status: 401 });
    }

    if (!text || !question_id) {
      return NextResponse.json({ message: "Invalid input data" }, { status: 400 });
    }

    let decoded;
    try {
      decoded = jwt.verify(token, JWT_SECRET) as { id: number; role: string };
    } catch (error) {
      return NextResponse.json({ message: "Invalid or expired token" }, { status: 403 });
    }

    const newAnswer = await db.insert(AnswerTable).values({
      text,
      question_id,
      lawyer_id: decoded.id,
    });

    return NextResponse.json({ message: "Answer posted successfully", answer: newAnswer }, { status: 201 });
  } catch (error) {
    console.error("Error posting answer:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
