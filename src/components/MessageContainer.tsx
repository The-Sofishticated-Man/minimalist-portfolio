function MessageContainer() {
  const mockMessages = [
    {
      id: 1,
      text: "Welcome to the site! Hope you have a great day.",
      date: "2025-07-10",
    },
    {
      id: 2,
      text: "Don't forget to check out the projects section.",
      date: "2025-07-09",
    },
    {
      id: 3,
      text: "Feel free to leave your own message!",
      date: "2025-07-08",
    },
  ];
  return (
    <div className="flex items-center py-5 ">
      <div className="max-w-md space-y-4">
        {mockMessages.map((msg) => (
          <div
            key={msg.id}
            className="bg-white dark:bg-neutral-900 rounded p-3 shadow"
          >
            <div className="text-gray-800 dark:text-gray-200 mb-1">
              {msg.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MessageContainer;
