import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import BookDetail from './BookDetail';
import MangaDetail from './MangaDetail';
import Register from './Register';
import './App.css';

function App() {
  return (
    <div className="container">
      <nav>
        <Link to="/">Tienda</Link>
        <Link to="/register">Registro</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="book/:id" element={<BookDetail />} />
        <Route path="manga/:id" element={<MangaDetail />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
