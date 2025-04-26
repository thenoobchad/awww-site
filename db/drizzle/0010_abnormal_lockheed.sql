PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_transactions` (
	`id` integer PRIMARY KEY NOT NULL,
	`description` text NOT NULL,
	`amount` real NOT NULL,
	`email` text NOT NULL,
	`payment` text NOT NULL,
	`status` text DEFAULT 'pending' NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
INSERT INTO `__new_transactions`("id", "description", "amount", "email", "payment", "status", "created_at") SELECT "id", "description", "amount", "email", "payment", "status", "created_at" FROM `transactions`;--> statement-breakpoint
DROP TABLE `transactions`;--> statement-breakpoint
ALTER TABLE `__new_transactions` RENAME TO `transactions`;--> statement-breakpoint
PRAGMA foreign_keys=ON;--> statement-breakpoint
CREATE UNIQUE INDEX `transactions_email_unique` ON `transactions` (`email`);