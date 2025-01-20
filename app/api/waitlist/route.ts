import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: Request) {
  const { email, name } = await request.json()

  // Configure nodemailer transporter
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  try {
    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // You'll receive it yourself
      subject: "New SkillVoo Waitlist Subscription",
      text: `New subscriber: ${name} (${email})`,
      html: `<p>New subscriber to SkillVoo waitlist: <strong>${name}</strong> (${email})</p>`,
    })

    return NextResponse.json({ message: "Successfully added to the waitlist" })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ message: "Error processing the request" }, { status: 500 })
  }
}

