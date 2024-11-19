import React from 'react';
import { useParams } from 'react-router-dom';

function MangaDetail() {
  const { id } = useParams();
  const mangas = {
    1: { title: "Attack on Titan", description: "La historia de la lucha contra los titanes." },
    2: { title: "My Hero Academia", description: "Un mundo donde todos tienen superpoderes, excepto el protagonista." },
  };

  const manga = mangas[id];

  return (
    <div>
      <h1>{manga?.title}</h1>
      <p>{manga?.description}</p>
      <h2>Comentarios</h2>
      <form>
        <textarea placeholder="Deja tu comentario aquí"></textarea>
        <br />
        <button type="submit">Enviar comentario</button>
      </form>
    </div>
  );
}

export default MangaDetail;
