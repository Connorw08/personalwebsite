import React from 'react';
import SectionHeader from './SectionHeader';

const specs = [
  { label: 'Role', value: 'Software Engineer, Parsons' },
  { label: 'Degree', value: 'B.A. CS + Economics, UNC Chapel Hill' },
  { label: 'Graduated', value: 'May 2026' },
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
              I'm a full-stack software engineer at Parsons, building Java services and TypeScript interfaces.
              I graduated from the University of North Carolina at Chapel Hill in May 2026 with a B.A. in Computer
              Science and Economics and a minor in Data Science.
            </p>
            <p className="rise" style={{ '--i': 3 }}>
              At Parsons I work across the whole stack: new endpoints, database work, and new frontend components and
              pages. I started there as an intern, leading frontend work on a data visualization app and building an
              interactive flow editor with React Flow.
            </p>
            <p className="rise" style={{ '--i': 4 }}>
              At UNC I was a Program Specialist at the BeAM Makerspace, keeping equipment running and teaching weekly
              workshops on 3D printing, laser cutting, and sewing machines. I was also a member of Carolina Adapts Toys
              for Children, where I collaborated with peers to adapt
              and modify commercially available toys for children with disabilities. My team also won Best Game at
              HackNC with Sort Royale, a full-stack game that teaches computer science sorting algorithms.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
