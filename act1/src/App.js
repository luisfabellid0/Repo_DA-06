import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import CourseDetail from './CourseDetail';
import './App.css';  // Importa el archivo CSS

function App() {
  return (
    <div className="container">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/course/1">Course 1</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="course/:id" element={<CourseDetail />} />
      </Routes>
    </div>
  );
}

export default App;
