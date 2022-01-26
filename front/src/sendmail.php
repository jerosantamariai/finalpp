<?php
$mail = $_POST['email'];
$nombre = $_POST['name'];
$comentarios = $_POST['comments'];

$header = 'From: ' . $mail . " \r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$mensaje = "Este mensaje fue enviado por " . $nombre . ",\r\n";
$mensaje .= "Su e-mail es: " . $mail . " \r\n";
$mensaje .= "Mensaje: " . $_POST['comments'] . " \r\n";
$mensaje .= "Enviado el " . date('d/m/Y', time());

$para = 'jerosantamariai@gmail.com';
$asunto = 'Mensaje desde protegepyme.com';

mail($para, $asunto, utf8_decode($mensaje), $header);

header("Location:/correoenviado");
?>