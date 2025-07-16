import Database from "better-sqlite3";
import path from "path";

const dbPath = path.join(process.cwd(), "data", "messages.db");
const db = new Database(dbPath);

// Create messages table
db.exec(`
    CREATE TABLE IF NOT EXISTS messages (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        text TEXT NOT NULL,
        date DATETIME DEFAULT CURRENT_TIMESTAMP
    )
`);

// Insert some initial mock data if table is empty
const messageCount = db
  .prepare("SELECT COUNT(*) as count FROM messages")
  .get() as { count: number };

if (messageCount.count === 0) {
  const insertMessage = db.prepare(
    "INSERT INTO messages (text) VALUES (?)"
  );

  const mockMessages = [
    "Welcome to the site! Hope you have a great day.",
    "Don't forget to check out the projects section.",
    "Feel free to leave your own message!",
  ];

  for (const message of mockMessages) {
    insertMessage.run(message);
  }
}

export default db;
