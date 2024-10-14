import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const books = [
    { id: 1, title: "Dune", author: "Frank Herbert", img: "dune.jpg" },
    { id: 2, title: "El mesías de Dune", author: "Frank Herbert", img: "Dune2.jpg" },
    { id: 3, title: "Los juegos del hambre", author: "Suzanne Collins", img: "losjuegosdelhambre.jpg" },
    { id: 4, title: "Balada de pájaros cantores y serpientes", author: "Suzanne Collins", img: "balada.jpg" },
    { id: 5, title: "Harry Potter y la piedra filosofal", author: "J.K. Rowling", img: "HPLapiedrafilosofal.jpg" },
    { id: 6, title: "Harry Potter y las reliquias de la muerte", img: "HPLasreliquiasdelamuerte.jpg" },
    { id: 7, title: "Fuego y Sangre", author: "R.R. Martin", img: "fuegoysangre.jpg" },
    { id: 8, title: "Juego de Tronos", author: "R.R. Martin", img: "juegodetronos.jpg" },
    { id: 9, title: "Festín de cuervos", author: "R.R. Martin", img: "festindecuervos.jpg" },
    { id: 10, title: "Divergente", author: "Veronica Roth", img: "divergente.jpg" },
    { id: 11, title: "Maze Runner: Correr o morir", author: "James Dashner", img: "mazerunner.jpg" }
  ];

  const mangas = [
    { id: 1, title: "Attack on Titan", author: "Hajime Isayama", img: "Attak on titan.jpg" },
    { id: 2, title: "My Hero Academia", author: "Kohei Horikoshi", img: "boku no hero.jpg" },
    { id: 3, title: "Link Click", author: "Bilibili/Bedream", img: "link click.jpeg" },
    { id: 4, title: "Death Note", author: "Tsugumi Ohba", img: "deathnote.jpg" },
    { id: 5, title: "Jujutsu Kaisen", author: "Gege Akutami", img: "Jujutsu_Kaisen14.jpg" }
  ];

  return (
    <div>
      <h1>Tienda de Libros</h1>
      <div className="book-list">
        {books.map(book => (
          <div key={book.id} className="book-item">
            <img src={`/imagenes/${book.img}`} alt={book.title} />
            <h2>{book.title}</h2>
            <p>{book.author}</p>
            <Link to={`/book/${book.id}`}>Ver detalles</Link>
          </div>
        ))}
      </div>

      <h1>Sección de Mangas</h1>
      <div className="book-list">
        {mangas.map(manga => (
          <div key={manga.id} className="book-item">
            <img src={`/imagenes/${manga.img}`} alt={manga.title} />
            <h2>{manga.title}</h2>
            <p>{manga.author}</p>
            <Link to={`/manga/${manga.id}`}>Ver detalles</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
