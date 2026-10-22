import React from 'react';

const JobCard = ({ title, company, period, description, current, index }) => {
  return (
    <li
      className="rise grid grid-cols-1 md:grid-cols-[220px_minmax(0,1fr)] gap-2 md:gap-10 py-8 md:py-10"
      style={{ '--i': index + 1, boxShadow: '0 -1px 0 var(--rule-strong)' }}
    >
      <p className={`text-[15px] md:pt-1.5 ${current ? 'text-carolina' : 'text-fog'}`}>{period}</p>

      <div>
        <h3 className="text-xl md:text-2xl font-semibold text-chalk leading-tight">{title}</h3>
        <p className="mt-1 text-fog">{company}</p>
        <p className="mt-4 text-fog leading-relaxed max-w-2xl">{description}</p>
      </div>
    </li>
  );
};

export default JobCard;
