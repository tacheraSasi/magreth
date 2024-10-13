ALTER TABLE "User" ADD COLUMN "username" varchar(100) DEFAULT '';--> statement-breakpoint
ALTER TABLE "User" ADD COLUMN "created" timestamp DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "User" ADD COLUMN "picture_url" varchar(255) DEFAULT '';