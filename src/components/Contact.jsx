import React from 'react';
import 'font-awesome/css/font-awesome.min.css'; // Import Font Awesome
import './Contact.css';

const Contact = () => {
  const handleSubmit = (e) => {
    
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  

  return (
    <section id="contact">
      <h2>Contact</h2>
      <form action="https://formspree.io/f/mnqkgkoo" method="POST" onSubmit={handleSubmit}>
        <input type="text" placeholder="Your Name" name="name" required />
        <input type="email" placeholder="Your Email" name="email" required />
        <textarea placeholder="Your Message" name="message" required></textarea>
        <button type="submit">Send</button>
      </form>
      <div className="social-icons">
        <a href="https://github.com/Crewiz" target="_blank" rel="noreferrer">
          <i className="fa fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/sebastian-salas-870a25200/" target="_blank" rel="noreferrer">
          <i className="fa fa-linkedin"></i>
        </a>
      </div>
      <button id="scrollToTop" onClick={scrollToTop}>To the Top</button>

    </section>
  );
};

export default Contact;
