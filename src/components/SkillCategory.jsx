import React from 'react';

const SkillCategory = ({ title, skills }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-card transition-all hover:-translate-y-2 hover:shadow-cardHover">
      <h3 className="text-dark mb-6 pb-3 border-b-2 border-primary border-opacity-20">{title}</h3>
      <div className="flex flex-wrap gap-4 mt-4">
        {skills.map((skill, index) => (
          <div 
            key={index} 
            className="skill-tag cursor-pointer transition-transform duration-300 hover:-translate-y-1"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCategory;