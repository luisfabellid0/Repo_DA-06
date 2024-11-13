const express = require('express');
const router = express.Router();
// Importar el router de cursos
const cursosRouter = require('./routers/cursos');
// Usar el router de cursos para las rutas que comienzan con /cursos
router.use('/cursos', cursosRouter);
// Ruta para la página principal
router.get('/', (req, res) => {
 res.send('¡Hola desde la página principal!');
});
// Ruta para /cursos
router.get('/cursos', (req, res) => {
    const tema = req.query.tema;
    res.send(`Estás viendo cursos sobre el tema: ${tema}`);
   });
// Ruta con parámetro de ruta
router.get('/cursos/:id', (req, res) => {
    const idCurso = req.params.id;
    res.send(`Estás viendo el curso con ID: ${idCurso}`);
   });
// Ruta con parámetros de consulta
module.exports = router;