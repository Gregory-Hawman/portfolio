import React from 'react';
import './css/app.css';

import Navbar from './components/Navbar'
import Intro from './components/Intro'
import About from './components/About';
import Work from './components/Work';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Intro />
      <Navbar />
      <About />
      <Work />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
