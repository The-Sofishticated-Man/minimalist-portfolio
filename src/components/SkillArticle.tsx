import SkillList from "./SkillList";

function SkillArticle({
  skills,
  color,
  title,
}: {
  skills: string[];
  color?: "blue" | "red" | "green" | "yellow" | "purple" | "grey";
  title: string;
}) {
  const colorMap = {
    blue: "border-blue-400/20",
    red: "border-red-400/20",
    green: "border-green-400/20",
    yellow: "border-yellow-400/20",
    purple: "border-purple-400/20",
    grey: "border-gray-400/20",
  };

  const titleColorMap = {
    blue: "text-blue-300",
    red: "text-red-300",
    green: "text-green-300",
    yellow: "text-yellow-300",
    purple: "text-purple-300",
    grey: "text-gray-300",
  };

  const borderClass = colorMap[color || "grey"];
  const titleColor = titleColorMap[color || "grey"];

  return (
    <div
      className={`border-l-2 ${borderClass} pl-6 py-4 transition-all duration-300 hover:border-opacity-60 group`}
    >
      <h4
        className={`text-lg font-medium mb-3 ${titleColor} capitalize group-hover:text-white transition-colors duration-300`}
      >
        {title}
      </h4>
      <SkillList skills={skills} color={color} />
    </div>
  );
}

export default SkillArticle;
