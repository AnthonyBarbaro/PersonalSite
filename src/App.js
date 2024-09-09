import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectPage from './pages/ProjectPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Route for home page */}
        <Route path="/projects" element={<Projects />} /> {/* Route for the list of projects */}
        <Route path="/projects/:id" element={<ProjectPage />} /> {/* Dynamic route for individual project */}
      </Routes>
    </Router>
  );
}

export default App;
