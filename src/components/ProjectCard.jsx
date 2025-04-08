import React, { useState } from 'react';

const ProjectCard = ({ icon, title, tag, description, technologies, link, githubLink }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Background colors based on icon
  const getBgColor = () => {
    switch (icon) {
      case '🎮':
        return 'bg-primary';
      case '📱':
        return 'bg-blue-400';
      case '🎲':
        return 'bg-green-400';
      case '🎨':
        return 'bg-purple-400';
      case '🍽️':
        return 'bg-red-400';
      case '🧸':
        return 'bg-secondary';
      case '💻':
        return 'bg-indigo-500';
      default:
        return 'bg-gray-100';
    }
  };

  // Get a shorter description for collapsed view
  const getShortDescription = () => {
    const words = description.split(' ');
    if (words.length > 30) {
      return words.slice(0, 30).join(' ') + '...';
    }
    return description;
  };

  // Determine special projects
  const isSafeEat = title.includes('Safe Eat') || tag.includes('Food') || icon === '🍽️';
  const isAdaptiveToys = title.includes('Adaptive Toys') || icon === '🧸';

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-card transition-all duration-300 h-full flex flex-col hover:-translate-y-2 hover:shadow-cardHover">
      <div className={`h-[120px] flex justify-center items-center ${getBgColor()}`}>
        <span className="text-5xl">{icon}</span>
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold mb-2 text-dark">{title}</h3>
        <p className="inline-block bg-primary bg-opacity-10 text-primary px-3 py-1 rounded-full text-sm mb-3 font-semibold">
          {tag}
        </p>

        <div className="mb-4 flex-grow">
          <p className="leading-relaxed text-gray-700">
            {isExpanded ? description : getShortDescription()}
          </p>

          {description.length > 150 && (
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-primary hover:text-dark font-medium mt-2 flex items-center transition-colors"
            >
              {isExpanded ? 'Show less' : 'Read more'} 
              <svg 
                className={`ml-1 w-4 h-4 transform transition-transform ${isExpanded ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          )}
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span key={index} className="bg-primary bg-opacity-20 px-3 py-1 rounded-full text-sm font-medium">
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-2 space-y-3">
          {/* Project Details button for Safe Eats */}
          {isSafeEat && (
            <a 
              href="/safe-eat-details" 
              className="inline-block bg-primary text-white font-medium py-2 px-4 rounded-md hover:bg-primary-dark transition-colors w-full text-center"
            >
              Project Details
            </a>
          )}
          
          {/* Project Details button for Adaptive Toys */}
          {isAdaptiveToys && (
            <a 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block bg-primary text-white font-medium py-2 px-4 rounded-md hover:bg-primary-dark transition-colors w-full text-center"
            >
              Project Details
            </a>
          )}
          
          {/* GitHub button for projects that have GitHub links (excluding Adaptive Toys) */}
          {!isSafeEat && !isAdaptiveToys && githubLink && (
            <a 
              href={githubLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block bg-gray-800 text-white font-medium py-2 px-4 rounded-md hover:bg-gray-900 transition-colors w-full text-center flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              GitHub Repository
            </a>
          )}

          {/* View Project link - only shown for regular projects and Safe Eats, not Adaptive Toys */}
          {link && !isAdaptiveToys && (
            <a 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block text-primary hover:text-dark font-semibold transition-colors"
            >
              View Project →
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;