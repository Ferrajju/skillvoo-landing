import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { message: "Correo inválido." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "Nueva suscripción a la lista de espera de SkillVoo",
      text: `Nuevo suscriptor: ${email}`,
      html: `<p>Nuevo suscriptor a la lista de espera de SkillVoo: <strong>${email}</strong></p>`,
    });

    return NextResponse.json({
      message: "Email añadido a la lista de espera con éxito",
    });
  } catch (error) {
    console.error("Error al procesar la solicitud:", error);
    return NextResponse.json(
      { message: "Error al procesar la solicitud" },
      { status: 500 }
    );
  }
}
