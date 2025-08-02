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
    <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-3 sm:p-4 md:p-5 lg:p-6 xl:p-8 border border-white/10 transition-all duration-300 hover:bg-white/8 hover:border-white/20 mb-3 sm:mb-4 lg:mb-2 group">
      {/* Timeline indicator */}
      <div className="absolute -left-1.5 sm:-left-2 md:-left-3 lg:-left-4 top-4 sm:top-5 md:top-6 lg:top-6 xl:top-8 w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full border-2 sm:border-2 md:border-3 lg:border-4 border-gray-900"></div>

      <div className="flex flex-col sm:flex-row sm:items-start mb-3 sm:mb-4 md:mb-5 lg:mb-6">
        <div className="relative mb-3 sm:mb-0 sm:mr-3 md:mr-4 lg:mr-5 xl:mr-6 group-hover:scale-105 transition-transform duration-300 self-center sm:self-start">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-500/20 rounded-xl blur"></div>
          <div className="relative bg-white rounded-xl p-1.5 sm:p-2 md:p-2.5 lg:p-3 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 xl:w-20 xl:h-20 flex items-center justify-center overflow-hidden shadow-lg">
            <Image
              alt={`${company} logo`}
              src={img}
              className="object-contain"
              style={{ color: "transparent" }}
              priority={false}
            />
          </div>
        </div>
        <div className="flex-grow text-center sm:text-left">
          <h3 className="text-lg sm:text-xl md:text-xl lg:text-2xl font-semibold text-white mb-1 group-hover:text-blue-100 transition-colors duration-300">
            {title}
          </h3>
          <h4 className="text-sm sm:text-base md:text-base lg:text-lg text-blue-400 font-medium mb-1">
            {company}
          </h4>
          <p className="text-gray-400 text-xs sm:text-sm">{duration}</p>
        </div>
      </div>

      <div className="mb-3 sm:mb-4 md:mb-5 lg:mb-6">
        <h5 className="text-xs sm:text-sm font-semibold text-gray-300 mb-2 lg:mb-3 uppercase tracking-wide">
          Key Achievements
        </h5>
        <ul className="space-y-2 lg:space-y-3">
          {achievements.map((achievement, index) => {
            return (
              <li
                className="flex items-start text-gray-300 group-hover:text-gray-200 transition-colors duration-300"
                key={index}
              >
                <div className="mr-2 lg:mr-3 mt-1.5 lg:mt-2 w-1 h-1 lg:w-1.5 lg:h-1.5 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex-shrink-0"></div>
                <span className="leading-relaxed text-sm sm:text-base">
                  {achievement}
                </span>
              </li>
            );
          })}
        </ul>
      </div>

      <div>
        <h5 className="text-xs sm:text-sm font-semibold text-gray-300 mb-2 lg:mb-3 uppercase tracking-wide">
          Technologies
        </h5>
        <SkillList skills={skills} color="blue" />
      </div>
    </div>
  );
}

export default ExperienceArticle;
