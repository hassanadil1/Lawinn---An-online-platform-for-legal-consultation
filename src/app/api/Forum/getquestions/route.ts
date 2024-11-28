import { NextResponse } from "next/server";
import { db } from "../../../../../configs/db";
import { QuestionTable, AnswerTable, usersTable, lawyersTable } from "../../../../../configs/schema";
import { eq } from "drizzle-orm";

export async function GET() {
  try {
    const rawResults = await db
      .select({
        questionId: QuestionTable.id,
        questionText: QuestionTable.text,
        userId: usersTable.id,
        userName: usersTable.first_name, // Assuming `first_name` is the user's name
        answerId: AnswerTable.id,
        answerText: AnswerTable.text,
        lawyerId: lawyersTable.id,
        lawyerName: lawyersTable.first_name, // Assuming `first_name` is the lawyer's name
      })
      .from(QuestionTable)
      .leftJoin(AnswerTable, eq(AnswerTable.question_id, QuestionTable.id))
      .leftJoin(usersTable, eq(QuestionTable.user_id, usersTable.id))
      .leftJoin(lawyersTable, eq(AnswerTable.lawyer_id, lawyersTable.id))
      .execute();

    // Group questions and their answers
    const questionsMap = new Map();

    for (const row of rawResults) {
      const questionId = row.questionId;

      if (!questionsMap.has(questionId)) {
        questionsMap.set(questionId, {
          id: questionId,
          text: row.questionText,
          user_name: row.userName || "Anonymous",
          answers: [],
        });
      }

      if (row.answerId) {
        questionsMap.get(questionId).answers.push({
          id: row.answerId,
          text: row.answerText,
          lawyer_name: row.lawyerName || "Lawyer",
        });
      }
    }

    const questions = Array.from(questionsMap.values());

    return NextResponse.json({ questions });
  } catch (error) {
    console.error("Error fetching questions:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
