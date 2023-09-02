<?php

$name = $_POST["name"];
$from = $_POST["email"];
$subject = "Wiadomość z formularza na stronie teaching-is-fun.pl";
$to = "borzym.a@gmail.com";
$message = $_POST["msg"];

$txt = "Imię: " . $name . "\r\n" . "Email: " . $from . "\r\n" . "\r\n" . "Treść: " . "\r\n" . $message;

$headers = "From:  " . $from . "\r\n";
$headers .= "Reply-To: " .$from . "\r\n";

$mail_status = mail($to, $subject, $txt, $headers);

if($mail_status) {
    header("Location: /contact.html?message_status=sent");
} else {
    header("Location: /contact.html?message_status=error");
} 
?>