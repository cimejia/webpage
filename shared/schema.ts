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

export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  technologies: text("technologies").array().notNull(),
  startDate: timestamp("start_date").notNull(),
  endDate: timestamp("end_date"),
  url: text("url"),
  status: text("status").notNull()
});

export const teachings = pgTable("teachings", {
  id: serial("id").primaryKey(),
  courseName: text("course_name").notNull(),
  courseCode: text("course_code"),
  institution: text("institution").notNull(),
  lastTaught: timestamp("last_taught").notNull(),
  description: text("description")
});

export const theses = pgTable("theses", {
  id: serial("id").primaryKey(),
  studentName: text("student_name").notNull(),
  title: text("title").notNull(),
  degreeLevel: text("degree_level").notNull(),
  year: varchar("year", { length: 4 }).notNull(),
  status: text("status").notNull(),
  description: text("description")
});

export const trainings = pgTable("trainings", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  organization: text("organization").notNull(),
  duration: text("duration").notNull(),
  date: timestamp("date").notNull(),
  audience: text("audience").notNull(),
  description: text("description")
});

export const visits = pgTable("visits", {
  id: serial("id").primaryKey(),
  page: text("page").notNull(),
  count: serial("count").notNull(),
  lastVisit: timestamp("last_visit").notNull().defaultNow()
});

export const insertPublicationSchema = createInsertSchema(publications).omit({ id: true });
export const insertProjectSchema = createInsertSchema(projects).omit({ id: true });
export const insertTeachingSchema = createInsertSchema(teachings).omit({ id: true });
export const insertThesisSchema = createInsertSchema(theses).omit({ id: true });
export const insertTrainingSchema = createInsertSchema(trainings).omit({ id: true });
export const insertVisitSchema = createInsertSchema(visits).omit({ id: true });

export type Publication = typeof publications.$inferSelect;
export type Project = typeof projects.$inferSelect;
export type Teaching = typeof teachings.$inferSelect;
export type Thesis = typeof theses.$inferSelect;
export type Training = typeof trainings.$inferSelect;
export type Visit = typeof visits.$inferSelect;
export type InsertPublication = z.infer<typeof insertPublicationSchema>;
export type InsertProject = z.infer<typeof insertProjectSchema>;
export type InsertTeaching = z.infer<typeof insertTeachingSchema>;
export type InsertThesis = z.infer<typeof insertThesisSchema>;
export type InsertTraining = z.infer<typeof insertTrainingSchema>;
export type InsertVisit = z.infer<typeof insertVisitSchema>;