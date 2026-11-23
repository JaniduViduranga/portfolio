import React, { useState } from 'react';
import { portfolioData } from '../../data/portfolioData';
import SectionHeading from '../ui/SectionHeading';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export const Contact: React.FC = () => {
  const { socialLinks } = portfolioData;

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (formData.phone.trim()) {
      const phoneRegex = /^(\+94|0)[0-9]{9}$/;
      if (!phoneRegex.test(formData.phone.trim())) {
        newErrors.phone = 'Please enter a valid phone number (e.g. +94766248015 or 0766248015).';
      }
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please enter a message.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => {
        setIsSubmitted(false);
      }, 6000);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <SectionHeading title="Get In Touch" />

        <div className="contact-container">
          {/* Direct Contact Info */}
          <div className="contact-info-panel">
            <h3>Let's Connect</h3>
            <p>
              I'm always interested in new opportunities, projects, and collaborations.
              Feel free to reach out directly or send a message below!
            </p>

            <div className="contact-items">
              <div className="contact-item">
                <div className="contact-icon">
                  <i className={socialLinks.email.icon} aria-hidden="true" />
                </div>
                <div className="contact-details">
                  <h4>Email</h4>
                  <a href={socialLinks.email.url}>{socialLinks.email.value}</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <i className={socialLinks.phone.icon} aria-hidden="true" />
                </div>
                <div className="contact-details">
                  <h4>Phone</h4>
                  <a href={socialLinks.phone.url}>{socialLinks.phone.value}</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <i className={socialLinks.linkedin.icon} aria-hidden="true" />
                </div>
                <div className="contact-details">
                  <h4>LinkedIn</h4>
                  <a
                    href={socialLinks.linkedin.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn Profile
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <i className={socialLinks.github.icon} aria-hidden="true" />
                </div>
                <div className="contact-details">
                  <h4>GitHub</h4>
                  <a
                    href={socialLinks.github.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub Profile
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Contact Form */}
          <div className="contact-form-panel">
            <h3>Send a Message</h3>
            {isSubmitted ? (
              <div className="form-success-alert" role="alert">
                <i className="fas fa-check-circle" aria-hidden="true" />
                <div>
                  <strong>Message Sent!</strong>
                  <p>Thank you for reaching out. I will get back to you shortly.</p>
                </div>
              </div>
            ) : null}

            <form onSubmit={handleSubmit} className="contact-form" noValidate>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Janidu Viduranga"
                  className={errors.name ? 'input-error' : ''}
                />
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. janiduviduranga78@gmail.com"
                  className={errors.email ? 'input-error' : ''}
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number (Optional)</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="e.g. +94 71 740 1557"
                  className={errors.phone ? 'input-error' : ''}
                />
                {errors.phone && <span className="error-message">{errors.phone}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we collaborate?"
                  className={errors.message ? 'input-error' : ''}
                />
                {errors.message && <span className="error-message">{errors.message}</span>}
              </div>

              <button type="submit" className="btn btn-secondary submit-btn">
                <i className="fas fa-paper-plane" aria-hidden="true" /> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
