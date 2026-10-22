import React from 'react';
import SectionHeader from './SectionHeader';

const specs = [
  { label: 'Based in', value: 'Chapel Hill, NC' },
  { label: 'Studying', value: 'CS + Economics, Data Science minor' },
  { label: 'Graduating', value: 'May 2026' },
  { label: 'Interests', value: 'Software engineering, AI, finance' },
];

const About = () => {
  return (
    <section id="about">
      <div className="sheet">
        <SectionHeader title="About me" />

        <div className="grid grid-cols-1 md:grid-cols-[280px_minmax(0,1fr)] gap-10 md:gap-16">
          <div className="rise" style={{ '--i': 1 }}>
            <div className="relative w-full max-w-[280px] aspect-square rounded-lg overflow-hidden bg-raised">
              <img
                src="/images/profile-pic.jpg"
                alt="Connor Whitlow"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <span
                aria-hidden="true"
                className="absolute inset-0 rounded-lg pointer-events-none"
                style={{ boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.1)' }}
              />
            </div>

            <dl className="mt-6 max-w-[280px]">
              {specs.map((s) => (
                <div key={s.label} className="py-3" style={{ boxShadow: '0 -1px 0 var(--rule-strong)' }}>
                  <dt className="spec mb-1">{s.label}</dt>
                  <dd className="text-sm text-chalk">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-fog max-w-2xl">
            <p className="rise text-chalk text-xl md:text-2xl leading-snug" style={{ '--i': 2, fontStretch: '106%' }}>
              I'm a junior Computer Science and Economics student at the University of North Carolina at Chapel Hill,
              passionate about software engineering, artificial intelligence, and finance.
            </p>
            <p className="rise" style={{ '--i': 3 }}>
              I currently work at the UNC BeAM Makerspace as a Program Assistant. I conduct technical maintenance
              and improvements on makerspace equipment and space to ensure optimal performance and accessibility for users.
              I also lead hands-on workshops and training sessions, allowing students and faculty to successfully
              utilize complex tools and technology.
            </p>
            <p className="rise" style={{ '--i': 4 }}>
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
