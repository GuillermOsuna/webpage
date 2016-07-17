<?php
	$destino="gosuna79@gmail.com"
	$nombre= $_POST["nombre"];
	$correo= $_POST["correo"];
	$asunto= $_POST["asunto"];
	$mensaje= $_POST["mensaje"];

	$contenido="Nombre: " . $nombre . "\nCorreo: ". $correo . "\nTeléfono" . $telefono . "\nMensaje: " . $mensaje;

	mail($destino, $asunto, $contenido);
	header("Location: gracias.html");

?>