// server.js
const express = require('express');
const multer = require('multer');
const path = require('path');
const { db, bucket } = require('./firebase'); // Importamos Firebase

const app = express();
const port = 3000;

// Middleware para procesar JSON
app.use(express.json());

// Configuración de Multer para manejar archivos
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Ruta para almacenar datos en Firestore
app.post('/addData', async (req, res) => {
  try {
    const { collection, data } = req.body;
    if (!collection || !data) {
      return res.status(400).json({ message: 'Faltan datos necesarios.' });
    }
    
    // Guardar datos en la colección de Firestore
    const ref = db.collection(collection);
    await ref.add(data);

    res.status(200).json({ message: 'Datos almacenados correctamente.' });
  } catch (error) {
    res.status(500).json({ message: 'Error al almacenar los datos.', error });
  }
});

// Ruta para subir archivos a Firebase Storage
app.post('/uploadFile', upload.single('file'), async (req, res) => {
  try {
    const file = req.file;
    if (!file) {
      return res.status(400).json({ message: 'No se ha subido ningún archivo.' });
    }

    // Subir el archivo a Firebase Storage
    const fileName = Date.now() + path.extname(file.originalname);
    const fileUpload = bucket.file(fileName);
    
    const stream = fileUpload.createWriteStream({
      metadata: {
        contentType: file.mimetype,
      },
    });

    stream.on('error', (err) => {
      console.log('Error al subir el archivo:', err);
      res.status(500).json({ message: 'Error al subir el archivo.', error: err });
    });

    stream.on('finish', async () => {
      // Obtener la URL del archivo subido
      const fileUrl = `https://storage.googleapis.com/${bucket.name}/${fileName}`;
      res.status(200).json({ message: 'Archivo subido exitosamente', fileUrl });
    });

    stream.end(file.buffer);
  } catch (error) {
    res.status(500).json({ message: 'Error al subir el archivo.', error });
  }
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});