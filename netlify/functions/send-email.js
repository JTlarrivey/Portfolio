// netlify/functions/send-email.js
import { createTransport } from 'nodemailer';

export async function handler(event) {
  const { name, email, message } = JSON.parse(event.body);

  // Configuración del transportador de Nodemailer
  let transporter = createTransport({
    service: 'gmail', // o el servicio que estés usando
    auth: {
      user: process.env.EMAIL_USER, // tu correo
      pass: process.env.EMAIL_PASS, // tu contraseña o token de aplicación
    },
  });

  // Configuración del correo
  let mailOptions = {
    from: email,
    to: process.env.EMAIL_RECEIVER, // destinatario
    subject: `Nuevo mensaje de ${name}`,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Correo enviado correctamente' }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Error al enviar el correo' }),
    };
  }
}
