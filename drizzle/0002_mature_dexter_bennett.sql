ALTER TABLE "experiences" RENAME COLUMN "description" TO "description1";--> statement-breakpoint
ALTER TABLE "experiences" ADD COLUMN "description2" varchar(256) NOT NULL;--> statement-breakpoint
ALTER TABLE "experiences" ADD COLUMN "description3" varchar(256) NOT NULL;