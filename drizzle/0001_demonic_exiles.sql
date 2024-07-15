CREATE TABLE IF NOT EXISTS "experiences" (
	"id" serial PRIMARY KEY NOT NULL,
	"positionName" varchar(256) NOT NULL,
	"employeeName" varchar(256) NOT NULL,
	"dateStarted" varchar(15) NOT NULL,
	"dateEnded" varchar(15) NOT NULL,
	"description" varchar(256) NOT NULL
);
