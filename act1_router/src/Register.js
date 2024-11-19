import React from 'react';
import './Register.css';

function Register() {
  return (
    <div className="register-container">
      <h1>Registrar cuenta</h1>
      <form className="register-form">
        <label>Nombre de usuario:</label>
        <input type="text" placeholder="Escribe tu nombre" required />
        <br />
        <label>Correo electrónico:</label>
        <input type="email" placeholder="Correo electrónico" required />
        <br />
        <label>Contraseña:</label>
        <input type="password" placeholder="Contraseña" required />
        <br />
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
}

export default Register;
