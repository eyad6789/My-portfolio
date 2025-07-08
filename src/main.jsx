import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'

// Import your page components
import Home from './app.jsx'
import About from './sections/aboutMe.jsx'
import Projects from './sections/project.jsx'
import Contact from './sections/contacMe.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router basename="/My-portfolio">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  </StrictMode>,
)