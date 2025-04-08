import React from 'react';

const Education = () => {
  const courses = [
    { code: 'COMP 426', name: 'Modern Web Programming' },
    { code: 'COMP 421', name: 'Files and Databases' },
    { code: 'COMP 523', name: 'Software Engineering Lab' },
    { code: 'COMP 433', name: 'Mobile Computing' },
    { code: 'COMP 423', name: 'Foundations of Software Engineering' },
    { code: 'COMP 311', name: 'Computer Organization' }
  ];

  return (
    <section id="education" className="bg-sectionBgDarker">
      <div className="container">
        <h2>Education</h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg p-10 shadow-card transition-all hover:-translate-y-2 hover:shadow-cardHover">
            <div className="flex flex-col md:flex-row gap-8">
              {/* University Logo */}
              <div className="w-[100px] h-[100px] bg-primary text-white flex justify-center items-center font-bold text-3xl rounded-lg shadow-md mx-auto md:mx-0">
                UNC
              </div>
              
              {/* Education Details */}
              <div className="flex-1">
                <h3 className="text-2xl mb-2 text-center md:text-left">University of North Carolina at Chapel Hill</h3>
                <p className="font-semibold text-primary text-lg mb-1 text-center md:text-left">
                  B.A. Computer Science and Economics, Minor in Data Science
                </p>
                <p className="text-white bg-primary px-3 py-1 rounded-full inline-block mb-6 text-sm text-center md:text-left">
                  Expected Graduation: May 2026
                </p>
                
                <h4 className="text-xl font-semibold mb-4 mt-2 text-dark">Relevant Coursework:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {courses.map((course, index) => (
                    <div 
                      key={index}
                      className="bg-gray-100 p-4 rounded-lg transition-all hover:bg-gray-200 hover:-translate-y-1"
                    >
                      <h5 className="font-semibold text-primary mb-1">{course.code}</h5>
                      <p className="text-gray-700">{course.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;