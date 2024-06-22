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

// export type Project = typeof users.$inferSelect; // return type when queried
// export type NewProject = typeof users.$inferInsert; // insert type