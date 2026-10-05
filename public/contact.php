<?php

header('Content-Type: application/json; charset=UTF-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'message' => 'Método no permitido.'
    ]);
    exit;
}
/*
 * Verificación de Google reCAPTCHA v2.
 */
require_once __DIR__ . '/../recaptcha-config.php';

$recaptchaResponse = $_POST['g-recaptcha-response'] ?? '';

if ($recaptchaResponse === '') {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'Por favor, confirme que no es un robot.'
    ]);
    exit;
}

$verify = curl_init('https://www.google.com/recaptcha/api/siteverify');

curl_setopt_array($verify, [
    CURLOPT_POST => true,
    CURLOPT_POSTFIELDS => http_build_query([
        'secret' => $recaptchaSecret,
        'response' => $recaptchaResponse,
        'remoteip' => $_SERVER['REMOTE_ADDR'] ?? '',
    ]),
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_TIMEOUT => 10,
]);

$verifyResponse = curl_exec($verify);
$verifyError = curl_error($verify);

curl_close($verify);

if ($verifyResponse === false) {
    error_log('reCAPTCHA error: ' . $verifyError);

    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'No se pudo verificar el reCAPTCHA.'
    ]);
    exit;
}

$captchaResult = json_decode($verifyResponse, true);

if (empty($captchaResult['success'])) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'La verificación de reCAPTCHA no fue válida.'
    ]);
    exit;
}

/*
 * Honeypot anti-spam.
 * Los usuarios reales no deberían completar este campo.
 */
if (!empty($_POST['website'] ?? '')) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'Solicitud no válida.'
    ]);
    exit;
}

/*
 * Recibir y limpiar datos.
 */
$nombre = trim($_POST['nombre'] ?? '');
$apellido = trim($_POST['apellido'] ?? '');
$email = trim($_POST['email'] ?? '');
$empresa = trim($_POST['empresa'] ?? '');
$cargo = trim($_POST['cargo'] ?? '');
$mensaje = trim($_POST['mensaje'] ?? '');

/*
 * Validaciones.
 */
if (
    $nombre === '' ||
    $apellido === '' ||
    $email === '' ||
    $empresa === '' ||
    $mensaje === ''
) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'Por favor complete todos los campos obligatorios.'
    ]);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'El correo electrónico no es válido.'
    ]);
    exit;
}

if (mb_strlen($nombre) > 80 || mb_strlen($apellido) > 80) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'Los datos ingresados son demasiado largos.'
    ]);
    exit;
}

if (mb_strlen($empresa) > 150 || mb_strlen($cargo) > 100) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'Los datos ingresados son demasiado largos.'
    ]);
    exit;
}

if (mb_strlen($mensaje) < 20 || mb_strlen($mensaje) > 2000) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'El mensaje debe tener entre 20 y 2000 caracteres.'
    ]);
    exit;
}

/*
 * Evitar inyección de cabeceras.
 */
$email = str_replace(["\r", "\n"], '', $email);

/*
 * Configuración del correo.
 */
$destinatario = 'comercial@decatering.com.ar';

$asunto = 'Nuevo contacto desde decatering.com.ar';

$cuerpo = "Nuevo mensaje recibido desde el formulario de contacto.\n\n";
$cuerpo .= "Nombre: " . $nombre . "\n";
$cuerpo .= "Apellido: " . $apellido . "\n";
$cuerpo .= "Email: " . $email . "\n";
$cuerpo .= "Empresa: " . $empresa . "\n";
$cuerpo .= "Cargo: " . ($cargo !== '' ? $cargo : 'No informado') . "\n\n";
$cuerpo .= "Mensaje:\n";
$cuerpo .= $mensaje . "\n";

$headers = [];
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-Type: text/plain; charset=UTF-8';
$headers[] = 'From: DeCatering <comercial@decatering.com.ar>';
$headers[] = 'Reply-To: ' . $email;

/*
 * Enviar correo.
 */
$enviado = mail(
    $destinatario,
    $asunto,
    $cuerpo,
    implode("\r\n", $headers)
);

if (!$enviado) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'No se pudo enviar el mensaje.'
    ]);
    exit;
}

echo json_encode([
    'success' => true,
    'message' => 'Mensaje enviado correctamente.'
]);