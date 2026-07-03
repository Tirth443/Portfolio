import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home'
import './App.css';
import Navbar from './Navbar';
// import Skills from './Skills';
import Contact from './Contact';
import About from './About';
import Projects from './Projects';
const App = () => {
  return (
    <div>
        <Router>
          <Navbar />
            <Routes>

                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                {/* <Route path="/skills" element={<Skills/>}/> */}
                <Route path="/Contact" element={<Contact/>}/>
                <Route path="/about" element={<About/>}/>
            </Routes>
        </Router>
    </div>
  )
}

export default App
