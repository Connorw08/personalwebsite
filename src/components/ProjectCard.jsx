import React, { useId, useState } from 'react';

// A numbered row that opens into the project details.
const ProjectCard = ({ index, title, tag, description, technologies, link, githubLink, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const panelId = useId();
  const num = String(index + 1).padStart(2, '0');

  return (
    <li className="rise" style={{ '--i': index + 1, boxShadow: '0 -1px 0 var(--rule-strong)' }}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="group w-full grid grid-cols-[52px_minmax(0,1fr)_28px] md:grid-cols-[72px_minmax(0,1fr)_minmax(0,auto)_28px] items-baseline gap-x-4 py-5 md:py-6 text-left"
      >
        <span className={`text-xl md:text-[28px] font-semibold leading-tight tabular-nums transition-colors duration-150 ${isOpen ? "text-carolina" : "text-slate"}`} style={{ fontStretch: "112%" }}>{num}</span>
        <span
          className={`text-xl md:text-[28px] font-semibold leading-tight transition-[color,transform] duration-200 group-hover:translate-x-1.5 group-hover:text-carolina ${
            isOpen ? 'text-carolina' : 'text-chalk'
          }`}
          style={{ transitionTimingFunction: 'var(--ease-out)' }}
        >
          {title}
        </span>
        <span className="spec hidden md:block text-right truncate">{tag}</span>
        <span
          aria-hidden="true"
          className="text-fog text-2xl leading-none justify-self-end transition-transform duration-200"
          style={{ transform: isOpen ? 'rotate(45deg)' : 'none', transitionTimingFunction: 'var(--ease-out)' }}
        >
          +
        </span>
      </button>

      {isOpen && (
        <div
          id={panelId}
          className="rise grid grid-cols-1 md:grid-cols-[72px_minmax(0,1fr)] gap-x-4 pb-8"
          style={{ '--i': 0 }}
        >
          <div className="hidden md:block" />
          <div className="max-w-3xl">
            <p className="spec md:hidden mb-3">{tag}</p>
            <p className="text-fog leading-relaxed">{description}</p>

            <ul className="flex flex-wrap gap-x-2 gap-y-2 mt-5" aria-label="Technologies">
              {technologies.map((tech) => (
                <li
                  key={tech}
                  className="text-sm text-chalk px-2.5 py-1 rounded"
                  style={{ boxShadow: 'inset 0 0 0 1px var(--rule-strong)' }}
                >
                  {tech}
                </li>
              ))}
            </ul>

            {(link || githubLink) && (
              <div className="flex flex-wrap gap-3 mt-6">
                {link && (
                  <a href={link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    View project ↗
                  </a>
                )}
                {githubLink && (
                  <a href={githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                    Source ↗
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </li>
  );
};

export default ProjectCard;
