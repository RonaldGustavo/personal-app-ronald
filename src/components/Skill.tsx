type SkillProps = {
  skillsData: string[][];
};

const Skill: React.FC<SkillProps> = ({ skillsData }) => {
  return (
    <div>
      <h3 className="text-lg sm:text-xl font-bold text-pink-400 mb-3">Skills</h3>
      <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-4 shadow-lg">
        <div className="flex justify-between gap-4">
          {skillsData.map((group, groupIndex) => (
            <ul key={groupIndex} className="space-y-1 text-gray-300 text-sm sm:text-base">
              {group.map((skill) => (
                <li
                  key={skill}
                  className="relative pl-5 before:content-['⚡'] before:absolute before:left-0"
                >
                  {skill}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
