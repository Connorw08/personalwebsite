import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-sectionBgLight">
      <div className="container">
        <h2>About Me</h2>
        <div className="max-w-3xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-card">
            <p className="mb-4 leading-7">
              I'm a junior Computer Science and Economics student at the University of North Carolina at Chapel Hill. 
              Passionate about software engineering, artificial intelligence, and finance.
            </p>
            
            <p className="mb-4 leading-7">
              I currently work at the UNC BeAM Makerspace as a Program Assistant. I conduct technical maintenance 
              and improvements on makerspace equipment and space to ensure optimal performance and accessibility for users. 
              I also lead hands-on workshops and training sessions, allowing students and faculty to successfully 
              utilize complex tools and technology.
            </p>
            
            <p className="mb-4 leading-7">
              I'm a passionate member of the Carolina Adapts Toys for Children where I collaborate with peers to adapt 
              and modify commercially available toys for children with disabilities. Won Best Game Award at HackNC 
              where I developed Sort Royale, a full-stack project with a team that teaches computer science sorting 
              algorithms in a game-like fashion.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;