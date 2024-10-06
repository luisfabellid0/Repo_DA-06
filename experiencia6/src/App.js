import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Home from './components/Home'
import Build from './components/Build'
import Future from './components/Future'
import PrivateRoute from './components/PrivateRoute'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Furina - Genshin Impact</h1>
          <p>Descubre más sobre Furina, su build y su papel en la historia.</p>
        </header>
        <nav>
        <ul>
          <li><Link to="/">Presentación</Link></li>
          <li><Link to="/build">Build</Link></li>
          <li><Link to="/future">Futuro</Link></li>
          <li><Link to="/secret">Sección Secreta (Privada)</Link></li>
        </ul>
        </nav> 


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/build" element={<Build />} />
          <Route path="/future" element={<Future />} />
          <Route path="/secret/*" element={<PrivateRoute />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
