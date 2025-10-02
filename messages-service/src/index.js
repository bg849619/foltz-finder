/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */
import { Hono } from "hono";
import { cors } from "hono/cors";

const app = new Hono();
app.use("/api/*", cors());
app.get("/api/messages", async (c) => {
	return c.json({ messages: ["Hello from Cloudflare Workers!"] });
});

app.post("/api/messages", async (c) => {
	const body = await c.req.json();
	const message = body.message;
	const author = body.author;

	if (!message || !author) {
		return c.json({ error: "Missing message or author" }, 400);
	}

	// Insert the message into the database
	const result = await c.env.DB.prepare(
		"INSERT INTO messages (author, body) VALUES (?, ?)"
	)
		.bind(author, message)
		.run();

	if (!result.success) {
		return c.json({ error: "Failed to insert message" }, 500);
	}

	return c.json({ success: true, id: result.lastInsertRowid });
})

export default app;
