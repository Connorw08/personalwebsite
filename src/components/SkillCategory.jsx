import React from 'react';

const SkillCategory = ({ title, skills, index }) => {
  return (
    <div
      className="rise grid grid-cols-1 md:grid-cols-[260px_minmax(0,1fr)] gap-3 md:gap-10 py-6 md:py-8"
      style={{ '--i': index + 1, boxShadow: '0 -1px 0 var(--rule-strong)' }}
    >
      <h3 className="text-base font-semibold text-chalk md:pt-1">{title}</h3>
      <ul className="flex flex-wrap gap-x-5 gap-y-2">
        {skills.map((skill) => (
          <li key={skill} className="text-lg text-chalk">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillCategory;
