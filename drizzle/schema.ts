import { pgTable, serial, varchar } from 'drizzle-orm/pg-core';
import { drizzle } from 'drizzle-orm/node-postgres'

export const projects = pgTable('projects', {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 256 }).notNull(),
    description: varchar('description', { length: 256 }).notNull(),
    image: varchar('image', { length: 256 }).notNull(),
    html_link: varchar('html_link', { length: 256 }).notNull(),
    github_link: varchar('github_link', { length: 256 }).notNull(),
});

export const experiences = pgTable('experiences', {
    id: serial('id').primaryKey(),
    positionName: varchar('positionName', { length: 256 }).notNull(),
    employeeName: varchar('employeeName', { length: 256 }).notNull(),
    dateStarted: varchar('dateStarted', { length: 15 }).notNull(),
    dateEnded: varchar('dateEnded', { length: 15 }).notNull(),
    description1: varchar('description1', { length: 256 }).notNull(),
    description2: varchar('description2', { length: 256 }).notNull(),
    description3: varchar('description3', { length: 256 }).notNull(),
    imageUrl: varchar('imageUrl', { length: 256 }).notNull(),
})

// export type Project = typeof users.$inferSelect; // return type when queried
// export type NewProject = typeof users.$inferInsert; // insert type