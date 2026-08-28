"use client";
import { useSkillsIcons } from "../context/SkillsIconsContext";

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

const skillIconMap: Record<string, string> = {
  python: "python.svg",
  typescript: "typescript.svg",
  html: "html.svg",
  css: "css.svg",
  java: "java.svg",
  react: "react.svg",
  next: "nextjs.svg",
  nextjs: "nextjs.svg",
  vue: "vuejs.svg",
  tailwind: "tailwind-css.svg",
  express: "expressjs.svg",
  redux: "redux.svg",
  threejs: "threejs.svg",
  fastapi: "fastapi.svg",
  django: "django.svg",
  selenium: "selenium.svg",
  pyqt: "pyqt.png",
  pytest: "pytest.svg",
  scikitlearn: "scikitlearn.svg",
  mongodb: "mongodb.svg",
  sqlite: "sqlite.svg",
  redis: "redis.svg",
  git: "git.svg",
  linux: "linux.svg",
  aws: "aws.svg",
  githubactions: "githubactions.svg",
  jest: "jest.svg",
  datadog: "datadog.svg",
  docker: "docker.svg",
  postgresql: "postgresql.svg",
};

const normalizeSkillName = (value: string) =>
  value.toLowerCase().replace(/[^a-z0-9]+/g, "");

function SkillBadge({
  skill,
  color,
}: {
  skill: string;
  color?: "blue" | "red" | "green" | "yellow" | "purple" | "grey";
}) {
  const normalizedSkill = normalizeSkillName(skill);
  const mappedIconName = skillIconMap[normalizedSkill];
  const shouldUseIcon = useSkillsIcons();

  return (
    <span
      className={`inline-flex items-center gap-2 px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm font-medium mr-1 sm:mr-2 mb-2 sm:mb-3 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:scale-105 cursor-default ${
        color ? colorMap[color] : colorMap.grey
      }`}
    >
      {shouldUseIcon && (
        <span className="w- h-6 sm:w-8 sm:h-8 flex items-center justify-center ">
          <img
            src={`/images/icons/${mappedIconName}`}
            alt={`${skill} icon`}
            className="w-full h-full "
          />
        </span>
      )}
      <span>{skill}</span>{" "}
    </span>
  );
}

export default SkillBadge;
