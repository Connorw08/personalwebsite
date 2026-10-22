import React from 'react';
import SectionHeader from './SectionHeader';

const Education = () => {
  const courses = [
    { code: 'COMP 426', name: 'Modern Web Programming' },
    { code: 'COMP 421', name: 'Files and Databases' },
    { code: 'COMP 523', name: 'Software Engineering Lab' },
    { code: 'COMP 433', name: 'Mobile Computing' },
    { code: 'COMP 423', name: 'Foundations of Software Engineering' },
    { code: 'COMP 311', name: 'Computer Organization' }
  ];

  return (
    <section id="education">
      <div className="sheet">
        <SectionHeader title="Education" />

        {/* Same two-column rhythm as Experience: when on the left, what on the right */}
        <div style={{ boxShadow: '0 1px 0 var(--rule-strong)' }}>
          <div
            className="rise grid grid-cols-1 md:grid-cols-[220px_minmax(0,1fr)] gap-2 md:gap-10 py-8 md:py-10"
            style={{ '--i': 1, boxShadow: '0 -1px 0 var(--rule-strong)' }}
          >
            <p className="text-[15px] text-fog md:pt-2">Graduated May 2026</p>
            <div>
              <h3 className="text-2xl md:text-4xl font-semibold leading-tight text-chalk">
                University of North Carolina at Chapel Hill
              </h3>
              <p className="mt-3 text-lg text-fog">
                B.A. Computer Science and Economics, Minor in Data Science · GPA 3.65
              </p>
            </div>
          </div>

          <div
            className="rise grid grid-cols-1 md:grid-cols-[220px_minmax(0,1fr)] gap-3 md:gap-10 py-8 md:py-10"
            style={{ '--i': 2, boxShadow: '0 -1px 0 var(--rule-strong)' }}
          >
            <h4 className="text-[15px] text-fog md:pt-1">Relevant coursework</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-1">
              {courses.map((course) => (
                <li key={course.code} className="flex items-baseline gap-4 py-1.5">
                  <span className="w-[76px] shrink-0 text-slate tabular-nums text-[15px]">{course.code}</span>
                  <span className="text-chalk text-lg leading-snug">{course.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
