import SkillList from "./SkillList";

type SkillArticleProps = {
  skills: string[] | string[][];
  color?: "blue" | "red" | "green" | "yellow" | "purple" | "grey";
  title: string;
};

function SkillArticle({ skills, color, title }: SkillArticleProps) {
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

  // Normalize skills: figure out if it's an array of skills or strings lol
  const normalizedSkills: string[][] = Array.isArray(skills[0])
    ? (skills as string[][])
    : [skills as string[]];
  return (
    <div
      className={`border-l-2 ${borderClass} pl-3 sm:pl-4 md:pl-5 lg:pl-6 py-2 sm:py-3 lg:py-4 transition-all duration-300 hover:border-opacity-60 group`}
    >
      <h4
        className={`text-sm sm:text-base lg:text-lg font-medium mb-2 lg:mb-3 ${titleColor} capitalize group-hover:text-white transition-colors duration-300`}
      >
        {title}
      </h4>

      {normalizedSkills.map((group, index) => (
        <SkillList key={index} skills={group} color={color} />
      ))}
    </div>
  );
}

export default SkillArticle;
