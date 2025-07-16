"use client";
import { useState } from "react";
import useMessages from "@/hooks/useMessages";

function AddaMessageForTheNextPersonButton() {
  const [showMessageBox, setShowMessageBox] = useState(false);
  const [messageText, setMessageText] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { saveMessage } = useMessages();

  const handleSubmit = async () => {
    if (!messageText.trim()) return;

    setIsSubmitting(true);
    const success = await saveMessage(messageText.trim());

    if (success) {
      setMessageText("");
      setShowMessageBox(false);
    }
    setIsSubmitting(false);
  };

  return (
    <>
      {!showMessageBox ? (
        <button
          className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded transition-colors cursor-pointer"
          tabIndex={0}
          style={{ transform: "none" }}
          onClick={() => setShowMessageBox(true)}
        >
          Add a Message for the Next Person!
        </button>
      ) : (
        <div>
          <textarea
            name="message"
            id="message"
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
            placeholder="Type your message here..."
            className="w-full mt-4 p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:border-gray-500 bg-gray-800 text-white placeholder-gray-400"
            rows={3}
          />
          <div className="mt-2 flex gap-2">
            <button
              type="submit"
              onClick={handleSubmit}
              disabled={isSubmitting || !messageText.trim()}
              className="bg-gray-700 hover:bg-gray-600 disabled:bg-gray-800 disabled:cursor-not-allowed text-white px-4 py-2 rounded transition-colors cursor-pointer"
            >
              {isSubmitting ? "Sending..." : "Send"}
            </button>
            <button
              type="button"
              onClick={() => {
                setShowMessageBox(false);
                setMessageText("");
              }}
              className="bg-gray-600 hover:bg-gray-500 text-white px-4 py-2 rounded transition-colors cursor-pointer"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default AddaMessageForTheNextPersonButton;
