import React from 'react';
import './css/app.css';

import Navbar from './components/Navbar'
import Bio from './components/Bio'
import Experience from './components/Experience';
import Work from './components/Work';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Bio />
      <Experience />
      <Work />
      <Footer />
    </div>
  );
}

export default App;
