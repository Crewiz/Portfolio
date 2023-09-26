import React from 'react';
import './CurrentKnowledge.css'; // Importing the stylesheet
import agileIcon from '../assets/agile.png';
import awsIcon from '../assets/AWS.png';
import cicdIcon from '../assets/CICD.png';
import cssIcon from '../assets/CSS.png';
import dockerIcon from '../assets/docker.png';
import expressIcon from '../assets/Express.js.png';
import figmaIcon from '../assets/figma.png';
import firebaseIcon from '../assets/firebase.png';
import githubIcon from '../assets/github.png';
import googleAnalyticsIcon from '../assets/googleanalytics.png';
import graphqlIcon from '../assets/GraphQL.png';
import hetznerIcon from '../assets/Hetzner.png';
import htmlIcon from '../assets/HTML.png';
import jsIcon from '../assets/JavaScript.png';
import jenkinsIcon from '../assets/jenkins.png';
import jestIcon from '../assets/jest.png';
import jwtIcon from '../assets/JWT.png';
import mongoDBIcon from '../assets/MongoDB.png';
import mySQLIcon from '../assets/MySQL.png';
import nodejsIcon from '../assets/Nodejs.png';
import oauthIcon from '../assets/Oauth.png'
import reactIcon from '../assets/React.png';
import reduxIcon from '../assets/Redux.png';
import restAPIIcon from '../assets/RestAPI.png'
import responsiveIcon from '../assets/Responsive.png';
import scssIcon from '../assets/Scss.png'
import seoIcon from '../assets/SEO.png';
import socketIoIcon from '../assets/socketio.png';
import viteIcon from '../assets/vite.png';
import webpackIcon from '../assets/Webpack.png';



const CurrentKnowledge = () => {
  // Defining the skills categories
  const categories = {
    'Programming & Markup Languages': ['HTML', 'CSS', 'JavaScript'],
    'Frontend Technologies & Design': ['React', 'Redux', 'Webpack', 'Responsive Design', 'sCSS', 'Figma'],
    'Backend Technologies & Databases': ['Node.js', 'Express.js', 'RESTful APIs', 'GraphQL', 'Socket.io', 'MongoDB', 'MySQL'],
    'DevOps & Deployment': ['CI/CD', 'Docker', 'Jenkins', 'AWS'],
    'Workflow & Version Control': ['Agile', 'GitHub'],
    'Analytics & SEO': ['Google Analytics', 'SEO'],
    'Authentication & Authorization': ['JWT', 'OAuth'],
    'Testing & Third-Party Services': ['Jest', 'Vitest', 'Hetzner', 'Firebase'],
  };
    

  const skillIcons = {
    'Agile': agileIcon,
    'AWS': awsIcon,
    'CI/CD': cicdIcon,
    'CSS': cssIcon,
    'Docker': dockerIcon,
    'Express.js': expressIcon,
    'Figma': figmaIcon,
    'Firebase': firebaseIcon,
    'GitHub': githubIcon,
    'Google Analytics': googleAnalyticsIcon,
    'GraphQL': graphqlIcon,
    'Hetzner': hetznerIcon,
    'HTML': htmlIcon,
    'JavaScript': jsIcon,
    'Jenkins': jenkinsIcon,
    'Jest': jestIcon,
    'JWT': jwtIcon,
    'MongoDB': mongoDBIcon,
    'MySQL': mySQLIcon,
    'Node.js': nodejsIcon,
    "OAuth": oauthIcon,
    'React': reactIcon,
    'Redux': reduxIcon,
    'RESTful APIs': restAPIIcon,
    'Responsive Design': responsiveIcon,
    'SEO': seoIcon,
    'sCSS': scssIcon,
    'Socket.io': socketIoIcon,
    'Vitest': viteIcon,
    'Webpack': webpackIcon
  };
  


  return (
    <section id="current-knowledge">
      <h2>Skills</h2>
      {Object.keys(categories).map((category, index) => (
        <div className="category" key={index}>
          <h3>{category}</h3>
          <div className="card-container">  {/* Added card container to hold skill cards */}
            {categories[category].map((skill, i) => (
              <div className="skill-card" key={i}>  {/* Each skill becomes a card */}
                {/* Using the skillIcons object to look up the appropriate icon */}
                <img className="skill-icon" src={skillIcons[skill]} alt={`${skill} Icon`} />
                <div className="skill-name">{skill}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
  
};


export default CurrentKnowledge;

