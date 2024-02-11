<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recibe los datos del formulario
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $mensaje = $_POST['mensaje'];

    // Configura el correo electrónico
    $destinatario = "$email"; // Reemplaza esto con tu dirección de correo electrónico
    $asunto = 'Servicio técnico';

    // Crea el cuerpo del mensaje
    $cuerpoMensaje = "Nombre: $nombre\n";
    $cuerpoMensaje .= "Email: $email\n";
    $cuerpoMensaje .= "Mensaje:\n$mensaje\n";

    // Envía el correo electrónico
    mail($destinatario, $asunto, $cuerpoMensaje);

    // Redirige al usuario a una página de confirmación
    header('Location: confirmacion.html');
} 
?>
