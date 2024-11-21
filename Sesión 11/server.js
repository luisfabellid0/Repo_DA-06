const express = require('express');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(express.json());

// Middleware para verificar el token
const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) return res.sendStatus(401); // No hay token

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.sendStatus(403); // Token no válido
        req.user = user;
        next();
    });
};

// Endpoint para iniciar sesión y generar un token
app.post('/login', (req, res) => {
    const { username } = req.body;

    // Aquí podrías validar el usuario contra una base de datos
    if (username) {
        const user = { name: username };
        const token = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });
        return res.json({ token });
    }

    res.status(400).send('Username is required');
});

// Endpoint protegido 1
app.get('/protected1', authenticateToken, (req, res) => {
    res.json({ message: 'Este es el contenido protegido 1', user: req.user });
});

// Endpoint protegido 2
app.get('/protected2', authenticateToken, (req, res) => {
    res.json({ message: 'Este es el contenido protegido 2', user: req.user });
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});