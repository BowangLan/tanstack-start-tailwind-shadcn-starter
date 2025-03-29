import "dotenv/config";
import { sql } from "drizzle-orm";
import { drizzle } from "drizzle-orm/node-postgres";
import { pgTable, uuid, text, timestamp, boolean } from "drizzle-orm/pg-core";
import { Env } from "~/env";

export const db = drizzle(Env.DATABASE_URL);

export const users = pgTable("users", {
  id: uuid("id")
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),

  googleId: text("google_id").notNull().unique(),
  email: text("email").notNull().unique(),
  onboardingCompleted: boolean("onboarding_completed").default(false),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});
