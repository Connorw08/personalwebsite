import React from 'react';
import SkillCategory from './SkillCategory';
import SectionHeader from './SectionHeader';

const Skills = () => {
  const skillCategories = [
    {
      id: 1,
      title: 'Programming Languages',
      skills: [
        'Python', 'TypeScript', 'JavaScript', 'Java', 'C', 
        'React', 'Tailwind CSS', 'HTML', 'CSS'
      ]
    },
    {
      id: 2,
      title: 'Databases & Cloud Technologies',
      skills: [
        'MongoDB', 'Firebase', 'Cloud Vision AI', 
        'FastAPI', 'Google Cloud Platform', 
        'RESTful API Design', 'JWT Authentication'
      ]
    },
    {
      id: 3,
      title: 'Frameworks & Libraries',
      skills: [
        'React.js', 'Next.js', 'Vite', 
        'React Query', 'Node.js', 
        'Algorithm Visualization', 
        '3D Printing Design'
      ]
    },
    {
      id: 4,
      title: 'Development Tools',
      skills: [
        'Git', 'GitHub', 'Visual Studio Code', 
        'Postman', 'Jupyter Notebook', 
        'Local Storage', 'Image Optimization'
      ]
    },
    {
      id: 5,
      title: 'Soft Skills & Specialties',
      skills: [
        'Game Development', 'Technical Lead Experience', 
        'Inclusive Design', 'Project Management', 
        'Algorithm and Data Structures', 'Platform Design',
        'Adaptive Technology', 'Hackathon Winner', 'Artificial Intelligence'
      ]
    }
  ];

  return (
    <section id="skills">
      <div className="sheet">
        <SectionHeader title="Toolkit" />
        <div style={{ boxShadow: '0 1px 0 var(--rule-strong)' }}>
          {skillCategories.map((category, i) => (
            <SkillCategory
              key={category.id}
              index={i}
              title={category.title}
              skills={category.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;