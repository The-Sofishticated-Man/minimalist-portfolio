"use client";
import { useState } from "react";
function AddaMessageForTheNextPersonButton() {
  const [showMessageBox, setShowMessageBox] = useState(false);
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
            placeholder="Type your message here..."
            className="w-full mt-4 p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:border-gray-500 bg-gray-800 text-white placeholder-gray-400"
          />
            <button
              type="submit"
              className="mt-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded transition-colors cursor-pointer"
            >
              Send
            </button>
        </div>
      )}
    </>
  );
}

export default AddaMessageForTheNextPersonButton;
