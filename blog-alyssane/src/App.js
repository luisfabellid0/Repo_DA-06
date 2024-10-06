import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header className="header">
        <h1>Bienvenidos al Blog de Alyssane</h1>
      </header>
      <main className="main-content">
        <section className="about">
          <h2>Sobre Alyssane</h2>
          <p>¡Hola! Soy Alyssane y este es mi espacio personal donde comparto mis pensamientos, aventuras y fotografías.</p>
          <p>Siento una gran pasión por la fotografía y el diseño, y aquí es donde muestro algunas de mis capturas favoritas.</p>
        </section>
        <section className="gallery">
          <h2>Galería de Fotos</h2>
          <div className="gallery-grid">
            <img src="https://via.placeholder.com/300?text=Foto+1" alt="Foto 1" />
            <img src="https://via.placeholder.com/300?text=Foto+2" alt="Foto 2" />
            <img src="https://via.placeholder.com/300?text=Foto+3" alt="Foto 3" />
          </div>
        </section>
      </main>
      <footer className="footer">
        <p>© 2024 Blog de Alyssane. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;