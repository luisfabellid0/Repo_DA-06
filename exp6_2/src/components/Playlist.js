import React from 'react'

function Playlist() {
  return (
    <div className="playlist-container">
      <h2>Playlist de Spotify</h2>
      <iframe
        src="https://open.spotify.com/embed/playlist/7yCOzqFhDuk1wjAamzRXNc?utm_source=generator"
        width="300"
        height="380"
        frameBorder="0"
        allow="encrypted-media"
        title="Spotify Playlist"
      ></iframe>

      <h2>Videos en YouTube Music</h2>
      <ul>
        <li>
          <a href="https://www.youtube.com/watch?v=VSyZz7ubR_Q" target="_blank" rel="noopener noreferrer">
          Washing Machine Heart - Mitski I violin cover
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=c4eoyrFzgDg" target="_blank" rel="noopener noreferrer">
          Andrea Chiarini - If Pantera were Flamenco
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=RRffONWwR-Q" target="_blank" rel="noopener noreferrer">
          Melanie Martinez - A Million Men
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Playlist
