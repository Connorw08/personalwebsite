import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-header text-white text-center py-6">
      <div className="container mx-auto">
        <p>&copy; {currentYear} Connor Whitlow. All Rights Reserved.</p>
        
        {/* Optional social links */}
        <div className="flex justify-center mt-4 space-x-4">
          <a 
            href="https://www.linkedin.com/in/connor-whitlow-7a1858320/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-secondary transition-colors"
          >
            LinkedIn
          </a>
          <span className="text-white">|</span>
          <a 
            href="https://github.com/Connorw08" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-secondary transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;