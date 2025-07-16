import { NextRequest, NextResponse } from "next/server";
import db from "@/util/sqlite";

// todo : seperate this to a shared type file if it grows
interface Message {
  id: number;
  text: string;
  date: string;
}

// GET - Fetch all messages
export async function GET() {
  try {
    const messages = db
      .prepare("SELECT * FROM messages ORDER BY date DESC")
      .all() as Message[];
    return NextResponse.json(messages);
  } catch (error) {
    console.error("Error fetching messages:", error);
    return NextResponse.json(
      { error: "Failed to fetch messages" },
      { status: 500 }
    );
  }
}

// POST - Save a new message
export async function POST(request: NextRequest) {
  try {
    const { text } = await request.json();

    if (!text || text.trim() === "") {
      return NextResponse.json(
        { error: "Message text is required" },
        { status: 400 }
      );
    }

    const insertMessage = db.prepare("INSERT INTO messages (text) VALUES (?)");
    const result = insertMessage.run(text.trim());

    const newMessage = db
      .prepare("SELECT * FROM messages WHERE id = ?")
      .get(result.lastInsertRowid) as Message;

    return NextResponse.json(newMessage, { status: 201 });
  } catch (error) {
    console.error("Error saving message:", error);
    return NextResponse.json(
      { error: "Failed to save message" },
      { status: 500 }
    );
  }
}
