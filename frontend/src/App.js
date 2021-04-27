import React from 'react';
import './css/app.css';

import Navbar from './components/Navbar'
import Bio from './components/Bio'
import Experience from './components/Experience';
import Work from './components/Work';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Bio />
      <Experience />
      <Work />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
