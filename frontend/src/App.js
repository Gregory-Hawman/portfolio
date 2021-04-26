import React from 'react';
import './App.css';

import Navbar from './components/Navbar'
import Bio from './components/Bio'
import Experience from './components/Experience';
import Work from './components/Work';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Bio />
      <Experience />
      <Work />
    </div>
  );
}

export default App;
