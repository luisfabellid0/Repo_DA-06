import './App.css';
import React, { useState, useEffect } from 'react';

const CounterFunctional = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  useEffect(() => {
    console.log(`El contador ha cambiado: ${count}`);

    return () => {
      console.log('Limpiando efecto anterior');
    };
  }, [count]);

  return (
    <div>
      <h1>Contador: {count}</h1>
      <button onClick={increment}>Incrementar</button>
      <button onClick={decrement}>Decrementar</button>
    </div>
  );
};

export default CounterFunctional;