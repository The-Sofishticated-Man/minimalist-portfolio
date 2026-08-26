"use client";

import ExperienceArticle from "./ExperienceArticle";
import InfoSection from "./InfoSection";
import SkillArticle from "./SkillArticle";
import EducationArticle from "./EducationArticle";
import ProjectArticle from "./ProjectArticle";

import gdglogo from "../../public/images/entities/gdglogo.webp";
import erinovlogo from "../../public/images/entities/erinovlogo.jpg";
import ghardaiauniverstylogo from "../../public/images/entities/ghardaiauniversitylogo.webp";

import secretMessagelogo from "../../public/images/projects/Secret Message.png";
import webcrawlerlogo from "../../public/images/projects/webcrawlerlogo.jpg";
import steamshelflogo from "../../public/images/projects/steamshelflogo.png";

function SecondaryInfo() {
  return (
    <div
      id="info"
      className="w-full xl:flex-1/5 xl:max-h-screen xl:overflow-scroll relative bg-black/50 px-4 sm:px-6 lg:px-8 xl:px-10 py-6 lg:py-8 xl:py-15"
    >
      <div>
        <InfoSection title="About me" id="about">
          <p className="text-gray-300 mb-4">
            {" "}
            Hi, I’m Lameche Islam, a <strong>Full-Stack engineer </strong>with a
            strong passion for programming and problem-solving.
          </p>
          <p className="text-gray-300 mb-4">
            {" "}
            It started with Unity when I was 11 — I wanted to make games, so I
            taught myself <strong>C#</strong> to do it. That kinda snowballed
            into an autistic interest in everything computer science related,
            and I never really stopped.
          </p>
          <p className="text-gray-300 mb-4">
            {" "}
            I graduated <strong>valedictorian</strong> with a bachelor&apos;s in{" "}
            <strong>computer systems</strong>, I also lead the local{" "}
            <strong> Google Developer Groups </strong>Development Team, where I
            worked with other developers on projects and help grow the local
            tech scene.
          </p>
          <p className="text-gray-300 mb-4">
            {" "}
            I’m especially interested in <strong>game development</strong>,{" "}
            <strong>machine learning</strong>, <strong>systems design</strong>,
            and exploring emerging technologies.
          </p>
        </InfoSection>
      </div>

      <div>
        <InfoSection title="Skills" id="skills">
          <SkillArticle
            title="Languages"
            color="blue"
            skills={["Python", "TypeScript", "HTML", "CSS", "Java"]}
          />
          <SkillArticle
            title="Frameworks"
            color="green"
            skills={[
              [
                "React",
                "Next",
                "Vue",
                "Tailwind",
                "Express",
                "Redux",
                "Three.js",
              ],
              [
                "FastAPI",
                "Django",
                "Selenium",
                "Tkinter",
                "Pytest",
                "Scikit-Learn",
              ],
            ]}
          />
          <SkillArticle
            title="Data Managemnt"
            color="red"
            skills={["PostgreSQL", "MongoDB", "SQLite", "Redis"]}
          />
          <SkillArticle
            title="Tools"
            color="yellow"
            skills={[
              "Git",
              "Docker",
              "linux",
              "AWS",
              "GitHub Actions",
              "Jest",
              "DataDog",
            ]}
          />
        </InfoSection>
      </div>

      <div>
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

      <div>
        <InfoSection title="Education" id="education">
          <EducationArticle
            title="Bachelor in Computer Science"
            entity="University of Ghardaia"
            duration="2023 - Present"
            img={ghardaiauniverstylogo}
            courses={[
              "Data Structures and Algorithms",
              "Software Engineering Principles",
              "Database Management Systems",
              "Operating Systems",
              "Computer Networks",
              "Web Development",
              "Probability and Statistics",
              "Discrete Mathematics",
              "Linear Algebra",
              "Graph Theory",
              "Mathematical Logic",
              "Information Systems",
              "Numerical Methods",
              "Real Analysis",
              "Calculus 1,2,3 and 4",
              "Computer Architecture",
            ]}
          />
        </InfoSection>
      </div>

      <div>
        <InfoSection title="Projects" id="projects">
          <ProjectArticle
            title="Steam Shelf"
            description="A tool that automates the process of adding collections of games to your Steam library as non-steam games, with automatic artwork curation"
            img={steamshelflogo}
            achievements={[
              "Batch Import: Developed a system to scan directories and add all discovered games to Steam in one click, saving hours of manual work.",
              "Automatic Artwork Curation: Implemented intelligent artwork fetching that automatically downloads high-quality official artwork (Portrait, Hero, Logo, and Capsule) for each game.",
              "Smart Game Matching: Created an algorithm that uses folder names to intelligently find the correct corresponding Steam game for accurate artwork matching.",
              "Dual Interface Design: Built both GUI (Tkinter) and CLI versions to cater to different user preferences and automation needs.",
              "Standalone Distribution: Packaged as a standalone executable requiring no installation, making it accessible to users without Python knowledge.",
            ]}
            technologies={[
              "Python",
              "Tkinter",
              "Reverse Engineering",
              "Web Scraping",
              "Automation",
              "CLI Development",
              "GUI Development",
            ]}
            links={{
              github: "https://github.com/the-sofishticated-man/steam-shelf",
            }}
          />
          <ProjectArticle
            title="Secret Message"
            description="An anonymous messaging app to get feedback or just have fun"
            img={secretMessagelogo}
            achievements={[
              "JWT Authentication from Scratch: Secure login system using Web Tokens (JWT), supports both Access Tokens and Refresh Tokens, with token rotation and expiration handling.",
              "Full-Stack Data Sanitisation: Backend protects against injection attacks with input validation and sanitisation; frontend cleans user input to prevent XSS and other client-side vulnerabilities.",
              "Fast Routing & Data Fetching: Efficient navigation with React Router v6+ and seamless async data fetching using React Query, including built-in caching, background updates, and revalidation.",
              "Responsive Design: Fully responsive layout optimised for mobile, tablet, and desktop using flexible UI components and modern CSS practices.",
            ]}
            technologies={[
              "React",
              "TypeScript",
              "MongoDB",
              "Tailwind",
              "React Router",
              "React Query",
              "JWT",
              "Node.js",
              "Express js",
              "Bootstrap",
            ]}
            links={{
              github: "https://github.com/the-sofishticated-man/secret-message",
            }}
          />
          <ProjectArticle
            title="Snapchat Webcrawler"
            description="An app built using Python and Selenium that provides a wrapper API for sending and reading messages"
            img={webcrawlerlogo}
            achievements={[
              "Automated Login: Developed a system to log in to Snapchat accounts autonomously using Selenium.",
              "Message Handling: Created a API wrapper to send and read messages programmatically.",
              "Web Automation: Leveraged Selenium for efficient web interaction and data extraction.",
            ]}
            technologies={[
              "Python",
              "Selenium",
              "API Development",
              "Web Automation",
              "Web Scraping",
              "Design Patterns",
            ]}
            links={{
              github:
                "https://github.com/the-sofishticated-man/snapchat-webcrawler", // Replace with the actual GitHub link if available
            }}
          />
        </InfoSection>
      </div>
    </div>
  );
}
export default SecondaryInfo;
