import React from 'react';
import AnimalCard from '../AnimalCard/AnimalCard';
import './AnimalList.css';

const AnimalList = () => {
  const dogs = [
    { name: 'Firulais', type: 'Perro', raza: 'Labrador Retriever', age: 4, imageUrl: `${process.env.PUBLIC_URL}/images/perro1.jpg` },
    { name: 'Rex', type: 'Perro', raza: 'Pastor Alemán', age: 2, imageUrl: `${process.env.PUBLIC_URL}/images/perro2.jpg` },
    { name: 'Luna', type: 'Perro', raza: 'Beagle', age: 3, imageUrl: `${process.env.PUBLIC_URL}/images/perro3.jpg` },
    { name: 'Max', type: 'Perro', raza: 'Bulldog Francés', age: 5, imageUrl: `${process.env.PUBLIC_URL}/images/perro4.jpg` },
    { name: 'Toby', type: 'Perro', raza: 'Golden Retriever', age: 1, imageUrl: `${process.env.PUBLIC_URL}/images/perro5.jpg` },
    { name: 'Rocky', type: 'Perro', raza: 'Pug', age: 6, imageUrl: `${process.env.PUBLIC_URL}/images/perro6.jpg` }
  ];

  const cats = [
    { name: 'Misu', type: 'Gato', raza: 'Siames', age: 2, imageUrl: `${process.env.PUBLIC_URL}/images/gato1.jpg` },
    { name: 'Nina', type: 'Gato', raza: 'Persa', age: 4, imageUrl: `${process.env.PUBLIC_URL}/images/gato2.jpg` },
    { name: 'Pelusa', type: 'Gato', raza: 'Bengala', age: 3, imageUrl: `${process.env.PUBLIC_URL}/images/gato3.jpg` },
    { name: 'Simba', type: 'Gato', raza: 'Siberiano', age: 5, imageUrl: `${process.env.PUBLIC_URL}/images/gato4.jpg` },
    { name: 'Milo', type: 'Gato', raza: 'Maine Coon', age: 1, imageUrl: `${process.env.PUBLIC_URL}/images/gato5.jpg` },
    { name: 'Tom', type: 'Gato', raza: 'Azul Ruso', age: 6, imageUrl: `${process.env.PUBLIC_URL}/images/gato6.jpg` }
  ];

  const rabbits = [
    { name: 'Bruno', type: 'Conejo', raza: 'Conejo Enano Holandés', age: 1, imageUrl: `${process.env.PUBLIC_URL}/images/conejo1.jpg` },
    { name: 'Nube', type: 'Conejo', raza: 'Conejo Cabeza de León', age: 3, imageUrl: `${process.env.PUBLIC_URL}/images/conejo2.jpg` },
    { name: 'Lola', type: 'Conejo', raza: 'Conejo Rex', age: 2, imageUrl: `${process.env.PUBLIC_URL}/images/conejo3.jpg` },
    { name: 'Copito', type: 'Conejo', raza: 'Conejo Lop', age: 4, imageUrl: `${process.env.PUBLIC_URL}/images/conejo4.jpg` },
    { name: 'Orejas', type: 'Conejo', raza: 'Conejo Angora', age: 1, imageUrl: `${process.env.PUBLIC_URL}/images/conejo5.jpg` },
    { name: 'Blanquita', type: 'Conejo', raza: 'Conejo Mini Lop', age: 5, imageUrl: `${process.env.PUBLIC_URL}/images/conejo6.jpg` }
  ];

  const adoptAnimal = (name) => {
    alert(`¡Has adoptado a ${name}!`);
  };

  return (
    <div className="animal-list">
      <div className="column">
        <h2>Perros</h2>
        {dogs.map((animal, index) => (
          <AnimalCard
            key={index}
            name={animal.name}
            type={animal.type}
            raza={animal.raza}
            age={animal.age}
            imageUrl={animal.imageUrl}
            adoptAnimal={adoptAnimal}
          />
        ))}
      </div>

      <div className="column">
        <h2>Gatos</h2>
        {cats.map((animal, index) => (
          <AnimalCard
            key={index}
            name={animal.name}
            type={animal.type}
            raza={animal.raza}
            age={animal.age}
            imageUrl={animal.imageUrl}
            adoptAnimal={adoptAnimal}
          />
        ))}
      </div>

      <div className="column">
        <h2>Conejos</h2>
        {rabbits.map((animal, index) => (
          <AnimalCard
            key={index}
            name={animal.name}
            type={animal.type}
            raza={animal.raza}
            age={animal.age}
            imageUrl={animal.imageUrl}
            adoptAnimal={adoptAnimal}
          />
        ))}
      </div>
    </div>
  );
};

export default AnimalList;
