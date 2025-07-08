import ExperienceArticle from "./ExperienceArticle";
import InfoSection from "./InfoSection";
import SkillArticle from "./SkillArticle";

import gdglogo from "../../../public/images/entities/gdglogo.webp";
import erinovlogo from "../../../public/images/entities/erinovlogo.jpg";

function SecondaryInfo() {
  return (
    <div id="info" className="flex-3/6 py-15 px-10 overflow-scroll">
      <InfoSection title="About me" id="about">
        <p className="text-gray-300 mb-4">
          {" "}
          Hi, I’m Lameche Islam, a final-year Computer Science student with a
          strong passion for programming and problem-solving.
        </p>
        <p className="text-gray-300 mb-4">
          {" "}
          My journey began with game development — discovering Unity sparked my
          interest, and I quickly picked up C# to start building. That curiosity
          grew into a deep love for computer science.
        </p>
        <p className="text-gray-300 mb-4">
          {" "}
          In my first year, I was honored to be named valedictorian of a class
          of 250 students. I&apos;m also proud to serve as the GDG Ghardaia Dev Team
          Leader, where I collaborate with other developers to lead projects,
          share knowledge, and grow our local tech community.
        </p>
        <p className="text-gray-300 mb-4">
          {" "}
          I’m especially interested in game development, systems design, and
          exploring emerging technologies. Right now, I’m focused on honing my
          skills and creating projects that showcase my creativity and technical
          abilities.
        </p>
      </InfoSection>
      <InfoSection title="Skills" id="skills">
        <SkillArticle
          title="Languages"
          color="blue"
          skills={[
            "HTML",
            "CSS",
            "JavaScript",
            "TypeScript",
            "Python",
            "PHP",
            "Java",
            "C++",
          ]}
        />
        <SkillArticle
          title="Frameworks"
          color="green"
          skills={[
            "React",
            "Next",
            "Vue",
            "Bootstrap",
            "Tailwind",
            "Express",
            "Redux",
            "Three.js",
          ]}
        />
        <SkillArticle
          title="Data Managemnt"
          color="red"
          skills={["SQL", "PostgreSQL", "MongoDB", "SQLite", "Redis"]}
        />
        <SkillArticle
          title="Tools"
          color="yellow"
          skills={["Git", "GitHub", "Docker", "Vim", "Jest", "Vite"]}
        />
      </InfoSection>
      <InfoSection title="Experience" id="experience">
        <ExperienceArticle
          title="Dev Team Leader"
          entity="Google Developer Groups"
          duration="Feb 2023 - Present"
          img={gdglogo}
          achievements={[
            "Led a team of 8 developers to deliver 5+ community-driven tech projects and workshops.",
            "Organized and facilitated 12+ meetups focused on React, TypeScript, and modern web development.",
            "Mentored 10+ junior developers in JavaScript, TypeScript, and Git workflows.",
            "Collaborated with 4 cross-functional teams to build 3 open-source tools using React, Next.js, and Node.js.",
            "Promoted best practices in code quality, testing (Jest), and CI/CD pipelines with GitHub Actions, resulting in a 30% reduction in deployment errors.",
          ]}
          skills={[
            "React",
            "Next.js",
            "TypeScript",
            "JavaScript",
            "Node.js",
            "Git",
            "GitHub Actions",
            "Jest",
            "CI/CD",
            "Mentorship",
            "Team Leadership",
          ]}
        />
        <ExperienceArticle
          title="Software Engineer & Mentor"
          entity="Erinov"
          duration="Jan 2024 - October 2024"
          img={erinovlogo}
          achievements={[
            "Delivered comprehensive instruction to a class of 30 participants on the fundamentals of web development, including HTML, CSS, and JavaScript, and PHP.",
            "Designed and implemented a QR code-based card scanning system to streamline event check-ins and participant management.",
            "Mentored junior developers and contributed to a collaborative, growth-oriented team environment.",
          ]}
          skills={[
            "HTML",
            "CSS",
            "JavaScript",
            "PHP",
            "C++",
            "Git",
            "QR Code Systems",
            "Web Development",
            "Teaching",
          ]}
        />
      </InfoSection>
    </div>
  );
}

export default SecondaryInfo;
