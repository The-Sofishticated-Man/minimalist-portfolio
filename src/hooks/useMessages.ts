import { useState, useEffect } from "react";

interface Message {
  id: number;
  text: string;
  date: string;
}

function useMessages() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch messages from the server
  const fetchMessages = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch("/api/messages");

      if (!response.ok) {
        throw new Error("Failed to fetch messages");
      }

      const data = await response.json();
      setMessages(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
      console.error("Error fetching messages:", err);
    } finally {
      setLoading(false);
    }
  };

  // Save a new message to the database
  const saveMessage = async (text: string): Promise<boolean> => {
    try {
      const response = await fetch("/api/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
      });

      if (!response.ok) {
        throw new Error("Failed to save message");
      }

      const newMessage = await response.json();
      setMessages((prev) => [newMessage, ...prev]);
      return true;
    } catch (err) {
      console.error("Error saving message:", err);
      setError(err instanceof Error ? err.message : "Failed to save message");
      return false;
    }
  };

  // Fetch messages when the hook is first used
  useEffect(() => {
    fetchMessages();
  }, []);

  return {
    messages,
    saveMessage,
    loading,
    error,
    refreshMessages: fetchMessages,
  };
}

export default useMessages;
