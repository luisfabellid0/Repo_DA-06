import React from 'react'

function Home() {
  return (
    <div className="page-container">
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
    </div>
  )
}

export default Home