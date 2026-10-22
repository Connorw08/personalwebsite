import React, { useState } from 'react';
import ContactForm from './ContactForm';
import SectionHeader from './SectionHeader';

const EMAIL = 'connor.whitlow242218@gmail.com';

const details = [
  { label: 'Phone', value: '(910) 408 8381', href: 'tel:+19104088381' },
  { label: 'Location', value: 'Chapel Hill, NC' },
  { label: 'LinkedIn', value: 'connor-whitlow ↗', href: 'https://linkedin.com/in/connor-whitlow-7a1858320/', external: true },
  { label: 'GitHub', value: 'Connorw08 ↗', href: 'https://github.com/Connorw08', external: true },
];

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <section id="contact">
      <div className="sheet">
        <SectionHeader title="Get in touch">
          Open to internships, full-time roles, and interesting projects. Email is the fastest way to reach me.
        </SectionHeader>

        {/* The email is the point of this page, so it leads */}
        <div className="rise flex flex-wrap items-baseline gap-x-6 gap-y-3 mb-14 md:mb-20" style={{ '--i': 1 }}>
          <a
            href={`mailto:${EMAIL}`}
            className="text-2xl sm:text-3xl md:text-[44px] font-bold leading-tight text-chalk hover:text-carolina transition-colors duration-150 break-all sm:break-normal"
            style={{ fontStretch: '112%', letterSpacing: '-0.02em' }}
          >
            {EMAIL}
          </a>
          <button
            type="button"
            onClick={copyEmail}
            className="h-11 text-[15px] text-fog hover:text-carolina transition-colors duration-150"
            aria-live="polite"
          >
            {copied ? 'Copied' : 'Copy'}
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)] gap-12 lg:gap-16">
          <dl className="rise" style={{ '--i': 2, boxShadow: '0 1px 0 var(--rule-strong)' }}>
            {details.map((d) => (
              <div
                key={d.label}
                className="grid grid-cols-[100px_minmax(0,1fr)] items-baseline gap-4 py-4"
                style={{ boxShadow: '0 -1px 0 var(--rule-strong)' }}
              >
                <dt className="text-[15px] text-fog">{d.label}</dt>
                <dd className="text-lg text-chalk">
                  {d.href ? (
                    <a
                      href={d.href}
                      {...(d.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className="hover:text-carolina transition-colors duration-150"
                    >
                      {d.value}
                    </a>
                  ) : (
                    d.value
                  )}
                </dd>
              </div>
            ))}
          </dl>

          <div className="rise" style={{ '--i': 3 }}>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
