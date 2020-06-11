import React from 'react';
import './App.css';

import Header from './components/Header';
import About from './components/About';
import SoftwareDev from './components/Collections/SoftwareDev';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import CAD from './components/Collections/CAD';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="App-header">
      <Header />
      </div>
      
      <div className='About'>
        <About />
      </div>
      <div className='SD'>
        <SoftwareDev />

      </div>
      <div className='CAD'>
        <CAD />

      </div>
      <div className='contact'>
        <Contact />
      </div>
    </div>
  );
}

export default App;
