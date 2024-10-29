<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $nombre = $_POST['nombre'];
    $direccion = $_POST['direccion'];
    $correo = $_POST['correo'];
    $contrasena = $_POST['contrasena'];
    $fecha_nacimiento = $_POST['fecha_nacimiento'];
    $sexo = $_POST['sexo'];
    $ciudad = $_POST['ciudad'];

    $ciudad_precios = [
        "Nueva York" => 500,
        "Madrid" => 400,
        "Buenos Aires" => 300
    ];
    
    $precio_base = $ciudad_precios[$ciudad];
    
    $edad = (new DateTime())->diff(new DateTime($fecha_nacimiento))->y;

    if ($edad < 2) {
        $precio = 0;
    } elseif ($edad < 18) {
        $precio = $precio_base * 0.75;
    } else {
        $precio = $precio_base;
    }

    echo "<h1>Confirmación de Registro</h1>";
    echo "<p>Nombre: $nombre</p>";
    echo "<p>Dirección: $direccion</p>";
    echo "<p>Correo: $correo</p>";
    echo "<p>Fecha de nacimiento: $fecha_nacimiento</p>";
    echo "<p>Sexo: $sexo</p>";
    echo "<p>Ciudad a viajar: $ciudad</p>";
    echo "<p>Precio del pasaje: $$precio</p>";

    echo "<form action='guardar.php' method='POST'>
            <input type='hidden' name='nombre' value='$nombre'>
            <input type='hidden' name='direccion' value='$direccion'>
            <input type='hidden' name='correo' value='$correo'>
            <input type='hidden' name='contrasena' value='$contrasena'>
            <input type='hidden' name='fecha_nacimiento' value='$fecha_nacimiento'>
            <input type='hidden' name='sexo' value='$sexo'>
            <input type='hidden' name='ciudad' value='$ciudad'>
            <input type='hidden' name='precio' value='$precio'>
            <button type='submit'>Confirmar Registro</button>
          </form>";
}
?>