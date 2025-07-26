import Image, { StaticImageData } from "next/image";
import SkillList from "./SkillList";

function ProjectArticle({
  title,
  img,
  technologies,
  description,
  achievements,
  links: { github, demo },
}: {
  title: string;
  img: string | StaticImageData;
  technologies: string[];
  description: string;
  achievements: string[];
  links: {
    github?: string;
    demo?: string;
  };
}) {
  return (
    <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 transition-all duration-300 hover:bg-white/8 hover:border-white/20 mb-2 group">
      {/* Timeline indicator */}
      <div className="absolute -left-4 top-8 w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full border-4 border-gray-900"></div>

      <div className="flex flex-col md:flex-row items-start mb-6">
        <div className="relative mr-6 mb-4 md:mb-0 group-hover:scale-105 transition-transform duration-300">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-xl blur"></div>
          <div className="relative bg-white rounded-xl p-3 w-24 h-24 flex items-center justify-center overflow-hidden shadow-lg">
            <Image src={img} alt={`${title} logo`} className="object-contain" />
          </div>
        </div>

        <div className="flex-grow">
          <h3 className="text-2xl font-semibold text-white mb-2 group-hover:text-purple-100 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-gray-300 leading-relaxed mb-4 group-hover:text-gray-200 transition-colors duration-300">
            {description}
          </p>

          <div className="flex flex-wrap gap-3">
            {github && (
              <a
                href={github}
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white rounded-lg border border-gray-600 transition-all duration-300 hover:scale-105 text-sm font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.263.82-.582 0-.288-.01-1.05-.016-2.06-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.606-2.665-.304-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 3.003-.404c1.02.005 2.047.138 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.803 5.624-5.475 5.92.43.37.823 1.096.823 2.21 0 1.595-.015 2.88-.015 3.27 0 .322.216.698.825.58C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
                View Code
              </a>
            )}
            {demo && (
              <a
                href={demo}
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white rounded-lg border border-green-500 transition-all duration-300 hover:scale-105 text-sm font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path d="M12.293 2.293a1 1 0 0 1 1.414 0l4 4A1 1 0 0 1 17 8h-1v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8H3a1 1 0 0 1-.707-1.707l4-4a1 1 0 0 1 1.414 0L10 3.586l2.293-2.293zM5 8v7a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V8H5z" />
                </svg>
                View Demo
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h5 className="text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wide">
          Key Features
        </h5>
        <ul className="space-y-3">
          {achievements.map((achievement, index) => (
            <li
              key={index}
              className="flex items-start text-gray-300 group-hover:text-gray-200 transition-colors duration-300"
            >
              <div className="mr-3 mt-2 w-1.5 h-1.5 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex-shrink-0"></div>
              <span className="leading-relaxed">{achievement}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h5 className="text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wide">
          Technologies
        </h5>
        <SkillList skills={technologies} color="purple" />
      </div>
    </div>
  );
}

export default ProjectArticle;
