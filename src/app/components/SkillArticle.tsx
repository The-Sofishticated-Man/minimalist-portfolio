import SkillList from "./SkillList";
function SkillArticle({ skills, color,title }: { skills: string[]; color: string,title: string }) {
  return (
    <div>
      <h4 className="text-xl font-semibold mb-2 text-gray-200 capitalize">
        {title}
      </h4>
      <SkillList skills={skills} color={color} />
    </div>
  );
}

export default SkillArticle;
