import './App.css';
import React, { useState, useEffect } from 'react';

const ItemListFunctional = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  const handleChange = (event) => {
    setNewItem(event.target.value);
  };

  const addItem = () => {
    setItems([...items, newItem]);
    setNewItem('');
  };

  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  useEffect(() => {
    // Este efecto se ejecutará cada vez que `items` cambie
    console.log('La lista de ítems ha cambiado:', items);

    // Opcional: lógica de limpieza si es necesario
    return () => {
      console.log('Limpiando efecto anterior');
    };
  }, [items]); // Dependencia de `items`

  return (
    <div>
      <input
        type="text"
        value={newItem}
        onChange={handleChange}
        placeholder="Agregar nuevo ítem"
      />
      <button onClick={addItem}>Agregar</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item} <button onClick={() => removeItem(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemListFunctional;