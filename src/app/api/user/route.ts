import { NextResponse } from "next/server";
import { db } from "../../../../configs/db"; // Adjust the import path based on your project structure
import { usersTable } from "../../../../configs/schema"; // Adjust path for table definitions
import { eq } from "drizzle-orm/expressions";

export async function POST(req: Request) {
  try {
    const { user } = await req.json();

    // Validate user input
    if (!user || !user.email || !user.password || !user.first_name || !user.last_name) {
      return NextResponse.json({ error: "Invalid user data" }, { status: 400 });
    }

    // Check if the user already exists in the database
    const existingUser = await db
      .select()
      .from(usersTable)
      .where(eq(usersTable.email, user.email))
      .limit(1);

    if (existingUser.length > 0) {
      return NextResponse.json(
        { error: "A lawyer with this email already exists." },
        { status: 400 }
      );}
      
    // If the user doesn't exist, insert the new user into the database
    if (existingUser.length === 0) {
      const result = await db
        .insert(usersTable)
        .values({
          first_name: user.first_name,
          last_name: user.last_name,
          email: user.email,
          password: user.password, // In production, hash the password before storing
        })
        .returning();

      return NextResponse.json(result[0]); // Return the newly created user data
    }

    // If the user already exists, return their existing data
    return NextResponse.json(existingUser[0]);

  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
