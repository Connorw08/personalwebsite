import React, { useState, useEffect } from 'react';

const Navbar = ({ activeTab, setActiveTab }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    setIsMobileMenuOpen(false);
    
    // Scroll to top when changing tabs
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <nav className={`fixed top-0 left-0 w-full flex justify-between items-center px-4 md:px-8 py-4 z-50 transition-all duration-300 ${
      scrolled ? 'bg-header shadow-lg' : 'bg-header bg-opacity-95'
    }`}>
      {/* Logo */}
      <div 
        className="font-serif text-2xl md:text-3xl font-bold text-textLight cursor-pointer" 
        onClick={() => handleTabChange('home')}
      >
        CW
      </div>
      
      {/* Desktop Navigation */}
      <ul className="hidden md:flex">
        {navItems.map((item) => (
          <li
            key={item.id}
            className={`px-4 py-2 mx-1 cursor-pointer text-textLight font-semibold transition-all rounded-full ${
              activeTab === item.id 
                ? 'bg-white bg-opacity-20' 
                : 'hover:bg-white hover:bg-opacity-10'
            }`}
            onClick={() => handleTabChange(item.id)}
          >
            {item.label}
          </li>
        ))}
      </ul>
      
      {/* Mobile Navigation Button */}
      <div 
        className="md:hidden flex flex-col justify-between w-6 h-5 cursor-pointer" 
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <div className={`w-full h-0.5 bg-textLight transition-all duration-300 ${isMobileMenuOpen ? 'transform rotate-45 translate-y-2' : ''}`}></div>
        <div className={`w-full h-0.5 bg-textLight transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></div>
        <div className={`w-full h-0.5 bg-textLight transition-all duration-300 ${isMobileMenuOpen ? 'transform -rotate-45 -translate-y-2' : ''}`}></div>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div 
        className={`md:hidden fixed top-[70px] right-0 h-[calc(100vh-70px)] w-[70%] bg-header shadow-lg transform transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <ul className="flex flex-col items-center pt-8 space-y-6">
          {navItems.map((item) => (
            <li
              key={item.id}
              className={`px-8 py-3 w-4/5 text-center cursor-pointer text-textLight font-semibold transition-all rounded-full ${
                activeTab === item.id 
                  ? 'bg-white bg-opacity-20' 
                  : 'hover:bg-white hover:bg-opacity-10'
              }`}
              onClick={() => handleTabChange(item.id)}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;