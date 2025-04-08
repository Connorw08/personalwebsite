import React from 'react';

const JobCard = ({ title, company, period, description }) => {
  return (
    <div className="p-8 relative bg-white rounded-lg mb-8 ml-[100px] shadow-card transition-all hover:-translate-y-1 hover:shadow-cardHover">
      <div className="absolute w-5 h-5 left-[-50px] top-[25px] rounded-full z-10 bg-light border-4 border-primary shadow-md"></div>
      <div className="flex justify-between items-center mb-3 flex-wrap">
        <h3 className="text-primary text-2xl">{title}</h3>
        <span className="text-primary font-semibold bg-primary bg-opacity-10 px-4 py-2 rounded-full">
          {period}
        </span>
      </div>
      <div className="text-primary font-semibold mb-5 text-lg">{company}</div>
      <div className="job-description">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default JobCard;