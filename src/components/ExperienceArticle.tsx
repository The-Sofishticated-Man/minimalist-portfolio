import SkillList from "./SkillList";
import Image, { StaticImageData } from "next/image";

function ExperienceArticle({
  title,
  entity: company,
  duration,
  img,
  achievements,
  skills,
}: {
  title: string;
  entity: string;
  duration: string;
  img: string | StaticImageData;
  achievements: string[];
  skills: string[];
}) {
  return (
    <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 transition-all duration-300 hover:bg-white/8 hover:border-white/20 mb-2 group">
      {/* Timeline indicator */}
      <div className="absolute -left-4 top-8 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full border-4 border-gray-900"></div>

      <div className="flex items-start mb-6">
        <div className="relative mr-6 group-hover:scale-105 transition-transform duration-300">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-500/20 rounded-xl blur"></div>
          <div className="relative bg-white rounded-xl p-3 w-20 h-20 flex items-center justify-center overflow-hidden shadow-lg">
            <Image
              alt={`${company} logo`}
              src={img}
              className="object-contain"
              style={{ color: "transparent" }}
              priority={false}
            />
          </div>
        </div>
        <div className="flex-grow">
          <h3 className="text-2xl font-semibold text-white mb-1 group-hover:text-blue-100 transition-colors duration-300">
            {title}
          </h3>
          <h4 className="text-lg text-blue-400 font-medium mb-1">{company}</h4>
          <p className="text-gray-400 text-sm">{duration}</p>
        </div>
      </div>

      <div className="mb-6">
        <h5 className="text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wide">
          Key Achievements
        </h5>
        <ul className="space-y-3">
          {achievements.map((achievement, index) => {
            return (
              <li
                className="flex items-start text-gray-300 group-hover:text-gray-200 transition-colors duration-300"
                key={index}
              >
                <div className="mr-3 mt-2 w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex-shrink-0"></div>
                <span className="leading-relaxed">{achievement}</span>
              </li>
            );
          })}
        </ul>
      </div>

      <div>
        <h5 className="text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wide">
          Technologies
        </h5>
        <SkillList skills={skills} color="blue" />
      </div>
    </div>
  );
}

export default ExperienceArticle;
