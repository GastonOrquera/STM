<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recibe los datos del formulario
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $mensaje = $_POST['mensaje'];

    // Configura el correo electrónico
    $destinatario = 'gastonorquera29@gmail.com'; // Reemplaza esto con tu dirección de correo electrónico
    $asunto = 'Mensaje de contacto desde el sitio web';

    // Crea el cuerpo del mensaje
    $cuerpoMensaje = "Nombre: $nombre\n";
    $cuerpoMensaje .= "Email: $email\n";
    $cuerpoMensaje .= "Mensaje:\n$mensaje\n";

    // Envía el correo electrónico
    mail($destinatario, $asunto, $cuerpoMensaje);

    // Redirige al usuario a una página de confirmación
    header('Location: confirmacion.html');
} else {
    // Si no es una solicitud POST, redirige a la página de contacto
    header('Location: contacto.html');
}
?>
