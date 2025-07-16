import SkillBadge from "./SkillBadge";

function SkillList({ skills, color }: { skills: string[]; color?: "blue"|"red"|"green"|"yellow"|"purple"|"grey" }) {
    return ( 
      <div className="flex flex-wrap">
        {skills.map(skill=><SkillBadge key={skill} skill={skill} color={color} />)}
      </div>
     );
}

export default SkillList;