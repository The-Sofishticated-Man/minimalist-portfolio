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
    <div className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gray-600 mb-10">
      <div className="flex flex-col md:flex-row items-start mb-3">
        <div className="bg-white rounded-lg aspect-square mr-4 w-24 h-24 flex-shrink-0 flex items-center justify-center overflow-hidden">
          <Image src={img} alt={`${title} logo`} />
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-gray-100 mb-0.5">
            {title}
          </h3>
          <p className="text-gray-400">{description}</p>
          <div className="mt-2">
            {github && (
              <a
                href={github}
                className="inline-flex items-center mr-4 text-blue-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="w-5 h-5 mr-1"
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
                className="inline-flex items-center text-green-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="w-5 h-5 mr-1"
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
      <ul className=" space-y-2 text-gray-300 mb-4">
        {achievements.map((achievement, index) => (
          <li key={index} className="flex items-start">
            <span className="mr-2 mt-1.5 text-gray-500">•</span>
            <span>{achievement}</span>
          </li>
        ))}
      </ul>
      <SkillList skills={technologies} color="blue" />
    </div>
  );
}

export default ProjectArticle;
