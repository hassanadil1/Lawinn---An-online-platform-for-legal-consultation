import { NextResponse } from "next/server";
import { db } from "../../../../../configs/db";
import { QuestionTable } from "../../../../../configs/schema";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";

export async function POST(req: Request) {
  try {
    // Extract and validate the token
    const token = req.headers.get("Authorization")?.split(" ")[1];
    if (!token) {
      console.log("Token missing");
      return NextResponse.json(
        { message: "Unauthorized: Token missing" },
        { status: 401 }
      );
    }

    // Parse the request body
    const body = await req.json();
    const { text } = body;
    if (!text) {
      console.log("Text missing in request body");
      return NextResponse.json(
        { message: "Invalid request: Question text is required" },
        { status: 400 }
      );
    }

    // Decode and verify the JWT
    const decoded = jwt.verify(token, JWT_SECRET) as { id: number; role: string };
    if (decoded.role !== "user") {
      console.log("Unauthorized user role");
      return NextResponse.json(
        { message: "Forbidden: Only users can post questions" },
        { status: 403 }
      );
    }

    // Insert the question into the database
    const [insertedQuestion] = await db
      .insert(QuestionTable)
      .values({
        text,
        user_id: decoded.id,
      })
      .returning();

    // Log inserted question for debugging
    console.log("Inserted question:", insertedQuestion);

    // Respond with success
    return NextResponse.json({
      message: "Question posted successfully",
      question: insertedQuestion,
    });
  } catch (error) {
    console.error("Error posting question:", error);

    // Handle specific JWT errors
    if (error instanceof jwt.JsonWebTokenError) {
      return NextResponse.json(
        { message: "Invalid or expired token" },
        { status: 401 }
      );
    }

    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
