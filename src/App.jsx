// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './App.css';
import './ProjectCard.css'
import ProjectCard from './components/ProjectCard';
import ParticleBackground from './components/ParticleBackground';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {

  const projectsData = [
    {
      name: 'Project 1',
      thumbnail: 'https://dummyimage.in/600x400/282830/ffffff',
      description: 'This is the description of Project 1. It is an amazing project with cool features.',
      technologies: 'React, Node.js, MongoDB',
      link: 'https://example.com/project1',
    },
    {
      name: 'Project 2',
      thumbnail: 'https://dummyimage.in/600x400/282830/ffffff',
      description: 'Project 2 is another fantastic project. It involves cutting-edge technologies and innovation.',
      technologies: 'Vue.js, Express, PostgreSQL',
      link: 'https://example.com/project2',
    },
    // Add more projects as needed
  ];

  return (
    <Router>
      <ParticleBackground class="particles-container"/>
      <Header />
      <About />
      <Contact   />
      <div className="app">
      <h1>My Portfolio</h1>
      <h2>Skills</h2>
      <h2>Projects</h2>
      <div>
      {projectsData.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
    </div>
  );
      <Projects />
      <Skills />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
