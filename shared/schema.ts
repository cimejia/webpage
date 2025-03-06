import { pgTable, text, serial, timestamp, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const publications = pgTable("publications", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  authors: text("authors").notNull(),
  venue: text("venue").notNull(),
  year: varchar("year", { length: 4 }).notNull(),
  url: text("url"),
  abstract: text("abstract")
});

export const experiences = pgTable("experiences", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  organization: text("organization").notNull(),
  startDate: timestamp("start_date").notNull(),
  endDate: timestamp("end_date"),
  description: text("description").notNull()
});

export const insertPublicationSchema = createInsertSchema(publications).omit({ id: true });
export const insertExperienceSchema = createInsertSchema(experiences).omit({ id: true });

export type Publication = typeof publications.$inferSelect;
export type Experience = typeof experiences.$inferSelect;
export type InsertPublication = z.infer<typeof insertPublicationSchema>;
export type InsertExperience = z.infer<typeof insertExperienceSchema>;
