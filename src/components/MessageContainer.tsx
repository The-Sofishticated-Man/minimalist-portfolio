"use client";
import useMessages from "@/hooks/useMessages";

function MessageContainer() {
  const { messages, loading, error } = useMessages();

  if (loading) {
    return (
      <div className="flex items-center py-5">
        <div className="max-w-md">
          <p className="text-gray-400">Loading messages...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center py-5">
        <div className="max-w-md">
          <p className="text-red-400">Error loading messages: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center py-5 ">
      <div className="max-w-md space-y-4">
        {messages.length === 0 ? (
          <p className="text-gray-400">
            No messages yet. Be the first to leave one!
          </p>
        ) : (
          messages.map((msg) => (
            <div
              key={msg.id}
              className="bg-white dark:bg-neutral-900 rounded p-3 shadow"
            >
              <div className="text-gray-800 dark:text-gray-200 mb-1">
                {msg.text}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                {new Date(msg.date).toLocaleDateString()}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default MessageContainer;
