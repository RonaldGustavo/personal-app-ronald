import React from 'react';

type SkillProps = {
  skillsData: string[][];
};

const Skill: React.FC<SkillProps> = ({ skillsData }) => {
  return (
    <div>
      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-pink-400 mb-3">
        Skills
      </h3>
      <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-4 shadow-lg w-full max-w-xl">
        <ul className="flex justify-between text-gray-300 text-sm sm:text-base md:text-lg px-4 space-x-6">
          {skillsData.map((group, groupIndex) => (
            <div key={groupIndex} className="space-y-1">
              {group.map((skill, index) => (
                <li
                  key={index}
                  className="relative pl-5 before:content-['⚡'] before:absolute before:left-0"
                >
                  {skill}
                </li>
              ))}
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Skill;
