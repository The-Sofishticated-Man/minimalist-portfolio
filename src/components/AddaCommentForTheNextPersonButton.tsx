"use client";
import { useState } from "react";

function AddaCommentForTheNextPersonButton({
  saveComment,
}: {
  saveComment: (text: string) => Promise<boolean>;
}) {
  const [showCommentBox, setShowCommentBox] = useState(false);
  const [Text, setCommentText] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showAddButton, setShowAddButton] = useState(true);

  const handleSubmit = async () => {
    if (!Text.trim()) return;

    setIsSubmitting(true);
    const success = await saveComment(Text.trim());

    if (success) {
      setCommentText("");
      setShowCommentBox(false);
    }
    setIsSubmitting(false);
    setShowAddButton(false); // Hide the button after submission
  };

  return (
    <>
      {showAddButton &&
        (!showCommentBox ? (
          <button
            className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded transition-colors cursor-pointer"
            tabIndex={0}
            style={{ transform: "none" }}
            onClick={() => setShowCommentBox(true)}
          >
            Leave a Comment for the Next Person!
          </button>
        ) : (
          <div>
            <textarea
              name=""
              id=""
              value={Text}
              onChange={(e) => setCommentText(e.target.value)}
              placeholder="Be careful, you only get one..."
              className="w-full mt-4 p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:border-gray-500 bg-gray-800 text-white placeholder-gray-400"
              rows={3}
            />
            <div className="mt-2 flex gap-2">
              <button
                type="submit"
                onClick={handleSubmit}
                disabled={isSubmitting || !Text.trim()}
                className="bg-gray-700 hover:bg-gray-600 disabled:bg-gray-800 disabled:cursor-not-allowed text-white px-4 py-2 rounded transition-colors cursor-pointer"
              >
                {isSubmitting ? "Sending..." : "Send"}
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowCommentBox(false);
                  setCommentText("");
                }}
                className="bg-gray-600 hover:bg-gray-500 text-white px-4 py-2 rounded transition-colors cursor-pointer"
              >
                Cancel
              </button>
            </div>
          </div>
        ))}
    </>
  );
}

export default AddaCommentForTheNextPersonButton;
