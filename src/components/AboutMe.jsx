import React, { useEffect } from 'react';
import './AboutMe.css';

const AboutMe = () => {
  const paragraphs = [
    "I am a Full-Stack JavaScript Developer passionate about both Frontend and Backend development. I consistently work on growing and enhancing my skills as a developer and project manager. Colleagues describe me as a persistent worker and team player with strong problem-solving and collaborative abilities.",
    "Currently, I am managing and developing a live-streaming app named Tevefy, available on both the App Store and Google Play Store. This project has allowed me to work extensively with technologies like React Native, Expo, AWS, Cloudflare, and HLS streaming. I am dedicated to continuously refining my skills and embracing new challenges to stay at the forefront of the industry."
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(element => {
      observer.observe(element);
    });

    return () => {
      elements.forEach(element => observer.unobserve(element));
    };
  }, []);

  return (
    <section id="aboutMe">
      <div className="content-wrapper">
        <div className="paragraph-container fade-in">
          <h2 className="section-title">Full-Stack Developer</h2>
          <div className="inner-container">
            <p>{paragraphs[0]}</p>
          </div>
        </div>
        <div className="paragraph-container fade-in">
          <h2 className="section-title">Current Endeavors</h2>
          <div className="inner-container">
            <p>{paragraphs[1]}</p>
          </div>
        </div>
        <div className="cta-container fade-in">
          <a href="#portfolio" className="cta-button">View My Projects</a>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
