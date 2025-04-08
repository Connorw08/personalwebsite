import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      id: 1,
      icon: '🎮',
      title: 'Sort Royale',
      tag: 'HackNC Winner - Best Game',
      description: 'An educational game that transforms complex sorting algorithms into engaging gameplay. Players progress through interactive tutorials explaining bubble sort, insertion sort, quicksort, and merge sort with animated visualizations that break down each step of the process. The competitive mode allows players to challenge friends in algorithm races, testing both understanding and implementation speed. The project won "Best Game" at the HackNC hackathon for its innovative approach to computer science education.',
      technologies: ['React.js', 'Custom CSS', 'Algorithm Visualization', 'Real-time Competition'],
      link: 'https://devpost.com/software/sort-royale',
      githubLink: 'https://github.com/GillianZech/sort-royale'
    },
    {
      id: 2,
      icon: '📱',
      title: 'Interactive Pokédex',
      tag: 'Web Application',
      description: 'A comprehensive Pokémon encyclopedia that leverages modern web architecture to deliver a seamless user experience. The application features advanced state management with React Hooks to maintain application context without page refreshes. The custom pagination system efficiently handles the display of 900+ Pokémon with lazy loading for optimal performance. The intelligent search algorithm allows filtering by name, type, abilities, and stats, while the responsive layout adapts perfectly to any device from desktop to mobile.',
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'React Query', 'RESTful API Integration'],
      link: 'https://pokedex-connorwhitlow.vercel.app/',
      githubLink: 'https://github.com/Connorw08/pokedex'
    },
    {
      id: 3,
      icon: '💻',
      title: 'Portfolio Website',
      tag: 'Personal Project',
      description: 'A modern, responsive portfolio website built from scratch to showcase my projects and skills as a developer. The site features a custom-designed component system with animated transitions between sections and interactive elements that respond to user engagement. The architecture implements atomic design principles with reusable UI components that maintain consistent styling throughout the application. Performance optimization techniques include lazy loading of images, code splitting for faster initial load times, and a responsive design system that scales seamlessly across devices without compromising visual fidelity.',
      technologies: ['React', 'Tailwind CSS', 'Responsive Design', 'Next.js', 'SEO Optimization'],
      link: 'https://connorwhitlow.com/',
      githubLink: 'https://github.com/Connorw08/personalwebsite'
    },
    {
      id: 4,
      icon: '🎲',
      title: 'Wordle',
      tag: 'Game Application',
      description: 'A feature-complete recreation of the viral word-guessing game with additional enhancements. The application connects to a dictionary API to generate random 5-letter words and validates guesses against a comprehensive word list. The sophisticated visual feedback system uses color-coding (green for correct position, yellow for correct letter but wrong position, gray for incorrect letters) with smooth animations between guesses. Player progress is tracked across sessions using browser storage, maintaining statistics like win percentage.',
      technologies: ['TypeScript', 'React', 'Tailwind CSS', 'Vite', 'Local Storage', 'API Integration'],
      link: 'https://wordle-connorwhitlow.vercel.app/',
      githubLink: 'https://github.com/Connorw08/wordle'
    },
    {
      id: 5,
      icon: '🎨',
      title: 'Pixel Art Maker',
      tag: 'Creative Tool',
      description: 'A sophisticated digital art creation tool built around a customizable pixel grid. The application architecture follows a robust MVC pattern with a dedicated PixelArtMakerEngine class that manages the canvas state as a two-dimensional array of hex color values. The toolset includes a precision pencil for individual pixel placement, a smart fill bucket that detects and fills connected areas of the same color, and a multi-mode eraser with adjustable size.',
      technologies: ['TypeScript', 'JavaScript DOM', 'CSS', 'Canvas API', 'Local Storage', 'Image Export'],
      link: 'https://pixelart-connorwhitlow.vercel.app/',
      githubLink: 'https://github.com/Connorw08/pixel-art-maker'
    },
    {
      id: 6,
      icon: '🍽️',
      title: 'Safe Eats',
      tag: 'Client Project - Technical Lead',
      description: 'A comprehensive food delivery platform specifically designed to address the critical needs of individuals with food allergies and dietary restrictions. As Technical Lead, I architected a multi-tier application with secure JWT-based authentication handling distinct user types (customers, restaurant owners, and our client). The restaurant management system includes a sophisticated menu builder that tags 14 common allergens and dietary preferences for each dish, with image upload capabilities and automatic image optimization.',
      technologies: ['React', 'Tailwind CSS', 'Python', 'FastAPI', 'Firebase', 'JWT Authentication'],
      link: 'https://restaurant-allergy-manager.onrender.com'
    },
    {
      id: 7,
      icon: '🧸',
      title: 'Carolina Adapts Toys for Children',
      tag: 'UNC Organization - Team Lead',
      description: 'A community-focused initiative that transforms standard commercial toys into accessible versions for children with various disabilities. Working with a multidisciplinary team, I helped redesign mechanical and electronic components to create adaptive switches and controls that accommodate limited motor abilities. Each modification is custom-tailored to the specific needs of individual children, often involving the creation of large, high-contrast buttons that can be activated with minimal pressure.',
      technologies: ['Electronics', '3D Printing', 'Circuit Design', 'Inclusive Design'],
      link: 'https://www.catch-inc.com/',
    },
  ];

  return (
    <section id="projects" className="bg-sectionBgLight">
      <div className="container">
        <h2>Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              icon={project.icon}
              title={project.title}
              tag={project.tag}
              description={project.description}
              technologies={project.technologies}
              link={project.link}
              githubLink={project.githubLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
