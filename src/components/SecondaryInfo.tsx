"use client";

import ExperienceArticle from "./ExperienceArticle";
import InfoSection from "./InfoSection";
import SkillArticle from "./SkillArticle";
import { SkillsIconsProvider } from "../context/SkillsIconsContext";
import EducationArticle from "./EducationArticle";
import ProjectArticle from "./ProjectArticle";
import gdglogo from "../../public/images/entities/gdglogo.webp";
import erinovlogo from "../../public/images/entities/erinovlogo.jpg";
import ghardaiauniverstylogo from "../../public/images/entities/ghardaiauniversitylogo.webp";

import secretMessageLogo from "../../public/images/projects/secretMessageLogo.png";
import webCrawlerLogo from "../../public/images/projects/webCrawlerLogo.jpg";
import steamShelfLogo from "../../public/images/projects/steamShelfLogo.png";
import lecheeeeckersLogo from "../../public/images/projects/lecheeeeckersLogo.png";

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
            into an autistic interest in everything computer-science related,
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
        {/* provides a boolean for showing skill icons */}
        <SkillsIconsProvider>
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
                  "PyQt",
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
        </SkillsIconsProvider>
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
              "Mentored 10+ junior developers in TypeScript and Git workflows.",
              "Collaborated with 4 cross-functional teams to build 3 open-source tools using React, Next.js, and Node.js.",
              "Promoted best practices in code quality, testing (Jest), and CI/CD pipelines with GitHub Actions, reducing failed deployments by 30%.",
            ]}
            skills={[
              "React",
              "Next.js",
              "TypeScript",
              "Node.js",
              "Git",
              "GitHub Actions",
              "Jest",
              "CI/CD",
              "Test-Driven Development",
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
              "Designed a QR code scanning system in Python to streamline event check-ins and participant management.",
              "Successfully deployed a student registration system using Docker and AWS, streamlining enrollment and administrative data management.",
            ]}
            skills={[
              "HTML",
              "CSS",
              "JavaScript",
              "PHP",
              "Python",
              "Web Development",
              "Teaching",
              "Docker",
              "AWS",
              "CI/CD",
              "Cloud Computing",
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
            title="lecheeeeckers"
            description="Real-time 4-player checkers multiplayer Web Game with a shared, authoritative game engine"
            img={lecheeeeckersLogo}
            features={[
              "Deterministic Engine: Designed a shared, deterministic game engine (rules, move validation, captures, and execution core) used by both client and server to guarantee consistent game state and prevent desyncs or cheating.",
              "Real-Time Networking: Built robust server-side handlers via WebSockets for rooms, moves, chat, and sandboxed scenarios; implemented authoritative server state and client synchronisation for reliability under network variability.",
              "Developer Tooling & Debugging: Created a sandbox and dev tools to simulate game flows, test edge cases, and reproduce lifecycle scenarios for faster debugging and QA.",
              "Reliability & Validation: Implemented comprehensive validation and lifecycle logic (timeouts/forfeits, capture rules, perimeter/geometry checks) to enforce game integrity and edge-case handling.",
              "Deployment & DevOps: Dockerized the application with a Docker Compose setup for reproducible local development and simplified deployment workflows.",
            ]}
            technologies={[
              "WebSockets",
              "Node.js",
              "Docker",
              "Docker Compose",
              "Real-Time Systems",
              "Game Development",
              "System Design",
            ]}
            links={{
              github:
                "https://github.com/the-sofishticated-man/4-player-checkers",
            }}
          />{" "}
          <ProjectArticle
            title="Steam Shelf"
            description="Python-based Automation & Metadata Tool that automates adding collections of games to your Steam library as non-Steam games, with automatic artwork curation"
            img={steamShelfLogo}
            features={[
              "Algorithm Development: Engineered a smart-matching algorithm to cross-reference local directory structures with remote metadata APIs for accurate game identification.",
              "Reverse Engineering: Reverse-engineered Steam's VDF (Valve Data Format) structure to parse, modify, and write Steam library metadata, enabling automated management of non-Steam game entries.",
              "Automated Curation: Orchestrated a multi-threaded system to autonomously fetch and map graphical assets to the Steam client.",
              "Interface Design: Architected both a GUI (PyQt) and a CLI to accommodate diverse user workflows.",
              "Software Distribution: Successfully managed the end-to-end deployment of the tool as a standalone executable, ensuring accessibility for non-technical users.",
            ]}
            technologies={[
              "Python",
              "PyQt",
              "Reverse Engineering",
              "Web Scraping",
              "Automation",
              "CLI Development",
              "GUI Development",
              "Multi-threading",
            ]}
            links={{
              github: "https://github.com/the-sofishticated-man/steam-shelf",
            }}
          />
          <ProjectArticle
            title="Secret Message"
            description="MERN Full-Stack Application — an anonymous messaging app to get feedback or just have fun"
            img={secretMessageLogo}
            features={[
              "Security & Authentication: Implemented a robust security layer utilising JWT, featuring dual-token authorisation logic.",
              "State Management & Optimisation: Leveraged React Query for sophisticated data synchronisation, including background revalidation, caching, and state persistence.",
              "Full-Stack Development: Architected a scalable, responsive app using React and Node.js with a focus on cross-platform performance.",
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
            img={webCrawlerLogo}
            features={[
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
                "https://github.com/the-sofishticated-man/snapchat-webcrawler",
            }}
          />
        </InfoSection>
      </div>
    </div>
  );
}
export default SecondaryInfo;
