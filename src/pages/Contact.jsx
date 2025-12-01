import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import GalaxyBackground from '../components/Particles/GalaxyBackground';
import './Contact.css';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setError('');

    // EmailJS configuration
    // IMPORTANT: Replace these with your actual EmailJS credentials
    const serviceID = 'YOUR_SERVICE_ID';
    const templateID = 'YOUR_TEMPLATE_ID';
    const publicKey = 'YOUR_PUBLIC_KEY';

    emailjs
      .sendForm(serviceID, templateID, form.current, publicKey)
      .then(
        (result) => {
          console.log('Email sent successfully:', result.text);
          setSubmitted(true);
          setSending(false);
          setTimeout(() => {
            setSubmitted(false);
            setFormData({ name: '', email: '', subject: '', message: '' });
          }, 3000);
        },
        (error) => {
          console.error('Email send failed:', error.text);
          setError('Failed to send message. Please try again or email me directly.');
          setSending(false);
        }
      );
  };

  return (
    <div className="contact">
      <GalaxyBackground />
      <div className="contact-container">
        <motion.h1
          className="contact-title"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Get In <span className="gradient-text">Touch</span>
        </motion.h1>

        <motion.p
          className="contact-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Have a project in mind or want to collaborate? Let's connect!
        </motion.p>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="card">
              <h2>Let's Work Together</h2>
              <p>
                I'm always interested in hearing about new projects and opportunities.
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>

              <div className="contact-methods">
                <a href="mailto:dawsonfilion21@gmail.com" className="contact-method">
                  <FaEnvelope className="method-icon" />
                  <div className="method-info">
                    <h3>Email</h3>
                    <p>dawsonfilion21@gmail.com</p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/dawson-filion-317932227/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-method"
                >
                  <FaLinkedin className="method-icon" />
                  <div className="method-info">
                    <h3>LinkedIn</h3>
                    <p>Connect with me</p>
                  </div>
                </a>

                <a
                  href="https://github.com/Dawsonf18"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-method"
                >
                  <FaGithub className="method-icon" />
                  <div className="method-info">
                    <h3>GitHub</h3>
                    <p>Check out my code</p>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="contact-form-wrapper"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
          >
            <form ref={form} onSubmit={handleSubmit} className="contact-form">
              {error && <div className="error-message">{error}</div>}
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What's this about?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Your message..."
                />
              </div>

              <button type="submit" className="btn btn-primary submit-btn" disabled={sending}>
                {submitted ? (
                  <>
                    <span>Message Sent!</span>
                  </>
                ) : sending ? (
                  <>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
