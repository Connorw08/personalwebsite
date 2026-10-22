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
    if (status?.type === 'error') setStatus(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name.trim()) {
      setStatus({ type: 'error', message: 'Enter your name.' });
      return;
    }
    if (!formData.email.includes('@')) {
      setStatus({ type: 'error', message: 'Enter a valid email address.' });
      return;
    }
    if (!formData.message.trim()) {
      setStatus({ type: 'error', message: 'Enter a message.' });
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
        message: "Message sent. I'll get back to you soon."
      });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setStatus(null);
      }, 5000);
    }, 1500);
  };

  return (
    // Fields are ruled rows, same as the contact details beside them
    <form onSubmit={handleSubmit} noValidate>
      <div className="line-row">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          autoComplete="name"
          placeholder="Jordan Lee"
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      <div className="line-row">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          autoComplete="email"
          placeholder="jordan@company.com"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div className="line-row">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          placeholder="What are you working on?"
          value={formData.message}
          onChange={handleChange}
          className="resize-y"
        />
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-8">
        <button type="submit" disabled={loading} className="btn btn-primary sm:w-auto w-full">
          {loading ? 'Sending…' : 'Send message'}
        </button>

        {status && (
          <p
            role={status.type === 'error' ? 'alert' : 'status'}
            className={`text-sm ${
              status.type === 'success' ? 'text-signal' : 'text-fault'
            }`}
          >
            {status.message}
          </p>
        )}
      </div>
    </form>
  );
};

export default ContactForm;
