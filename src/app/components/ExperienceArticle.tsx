import SkillList from "./SkillList";
import Image, { StaticImageData } from "next/image";
function ExperienceArticle({
  title,
  entity: company,
  duration,
  img,
  achievements,
  skills
}: {
  title: string;
  entity: string;
  duration: string;
  img: string | StaticImageData;
  achievements: string[];
  skills: string[];
}) {
  return (
    <div className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gray-600 mb-10">
      <div className="flex items-start mb-2">
        <div className="bg-white rounded-full p-2 mr-4 w-24 h-24 flex-shrink-0 flex items-center justify-center overflow-hidden">
          <Image
            alt={`${company} logo`}
            src={img}
            className="object-contain"
            style={{ color: "transparent" }}
            priority={false}
          />
        </div>
        <div className="flex-grow">
          <h3 className="text-2xl font-semibold text-gray-100">{title}</h3>
          <h4 className="text-l text-gray-200">{company}</h4>
          <p className="text-gray-400">{duration}</p>
        </div>
      </div>
      <ul className="space-y-2 text-gray-300 mb-4">
        {achievements.map((achievement, index) => {
          return (
            <li className="flex items-start" key={index}>
              <span className="mr-2 mt-1.5 text-gray-500">•</span>
              <span>{achievement}</span>
            </li>
          );
        })}
      </ul>
      <SkillList skills={skills} />
    </div>
  );
}

export default ExperienceArticle;
