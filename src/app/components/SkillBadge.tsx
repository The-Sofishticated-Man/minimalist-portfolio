const colorMap: Record<string, string> = {
  blue: "bg-blue-500/30 text-blue-500",
  red: "bg-red-500/30 text-red-500",
  green: "bg-green-500/30 text-green-500",
  yellow: "bg-yellow-500/30 text-yellow-500",
  purple: "bg-purple-500/30 text-purple-500",
  grey: "bg-gray-500/30 text-gray-500",
};

function SkillBadge({
  skill,
  color,
}: {
  skill: string;
  color?: "blue" | "red" | "green" | "yellow" | "purple" | "grey";
}) {
  return (
    <span
      className={`inline-block px-3 py-2 text-xs font-medium mr-2 mb-4 rounded-full ${
        color ? colorMap[color] : colorMap.grey
      }`}
    >
      {skill}
    </span>
  );
}
export default SkillBadge;
