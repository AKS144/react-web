import './App.css';
import React from 'react';
import Navbar from './components/inc/Navbar';
import Footer from './components/inc/Footer';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>   
      <div>     
            <Navbar />

            {/* <Route path="/">
              <Home />              
            </Route>

            <Route path="/about">
              <About />        
            </Route>

            <Route path="/contact">
              <Contact />           
            </Route>         */}
            
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
            </Routes>
             
             <Footer />
      </div>
    </Router>
  );
}

export default App;
