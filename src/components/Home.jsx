import React from 'react';

const Home = ({ setActiveTab }) => {
  const handleContactClick = () => {
    setActiveTab('contact');
    
    // Scroll to top when changing tabs
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <section id="home" className="flex flex-col items-center justify-center text-center px-4 md:px-8 py-20 min-h-[calc(100vh-70px)] bg-gradient-to-br from-primary to-dark">
      <img 
        src="/images/profile-pic.jpg" 
        alt="Connor Whitlow" 
        className="w-[180px] h-[180px] md:w-[200px] md:h-[200px] rounded-full object-cover border-4 border-light mb-8 shadow-xl"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'200\' height=\'200\' viewBox=\'0 0 200 200\'%3E%3Crect width=\'200\' height=\'200\' fill=\'%2377a0ce\'/%3E%3Ctext x=\'50%25\' y=\'50%25\' font-family=\'Arial\' font-size=\'36\' text-anchor=\'middle\' fill=\'white\' dominant-baseline=\'middle\'%3ECW%3C/text%3E%3C/svg%3E';
        }}
      />
      
      <h1 className="text-4xl md:text-5xl mb-4">Connor Whitlow</h1>
      
      <p className="text-lg md:text-xl text-textLight max-w-2xl mx-auto mt-4 mb-10 leading-7">
        Computer Science and Economics Double Major with a Data Science Minor at UNC Chapel Hill
      </p>
      
      <div className="flex flex-col sm:flex-row gap-6 justify-center mt-10">
        <a 
          href="https://www.linkedin.com/in/connor-whitlow-7a1858320/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="social-button"
        >
          LinkedIn
        </a>
        
        <a 
          href="https://github.com/Connorw08" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="social-button"
        >
          GitHub
        </a>
        
        <button 
          onClick={handleContactClick} 
          className="cta-button"
        >
          Contact Me
        </button>
      </div>
    </section>
  );
};

export default Home;