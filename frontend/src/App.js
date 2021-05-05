import React from 'react';
import './css/app.css';

import Navbar from './components/Navbar'
import Intro from './components/Intro'
import About from './components/About';
import ProjectsList from './components/WorkList';
import TestimonialsList from './components/TestimonialList';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Intro />
      <Navbar />
      <About />
      <ProjectsList />
      <TestimonialsList />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
