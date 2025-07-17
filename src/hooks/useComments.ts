import { useState, useEffect } from "react";

interface Comment {
  id: number;
  text: string;
  date: string;
}

function useComments() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [fetchingComments, setFetchingComments] = useState(true);
  const [fetchError, setFetchError] = useState<string | null>(null);

  // Fetch messages from the server
  const fetchComments = async () => {
    try {
      setFetchingComments(true);
      setFetchError(null);
      const response = await fetch("/api/messages");

      if (!response.ok) {
        throw new Error("Failed to fetch messages");
      }

      const data = await response.json();
      setComments(data);
    } catch (err) {
      setFetchError(err instanceof Error ? err.message : "An error occurred");
      console.error("Error fetching messages:", err);
    } finally {
      setFetchingComments(false);
    }
  };

  // Save a new message to the database
  const saveComment = async (text: string): Promise<boolean> => {
    // Create optimistic message with temporary ID
    const optimisticComment: Comment = {
      id: Date.now(), // Temporary ID
      text,
      date: new Date().toISOString(),
    };

    // Optimistically update UI immediately
    setComments((prev) => [optimisticComment, ...prev]);

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

      const newComment = await response.json();

      // Replace optimistic message with real message from server
      setComments((prev) =>
        prev.map((msg) => (msg.id === optimisticComment.id ? newComment : msg))
      );

      return true;
    } catch (err) {
      console.error("Error saving message:", err);
      setFetchError(
        err instanceof Error ? err.message : "Failed to save message"
      );

      // Remove the optimistic message on error
      setComments((prev) =>
        prev.filter((msg) => msg.id !== optimisticComment.id)
      );

      return false;
    }
  };
  // Fetch comments when the hook is first used
  useEffect(() => {
    fetchComments();
  }, []);

  return {
    comments,
    saveComment,
    fetchingComments,
    fetchError,
    refreshComments: fetchComments,
  };
}

export default useComments;
