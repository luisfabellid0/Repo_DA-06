import React from 'react';
import './AnimalCard.css';

const AnimalCard = ({ name, type, raza, age, imageUrl, adoptAnimal }) => {
  const handleAdoptClick = () => {
    adoptAnimal(name, type);
  };

  return (
    <div className="animal-card">
      <img src={imageUrl} alt={`${type}`} className="animal-image" />
      <h2>{name}</h2>
      <p>Tipo: {type}</p>
      <p>Raza: {raza}</p>
      <p>Edad: {age} años</p>
      <button onClick={handleAdoptClick}>Adoptar a {name}</button>
    </div>
  );
};

export default AnimalCard;
