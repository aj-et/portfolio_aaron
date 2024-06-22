CREATE TABLE IF NOT EXISTS "projects" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(256) NOT NULL,
	"description" varchar(256) NOT NULL,
	"image" varchar(256) NOT NULL,
	"html_link" varchar(256) NOT NULL,
	"github_link" varchar(256) NOT NULL
);
