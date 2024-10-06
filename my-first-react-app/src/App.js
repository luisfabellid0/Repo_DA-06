import React from 'react'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Furina - Genshin Impact</h1>
        <p>Descubre más sobre Furina, su build y su papel en la historia.</p>
        
        <div className="videos-section">
          <h2>Presentación de Furina</h2>
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/EN79SfbcvIE" 
            title="Presentación de Furina" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
          </iframe>
          <h2>Build para Furina</h2>
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/QmY91WffidE" 
            title="Build para Furina" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
          </iframe>

          <h2>El futuro de Furina</h2>
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/_RAhrisU6Mc" 
            title="El futuro de Furina" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
          </iframe>
        </div>

        <div className="images-section">
          <h2>Galería de Imágenes</h2>
          <img src={require('./furina.png')} alt="Furina" className="image"/>
          <img src={require('./Carta_de_personaje_Furina.png')} alt="Carta de Personaje Furina" className="image"/>
          <img src={require('./descarga.jpeg')} alt="Furina en acción" className="image"/>
        </div>
      </header>
    </div>
  )
}

export default App