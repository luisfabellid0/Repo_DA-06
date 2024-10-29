<?php
$host = 'localhost';
$db = 'viajes';
$user = 'root';
$pass = '';
$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $nombre = $_POST['nombre'];
    $direccion = $_POST['direccion'];
    $correo = $_POST['correo'];
    $contrasena = password_hash($_POST['contrasena'], PASSWORD_DEFAULT);
    $fecha_nacimiento = $_POST['fecha_nacimiento'];
    $sexo = $_POST['sexo'];
    $ciudad = $_POST['ciudad'];
    $precio = $_POST['precio'];

    $sql = "INSERT INTO usuarios (nombre, direccion, correo, contrasena, fecha_nacimiento, sexo, ciudad, precio)
            VALUES ('$nombre', '$direccion', '$correo', '$contrasena', '$fecha_nacimiento', '$sexo', '$ciudad', '$precio')";

    if ($conn->query($sql) === TRUE) {
        echo "Registro exitoso.";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

$conn->close();
?>