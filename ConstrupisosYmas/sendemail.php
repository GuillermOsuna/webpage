<?php

$email_subject =  "Contacto desde construpisos y mas";
$Nombre = $_POST['nombre'];
$Correo = $_POST['email'];
$Asunto = $_POST['subject'];
$Mensaje = $_POST['message'];

$email_message =  "Detalles del formulario de contacto:\n\n";
$email_message .= "Nombre: " . "esteesunnombre" . "\n";
$email_message .= "E-mail: " . $_POST['email'] . "\n";
$email_message .= "Asunto: " . $_POST['subject'] . "\n";
$email_message .= "Mensaje: " . $_POST['message'] . "\n\n";


$header = 		"From: contacto@construpisosymas.com\r\n" . 
		  		"Reply-To: contacto@construpisosymas.com\r\n" .
 		  		"Return-path: contacto@construpisosymas.com\r\n" .
  		  		"MIME-Version: 1.0\n" .
  		  		"Content-type: text/plain; charset=iso-8859-1";

if(!isset($_POST['email']) ||
!isset($_POST['message'])) {

echo "<b>Ocurrió un error y el correo no ha sido enviado. </b><br />";
echo "Por favor, verifique los datos ingresados.<br />";
die();
}

echo("Su correo se ha enviado, nos comunicaremos pronto");
mail("sailemorena@gmail.com", $email_subject, $email_message, $header);


?>