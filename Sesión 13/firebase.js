// firebase.js
const admin = require('firebase-admin');

// Inicializar la aplicación con la credencial del archivo JSON que descargaste de Firebase
admin.initializeApp({
  credential: admin.credential.cert(require('./chirol.json')),
  storageBucket: 'https://chirol-1e968-default-rtdb.firebaseio.com/',
});

const db = admin.firestore();
const bucket = admin.storage().bucket();

module.exports = { db, bucket };