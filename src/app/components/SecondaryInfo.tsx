import ExperienceArticle from "./ExperienceArticle";
import InfoSection from "./InfoSection";
import SkillArticle from "./SkillArticle";

import gdglogo from "../../public/images/entities/gdglogo.webp"

function SecondaryInfo() {
    return ( 
      <div
        id="info"
        className="border-2 border-foreground flex-2/5 py-15 px-10"
      >
        <InfoSection title="About me" id="about">
          <p className="text-gray-300 mb-4">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            inventore non culpa suscipit itaque fugiat eligendi, illo libero,
            ipsum architecto saepe consequuntur, aut temporibus. Repellendus
            delectus dolorum quam veritatis fuga.{" "}
          </p>
          <p className="text-gray-300 mb-4">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            inventore non culpa suscipit itaque fugiat eligendi, illo libero,
            ipsum architecto saepe consequuntur, aut temporibus. Repellendus
            delectus dolorum quam veritatis fuga.{" "}
          </p>
          <p className="text-gray-300 mb-4">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            inventore non culpa suscipit itaque fugiat eligendi, illo libero,
            ipsum architecto saepe consequuntur, aut temporibus. Repellendus
            delectus dolorum quam veritatis fuga.{" "}
          </p>
          <p className="text-gray-300 mb-4">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            inventore non culpa suscipit itaque fugiat eligendi, illo libero,
            ipsum architecto saepe consequuntur, aut temporibus. Repellendus
            delectus dolorum quam veritatis fuga.{" "}
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
            entity="Google Developer Group"
            duration="Jan 2023 - Present"
            img={gdglogo}
            achievements={[
              "Configure and customize WebEOC framework solutions to meet client requirements for emergency/incident response systems.",
              "Liaise directly with clients to gather requirements and provide technical implementation support across Australia and New Zealand.",
              "Create detailed system configuration documentation and requirements specifications for Emergency/Incident Response processes.",
              "Provide Tier 2 technical support and assist in Emergency Operations Centre (EOC) activations when required.",
              "Develop and implement process reviews, online training content, and exercise assessments.",
            ]}
          />
        </InfoSection>
      </div>
     )
    ;
}

export default SecondaryInfo;