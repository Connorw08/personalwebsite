import React from 'react';
import JobCard from './JobCard';
import SectionHeader from './SectionHeader';

const Experience = () => {
  const jobs = [
    {
      id: 1,
      title: 'Software Engineer',
      company: 'Parsons Corporation, Centreville, VA',
      period: 'May 2026 - Present',
      description: 'Full-stack developer across the Java backend and the JavaScript/TypeScript frontend. Build new REST endpoints, manage the application databases, and create new components and pages. Designed and built a dropdown tree data view in TypeScript that renders itself recursively, so data nested to any depth expands into a single, navigable tree.'
    },
    {
      id: 2,
      title: 'Software Engineer Intern',
      company: 'Parsons Corporation, Centreville, VA',
      period: 'May 2025 - May 2026',
      description: 'Led frontend development efforts for a data visualization web application, implementing complex React components with intuitive, modern interface designs. Used React Flow to create an interactive flow editor feature, enabling users to design and visualize data workflows. Optimized the file storage system by implementing a file streaming algorithm, reducing backend storage requirements and improving data transfer efficiency.'
    },
    {
      id: 3,
      title: 'Program Specialist',
      company: 'BeAM UNC, Chapel Hill, NC',
      period: 'January 2024 - May 2026',
      description: 'Managed technical maintenance for makerspace equipment, keeping 99% uptime for student and faculty projects. Led and created weekly hands-on workshops for groups of 12–15 students on 3D printing, laser cutting, and sewing machines. Provided personalized technical support and created comprehensive training documentation for makerspace equipment.'
    },
    {
      id: 4,
      title: 'Software Engineer Intern',
      company: 'Computer Science Experience Lab UNC, Chapel Hill, NC',
      period: 'August 2024 - December 2024',
      description: 'Used technical leadership skills, emphasizing collaborative design, implementation, and delivery of human-centered software systems. Improved spoken and written technical communications for specific audiences of stakeholders, with an emphasis on collaborators. Designed, specified, built, verified, and operated production-grade software systems in a team setting.'
    },
    {
      id: 5,
      title: 'Barista',
      company: 'Starbucks, Wilmington, NC',
      period: 'October 2021 - August 2022',
      description: 'Delivered outstanding customer service in a fast-paced environment, consistently exceeding guest expectations. Developed efficient time management and communication skills, managing multiple tasks and adapting to a changing environment. Maintained a positive and friendly demeanor, creating a welcoming atmosphere for customers.'
    }
  ];

  return (
    <section id="experience">
      <div className="sheet">
        <SectionHeader title="Professional experience" />

        <ol style={{ boxShadow: '0 1px 0 var(--rule-strong)' }}>
          {jobs.map((job, i) => (
            <JobCard
              key={job.id}
              index={i}
              title={job.title}
              company={job.company}
              period={job.period}
              description={job.description}
              current={job.period.includes('Present')}
            />
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Experience;