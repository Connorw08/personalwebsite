import React from 'react';
import HeroGraph from './HeroGraph';

const Home = ({ setActiveTab }) => {
  return (
    <section id="home" className="min-h-[calc(100vh-4rem)] lg:min-h-screen flex items-center">
      <div className="max-w-sheet w-full mx-auto px-5 md:px-10 py-12 md:py-16">
        <HeroGraph onOpen={setActiveTab} />

        <div className="flex flex-wrap gap-3 mt-10 md:mt-12">
          <button
            type="button"
            onClick={() => setActiveTab('contact')}
            className="btn btn-primary hero-cta"
            style={{ '--i': 0 }}
          >
            Get in touch
          </button>
          <a
            href="https://www.linkedin.com/in/connor-whitlow-7a1858320/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost hero-cta"
            style={{ '--i': 1 }}
          >
            LinkedIn ↗
          </a>
          <a
            href="https://github.com/Connorw08"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost hero-cta"
            style={{ '--i': 2 }}
          >
            GitHub ↗
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
