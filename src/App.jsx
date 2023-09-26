import React from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import CurrentKnowledge from './components/CurrentKnowledge';
import Contact from './components/Contact';
import './styles.css';

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Portfolio />
      <CurrentKnowledge />
      <Contact />
    </div>
  );
}

export default App;
