import React, { useState, useEffect } from 'react';

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

const ITEM_H = 36; // desktop index row height; the marker slides in these steps

const Name = ({ onClick, className = '' }) => (
  <button
    type="button"
    onClick={onClick}
    aria-label="Connor Whitlow, home"
    className={`text-left font-bold text-chalk leading-[1.05] hover:text-carolina transition-colors duration-150 ${className}`}
    style={{ fontStretch: '125%', letterSpacing: '-0.02em' }}
  >
    Connor
    <br />
    Whitlow
  </button>
);

const Navbar = ({ activeTab, setActiveTab }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const onKey = (e) => e.key === 'Escape' && setIsMobileMenuOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isMobileMenuOpen]);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    setIsMobileMenuOpen(false);
  };

  const activeIndex = navItems.findIndex((item) => item.id === activeTab);

  return (
    <>
      {/* Desktop: side index */}
      <nav
        aria-label="Main"
        className="hidden lg:flex fixed inset-y-0 left-0 z-50 w-[220px] flex-col justify-between px-10 py-10"
      >
        <div>
          {/* On home the hero already says the name, so the index starts with it hidden */}
          <div
            style={{
              opacity: activeTab === 'home' ? 0 : 1,
              visibility: activeTab === 'home' ? 'hidden' : 'visible',
              transition: 'opacity 200ms var(--ease-out), visibility 200ms',
            }}
          >
            <Name onClick={() => handleTabChange('home')} className="text-lg" />
          </div>

          <ul className="relative mt-14" style={{ boxShadow: 'inset 1px 0 0 var(--rule-strong)' }}>
            <span
              aria-hidden="true"
              className="absolute left-0 top-0 w-[2px] bg-carolina"
              style={{
                height: ITEM_H - 16,
                transform: `translateY(${Math.max(activeIndex, 0) * ITEM_H + 8}px)`,
                opacity: activeIndex === -1 ? 0 : 1,
                transition: 'transform 260ms var(--ease-move), opacity 160ms var(--ease-out)',
              }}
            />
            {navItems.map((item) => {
              const active = activeTab === item.id;
              return (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => handleTabChange(item.id)}
                    aria-current={active ? 'page' : undefined}
                    className={`w-full text-left pl-4 text-[15px] transition-colors duration-150 ${
                      active ? 'text-chalk' : 'text-fog hover:text-chalk'
                    }`}
                    style={{ height: ITEM_H }}
                  >
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="flex flex-col gap-2">
          <a
            href="https://www.linkedin.com/in/connor-whitlow-7a1858320/"
            target="_blank"
            rel="noopener noreferrer"
            className="link-arrow"
          >
            LinkedIn ↗
          </a>
          <a href="https://github.com/Connorw08" target="_blank" rel="noopener noreferrer" className="link-arrow">
            GitHub ↗
          </a>
        </div>
      </nav>

      {/* Mobile: top bar */}
      <nav
        aria-label="Main"
        className="lg:hidden fixed top-0 left-0 w-full z-50 bg-ink"
        style={{
          boxShadow: scrolled || isMobileMenuOpen ? '0 1px 0 var(--rule-strong)' : '0 1px 0 transparent',
          transition: 'box-shadow 200ms var(--ease-out)',
        }}
      >
        <div className="h-16 px-5 md:px-10 flex items-center justify-between">
          <button
            type="button"
            onClick={() => handleTabChange('home')}
            aria-label="Connor Whitlow, home"
            className="font-bold text-chalk"
            style={{ fontStretch: '125%', letterSpacing: '-0.02em' }}
          >
            Connor Whitlow
          </button>

          <button
            type="button"
            className="w-11 h-11 -mr-2 flex flex-col justify-center items-center gap-[5px]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <span className={`block w-5 h-px bg-chalk transition-transform duration-200 ${isMobileMenuOpen ? 'translate-y-[3px] rotate-45' : ''}`} />
            <span className={`block w-5 h-px bg-chalk transition-transform duration-200 ${isMobileMenuOpen ? '-translate-y-[3px] -rotate-45' : ''}`} />
          </button>
        </div>

        <div
          id="mobile-menu"
          className={`fixed top-16 inset-x-0 bottom-0 bg-ink flex flex-col justify-between overflow-y-auto transition-opacity duration-200 ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          aria-hidden={!isMobileMenuOpen}
        >
          <ul className="px-5 pt-4">
            {[{ id: 'home', label: 'Home' }, ...navItems].map((item) => {
              const active = activeTab === item.id;
              return (
                <li key={item.id} style={{ boxShadow: '0 1px 0 var(--rule-strong)' }}>
                  <button
                    type="button"
                    tabIndex={isMobileMenuOpen ? 0 : -1}
                    onClick={() => handleTabChange(item.id)}
                    aria-current={active ? 'page' : undefined}
                    className="w-full py-4 text-left"
                  >
                    <span
                      className={`text-2xl font-semibold ${active ? 'text-carolina' : 'text-chalk'}`}
                      style={{ fontStretch: '112%' }}
                    >
                      {item.label}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Same links the desktop side index keeps at its foot */}
          <div className="flex gap-3 px-5 pt-8 pb-8">
            <a
              href="https://www.linkedin.com/in/connor-whitlow-7a1858320/"
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={isMobileMenuOpen ? 0 : -1}
              className="btn btn-ghost flex-1"
            >
              LinkedIn ↗
            </a>
            <a
              href="https://github.com/Connorw08"
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={isMobileMenuOpen ? 0 : -1}
              className="btn btn-ghost flex-1"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
