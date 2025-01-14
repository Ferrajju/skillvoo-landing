import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  const { email } = await request.json()

  // Configura el transporter de nodemailer
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // Use TLS
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  try {
    // Envía el correo
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "tu_correo@example.com", // Reemplaza con tu correo
      subject: "Nueva suscripción a la lista de espera de SkillVoo",
      text: `Nuevo suscriptor: ${email}`,
      html: `<p>Nuevo suscriptor a la lista de espera de SkillVoo: <strong>${email}</strong></p>`,
    })

    return NextResponse.json({ message: "Email añadido a la lista de espera con éxito" })
  } catch (error) {
    console.error("Error al enviar el correo:", error)
    return NextResponse.json({ message: "Error al procesar la solicitud" }, { status: 500 })
  }
}