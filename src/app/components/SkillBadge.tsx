const colorMap: Record<string, string> = {
  blue: "bg-blue-500/30 text-blue-500",
  red: "bg-red-500/30 text-red-500",
  green: "bg-green-500/30 text-green-500",
  yellow: "bg-yellow-500/30 text-yellow-500",
  purple: "bg-purple-500/30 text-purple-500",
  // Add more colors as needed
};

function SkillBadge({ skill, color }: { skill: string; color: string }) {
  return (
    <span
      className={`inline-block px-3 py-2 text-xs font-medium mr-2 mb-4 rounded-full ${
        colorMap[color] || ""
      }`}
    >
      {skill}
    </span>
  );
}
export default SkillBadge;
