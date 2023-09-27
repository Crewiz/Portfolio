import React, { useState, useEffect } from 'react';
import './AboutMe.css';

const AboutMe = () => {
  const [content1, setContent1] = useState("");
  const [content2, setContent2] = useState("");
  const [glow, setGlow] = useState(false);
  const [allTextLoaded, setAllTextLoaded] = useState(false); // New state

  useEffect(() => {
    let index1 = 0;
    let index2 = 0;
    const text1 = "I am a fullstack javascript developer in training that is passionate about both the Frontend & Backend. I am consistently working on growing and enhancing my skills as a developer and project managing. I have been described as a persistent worker and teamplayer with good problemsolving & leadership skills.";
    const text2 = "Looking to secure an internship or a job-opportunity in an environment that will allow me to refine the skills i have, and gain new ones. I am also currently learning Typescript as part of my training. I am always for opportunites to sharpen myself as a developer aswell as gain experience in bigger teams. ";

    const typing1 = setInterval(() => {
      if(index1 < text1.length) {
        setContent1(text1.substring(0, index1 + 1));
        index1++;
      } else {
        clearInterval(typing1);
        setTimeout(() => {
          const typing2 = setInterval(() => {
            if(index2 < text2.length) {
              setContent2(text2.substring(0, index2 + 1));
              index2++;
            } else {
              clearInterval(typing2);
              setAllTextLoaded(true);  // Indicate that all text is loaded
            }
          }, 15);
        }, 50);
      }
    }, 15);
  }, []);

  useEffect(() => {
    if (allTextLoaded) {
      setGlow('in');  // glow in
      setTimeout(() => setGlow('out'), 2000);  // fade out
    }
  }, [allTextLoaded]);
  

  return (
    <section id="aboutMe">
      <div className="content-wrapper">
        
        
        <div className="paragraph-container">
        <h2 className={`section-title ${glow === 'in' ? 'glow-text' : glow === 'out' ? 'glow-text-fade-out' : ''}`}>Fullstack Developer</h2>
        <div className="inner-container">
          <p className={glow === 'in' ? 'glow-text' : glow === 'out' ? 'glow-text-fade-out' : ''}>{content1}</p>
        </div>
        </div>
        
        <div className="paragraph-container">
        <h2 className={`section-title ${glow === 'in' ? 'glow-text' : glow === 'out' ? 'glow-text-fade-out' : ''}`}>Currently i am...</h2>
        <div className="inner-container">

          <p className={glow === 'in' ? 'glow-text' : glow === 'out' ? 'glow-text-fade-out' : ''}>{content2}</p>
        </div>
      </div>
      </div>
    </section>
  );
};

export default AboutMe;
