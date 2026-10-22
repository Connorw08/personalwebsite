import React from 'react';

const SectionHeader = ({ title, children }) => (
  <header className="mb-10 md:mb-14 rise">
    <h2
      className="text-4xl md:text-5xl font-bold leading-[1.05]"
      style={{ fontStretch: '125%', letterSpacing: '-0.02em' }}
    >
      {title}
    </h2>
    {children && <p className="mt-4 max-w-2xl text-fog text-base md:text-lg leading-relaxed">{children}</p>}
  </header>
);

export default SectionHeader;
