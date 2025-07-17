import { checkCurrentUserBanStatus } from "@/util/banned";
import CommentContainer from "./CommentContainer";

async function CommentSection() {
  // Server-side ban check
  const isBanned = await checkCurrentUserBanStatus();

  return (
    <div className="items-center justify-center w-full ">
      <h2 className="text-2xl font-bold mb-4">Comments:</h2>
      <CommentContainer showAddButton={!isBanned} />
    </div>
  );
}

export default CommentSection;
