import React from 'react'
import { Navigate, Route, Routes, Link } from 'react-router-dom'
import CharacterDetails from './CharacterDetails'
import CharacterSkills from './CharacterSkills'

// Sim utenticacion
const isAuthenticated = true 
function PrivateRoute() {
  return isAuthenticated ? (
    <div className="page-container">
      <h2>Sección Secreta de Furina</h2>
      <nav>
        <ul>
          <li>
            <Link to="details">Detalles del Personaje</Link>
          </li>
          <li>
            <Link to="skills">Habilidades y materiales</Link>
          </li>
        </ul>
      </nav>

      {/* Rutas anidadas dentro de la ruta privada */}
      <Routes>
        <Route path="details" element={<CharacterDetails />} />
        <Route path="skills" element={<CharacterSkills />} />
      </Routes>
    </div>
  ) : (
    <Navigate to="/" />
  )
}

export default PrivateRoute