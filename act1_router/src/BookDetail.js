import React from 'react';
import { useParams } from 'react-router-dom';

function BookDetail() {
  const { id } = useParams();
  const bookDetails = {
    1: { title: "Dune", description: "Una historia épica en el planeta desértico Arrakis." },
    2: { title: "El mesías de Dune", description: "La continuación de la saga Dune por Frank Herbert." },
  };

  const book = bookDetails[id];

  return (
    <div>
      <h1>{book?.title}</h1>
      <p>{book?.description}</p>
      <h2>Comentarios</h2>
      <form>
        <textarea placeholder="Deja tu comentario aquí"></textarea>
        <br />
        <button type="submit">Enviar comentario</button>
      </form>
    </div>
  );
}

export default BookDetail;