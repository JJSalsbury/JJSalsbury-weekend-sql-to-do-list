CREATE TABLE "tasks" (
	"id" SERIAL PRIMARY KEY,
	"task_to_do" VARCHAR (500) NOT NULL,
	"task_complete" BOOLEAN NOT NULL
);

INSERT INTO "tasks" 
	("task_to_do", "task_complete")
VALUES 
	('Start doing weekend assignment.', TRUE),
	('Stop doing weekend assignment.', FALSE),
	('Celebrate my success!', FALSE);