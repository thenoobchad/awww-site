import { sqliteTable, text, integer, real } from "drizzle-orm/sqlite-core";
import { relations, sql } from "drizzle-orm";

export const transactions = sqliteTable("transactions", {
	id: integer("id").primaryKey(),
	description: text("description", {
		enum: ["withdrawal", "deposit", "investment"],
	}).notNull(),
	amount: real("amount").notNull(),
	email: text("email").notNull(),
	payment: text("payment").notNull(),
	status: text("status", {
		enum: ["pending", "success", "failure"],
	}).notNull().default("pending"),
	createdAt: text("created_at")
		.notNull()
		.default(sql`CURRENT_TIMESTAMP`),
});

