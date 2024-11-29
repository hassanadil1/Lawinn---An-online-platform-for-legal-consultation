import { NextResponse } from "next/server";
import { db } from "../../../../../configs/db";
import { QuestionTable, AnswerTable, usersTable, lawyersTable } from "../../../../../configs/schema";
import { eq } from "drizzle-orm";

interface Answer {
  id: number;
  text: string;
  lawyer_name: string;
}

interface Question {
  id: number;
  text: string;
  user_name: string;
  answers: Answer[];
}

export async function GET() {
  try {
    const rawResults = await db
      .select({
        questionId: QuestionTable.id,
        questionText: QuestionTable.text,
        userId: usersTable.id,
        userName: usersTable.first_name,
        answerId: AnswerTable.id,
        answerText: AnswerTable.text,
        lawyerId: lawyersTable.id,
        lawyerName: lawyersTable.first_name,
      })
      .from(QuestionTable)
      .leftJoin(AnswerTable, eq(AnswerTable.question_id, QuestionTable.id))
      .leftJoin(usersTable, eq(QuestionTable.user_id, usersTable.id))
      .leftJoin(lawyersTable, eq(AnswerTable.lawyer_id, lawyersTable.id))
      .execute();

    const questionsMap = new Map<number, Question>();

rawResults.forEach((row) => {
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
    questionsMap.get(questionId)?.answers.push({
      id: row.answerId,
      text: row.answerText || "No answer provided", // Provide fallback for null values
      lawyer_name: row.lawyerName || "Lawyer",
    });
  }
});


    return NextResponse.json({ questions: Array.from(questionsMap.values()) });
  } catch (error) {
    console.error("Error fetching questions:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
