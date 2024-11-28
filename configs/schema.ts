import { integer, pgTable, varchar, text, numeric } from "drizzle-orm/pg-core";

// Users Table
export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  first_name: varchar({ length: 255 }).notNull(),
  last_name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  phone_number: varchar({ length: 15 }), // Optional phone number
  password: varchar({ length: 255 }).notNull(), // Login password
});

// Lawyers Table
export const lawyersTable = pgTable("lawyers", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  first_name: varchar({ length: 255 }).notNull(),
  last_name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  phone_number: varchar({ length: 15 }), // Optional phone number
  expertise: text().notNull(), // Area(s) of expertise
  experience_years: integer().notNull(), // Number of years of experience
  pricing: numeric().notNull(), // Pricing or hourly rate
  password: varchar({ length: 255 }).notNull(), // Login password
});

// Questions Table
export const QuestionTable = pgTable("questions", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  text: varchar({ length: 255 }).notNull(),
  user_id: integer().notNull().references(() => usersTable.id), // Referencing the users table
});

// Answers Table
export const AnswerTable = pgTable("answers", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  text: varchar({ length: 255 }).notNull(),
  question_id: integer().notNull().references(() => QuestionTable.id), // Referencing the questions table
  lawyer_id: integer().notNull().references(() => lawyersTable.id), // Referencing the lawyers table
});
