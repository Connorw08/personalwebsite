import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim()) {
      setStatus({ type: 'error', message: 'Please enter your name.' });
      return;
    }
    if (!formData.email.includes('@')) {
      setStatus({ type: 'error', message: 'Please enter a valid email address.' });
      return;
    }
    if (!formData.message.trim()) {
      setStatus({ type: 'error', message: 'Please enter a message.' });
      return;
    }
    
    // Simulate form submission
    setLoading(true);
    setStatus(null);
    
    setTimeout(() => {
      console.log('Form data submitted:', formData);
      setFormData({ name: '', email: '', message: '' });
      setLoading(false);
      setStatus({ 
        type: 'success', 
        message: 'Your message has been sent successfully! I will get back to you soon.' 
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setStatus(null);
      }, 5000);
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-10 rounded-lg shadow-card">
      <div className="mb-6">
        <label htmlFor="name" className="block mb-2 text-dark font-semibold">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-4 border-2 border-header border-opacity-40 rounded-lg font-sans bg-gray-50 text-gray-800 transition-all focus:outline-none focus:border-primary focus:shadow-outline focus:bg-white"
        />
      </div>
      
      <div className="mb-6">
        <label htmlFor="email" className="block mb-2 text-dark font-semibold">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-4 border-2 border-header border-opacity-40 rounded-lg font-sans bg-gray-50 text-gray-800 transition-all focus:outline-none focus:border-primary focus:shadow-outline focus:bg-white"
        />
      </div>
      
      <div className="mb-6">
        <label htmlFor="message" className="block mb-2 text-dark font-semibold">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-4 border-2 border-header border-opacity-40 rounded-lg font-sans bg-gray-50 text-gray-800 transition-all focus:outline-none focus:border-primary focus:shadow-outline focus:bg-white"
        />
      </div>
      
      <button
        type="submit"
        disabled={loading}
        className="submit-button w-full"
      >
        {loading ? 'Sending...' : 'Send Message'}
      </button>
      
      {status && (
        <div className={`mt-4 p-4 rounded-lg text-white font-bold text-center ${status.type === 'success' ? 'bg-green-500' : 'bg-red-500'}`}>
          {status.message}
        </div>
      )}
    </form>
  );
};

export default ContactForm;