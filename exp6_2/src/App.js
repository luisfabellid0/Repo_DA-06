import React, { useState } from 'react'
import './App.css'
import Playlist from './components/Playlist'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    if (username === 'Alyssane' && password === '1234') {
      setIsAuthenticated(true)
    } else {
      alert('Usuario o contraseña incorrectos')
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Un poco de música porque si :3</h1>
        <p>Accede para ver mis listas de Spotify y YouTube </p>
      </header>

      {!isAuthenticated ? (
        <div className="login-form">
          <h2>Inicia sesión</h2>
          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Acceder</button>
          </form>
        </div>
      ) : (
        <Playlist />
      )}
    </div>
  )
}

export default App