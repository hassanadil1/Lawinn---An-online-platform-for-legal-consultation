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
