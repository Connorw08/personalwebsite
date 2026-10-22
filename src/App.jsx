import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  const goTo = (tabId) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="App min-h-screen flex flex-col lg:pl-[220px]">
      <Navbar activeTab={activeTab} setActiveTab={goTo} />

      {/* Keyed so each tab's entrance animation replays on switch */}
      <main key={activeTab} className="flex-1 pt-16 lg:pt-0">
        {activeTab === 'home' && <Home setActiveTab={goTo} />}
        {activeTab === 'about' && <About />}
        {activeTab === 'experience' && <Experience />}
        {activeTab === 'projects' && <Projects />}
        {activeTab === 'education' && <Education />}
        {activeTab === 'skills' && <Skills />}
        {activeTab === 'contact' && <Contact />}
      </main>
    </div>
  );
}

export default App;
