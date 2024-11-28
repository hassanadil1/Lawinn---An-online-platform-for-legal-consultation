import { NextResponse } from "next/server";
import { OpenAI } from "openai"; 

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Make sure the API key is correctly set
});

export async function POST(request: Request) {
  try {
    const { userInput } = await request.json(); // Extract input from user

    if (!userInput || userInput.trim() === "") {
      return NextResponse.json({ error: "Input is required." }, { status: 400 });
    }

    // Call OpenAI API to get the response for the user's input
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: "user", content: userInput }],
      model: "gpt-4-1106-preview", // Use GPT-3.5 for now if GPT-4 is not accessible
    });

    const answer = chatCompletion.choices[0].message.content;

    return NextResponse.json({ answer });
  } catch (error) {
    console.error("Error fetching OpenAI response:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
