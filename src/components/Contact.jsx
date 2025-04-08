import React from 'react';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <section id="contact" className="bg-sectionBgDarker">
      <div className="container">
        <h2>Contact Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
          {/* Contact Information */}
          <div className="bg-white p-8 rounded-lg shadow-card">
            <div className="flex flex-col space-y-6">
              <div className="flex items-center">
                <span className="text-3xl text-primary mr-5">📧</span>
                <p className="m-0">connor.whitlow242218@gmail.com</p>
              </div>
              
              <div className="flex items-center">
                <span className="text-3xl text-primary mr-5">📱</span>
                <p className="m-0">(910) 408 8381</p>
              </div>
              
              <div className="flex items-center">
                <span className="text-3xl text-primary mr-5">📍</span>
                <p className="m-0">Chapel Hill, NC</p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <a 
                  href="https://linkedin.com/in/connor-whitlow-7a1858320/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-button text-center"
                >
                  LinkedIn
                </a>
                
                <a 
                  href="https://github.com/Connorw08" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-button text-center"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="md:col-span-2">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
