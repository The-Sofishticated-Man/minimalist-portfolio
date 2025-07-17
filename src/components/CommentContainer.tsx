"use client";
import useComments from "@/hooks/useComments";
import AddaCommentForTheNextPersonButton from "./AddaCommentForTheNextPersonButton";

interface CommentContainerProps {
  showAddButton: boolean;
}

function CommentContainer({ showAddButton }: CommentContainerProps) {
  const { comments, saveComment, fetchingComments, fetchError } = useComments();
  if (fetchingComments) {
    return (
      <div className="flex items-center py-5">
        <div className="max-w-md">
          <p className="text-gray-400">Loading comments...</p>
        </div>
      </div>
    );
  }

  if (fetchError) {
    return (
      <div className="flex items-center py-5">
        <div className="max-w-md">
          <p className="text-red-400">Error loading comments: {fetchError}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      {showAddButton && (
        <AddaCommentForTheNextPersonButton saveComment={saveComment} />
      )}
      <div className="flex items-center py-5 overflow-scroll">
        <div className="max-w-md space-y-4">
          {comments.length === 0 ? (
            <p className="text-gray-400">
              No comments yet. Be the first to leave one!
            </p>
          ) : (
            comments.map((msg) => (
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
    </div>
  );
}

export default CommentContainer;
