import React from 'react';
import './Header.css';  // Create a new CSS file for this component

const Header = () => {
  return (
    <header className="main-header">
      <h1 className="site-title">Sebastian Salas</h1>
      <nav className="nav-container">
        <a className="nav-item" href="#aboutMe">About Me</a>
        <a className="nav-item" href="#portfolio">Portfolio</a>
        <a className="nav-item" href="#current-knowledge">Skills</a>
        <a className="nav-item" href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
