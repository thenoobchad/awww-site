CREATE TABLE `tranx` (
	`id` integer PRIMARY KEY NOT NULL,
	`description` text NOT NULL,
	`amount` real NOT NULL,
	`email` text NOT NULL,
	`payment` text NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `tranx_email_unique` ON `tranx` (`email`);--> statement-breakpoint
DROP TABLE `transactions`;