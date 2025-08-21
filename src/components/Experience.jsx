import React from 'react';
import JobCard from './JobCard';

const Experience = () => {
  const jobs = [
    {
      id: 1,
      title: 'Software Engineer Intern',
      company: 'Parsons Corporation',
      period: 'May 2025 - Present',
      description: 'Lead frontend development efforts for a data visualization web application, implementing complex React components with intuitive, modern interface designs. Utilize React Flow to create an interactive flow editor feature, enabling users to design and visualize data workflows. Optimize file storage system by implementing a file streaming algorithm, reducing backend storage requirements and improving data transfer efficiency.'
    },
    {
      id: 2,
      title: 'Program Assistant',
      company: 'BeAM UNC, Chapel Hill, NC',
      period: 'January 2024 - Present',
      description: 'Conduct technical maintenance and improvements on makerspace equipment and space to ensure optimal performance and accessibility for users. Lead hands-on workshops and training sessions, allowing students and faculty to successfully utilize complex tools and technology. Provide personalized technical support and guidance, encouraging a collaborative environment for creative projects and innovation.'
    },
    {
      id: 3,
      title: 'Software Engineer Intern',
      company: 'Computer Science Experience Lab UNC, Chapel Hill, NC',
      period: 'August 2024 - December 2024',
      description: 'Utilize technical leadership skills, emphasizing collaborative design, implementation, and delivery of human-centered software systems. Improve spoken and written technical communications to specific audiences of stakeholders, with an emphasis on collaborators. Design, specify, construct, verify iterating on, and operate production-grade software systems in a team setting.'
    },
    {
      id: 4,
      title: 'Barista',
      company: 'Starbucks, Wilmington, NC',
      period: 'October 2021 - August 2022',
      description: 'Delivered outstanding customer service in a fast-paced environment, consistently exceeding guest expectations. Developed efficient time management and communication skills, managing multiple tasks and adapting to a changing environment. Maintained a positive and friendly demeanor, creating a welcoming atmosphere for customers.'
    }
  ];

  return (
    <section id="experience" className="bg-sectionBgDarker">
      <div className="container">
        <h2>Professional Experience</h2>
        <div className="relative max-w-3xl mx-auto pt-12">
          {/* Timeline vertical line */}
          <div className="absolute w-0.5 bg-white h-full top-0 left-[60px] ml-[-1.5px] z-0"></div>
          
          {/* Job cards */}
          {jobs.map((job) => (
            <JobCard
              key={job.id}
              title={job.title}
              company={job.company}
              period={job.period}
              description={job.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;