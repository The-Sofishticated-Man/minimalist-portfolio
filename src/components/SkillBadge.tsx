const colorMap: Record<string, string> = {
  blue: "bg-blue-500/30 text-blue-300 border-blue-400/50 hover:bg-blue-500/40 hover:text-blue-200",
  red: "bg-red-500/30 text-red-300 border-red-400/50 hover:bg-red-500/40 hover:text-red-200",
  green:
    "bg-green-500/30 text-green-300 border-green-400/50 hover:bg-green-500/40 hover:text-green-200",
  yellow:
    "bg-yellow-500/30 text-yellow-300 border-yellow-400/50 hover:bg-yellow-500/40 hover:text-yellow-200",
  purple:
    "bg-purple-500/30 text-purple-300 border-purple-400/50 hover:bg-purple-500/40 hover:text-purple-200",
  grey: "bg-gray-500/30 text-gray-300 border-gray-400/50 hover:bg-gray-500/40 hover:text-gray-200",
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
      className={`inline-block px-3 py-2 text-sm font-medium mr-2 mb-3 rounded-full border backdrop-blur-sm transition-all duration-300 hover:scale-105 cursor-default ${
        color ? colorMap[color] : colorMap.grey
      }`}
    >
      {skill}
    </span>
  );
}
export default SkillBadge;
