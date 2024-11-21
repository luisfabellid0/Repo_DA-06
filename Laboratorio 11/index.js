var express = require('express');
var app = express();
var mysql = require('mysql2');
var bodyParser = require('body-parser');

var connection = mysql.createConnection({
    host : 'localhost',
    database: 'barbershop',
    user: 'root',
    password: 'root123456789',
});

connection.connect(function(err) {
    if (err) throw err;
    console.log('Se conectó a la BD');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// Crear Servidor
var server = app.listen(3000, "127.0.0.1", function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log(`Servidor corriendo en http://${host}:${port}`);
});

// API que traerá todos los BOOKS
app.get('/books', function(req, res) {
    connection.query('SELECT * FROM books', function(error, results) {
        if (error) throw error;
        res.end(JSON.stringify(results));
    });
});


//Api que me traera los libros por ID

app.get('/books/:id', function(req,res){
    connection.query('select * from books where id=?', [req.params.id], function(error,results){
        if (error) throw error;
        res.end(JSON.stringify(results))
    });
});
