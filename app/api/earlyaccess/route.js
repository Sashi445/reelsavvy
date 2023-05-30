import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { render } from "@react-email/render";
import { Email } from "@/app/components/Email";
import { Resend } from "resend";

async function sendEmail(email) {
  

  const emailHtml = render(<Email url={"google.com"} />);

  try {
    // do backend communication as well to store emails
    // const res = await transporter.sendMail(options);
    const resend = new Resend(process.env.RESEND_API_KEY);

    const res = await resend.emails.send({
      from: 'sashidhar652@gmail.com',
      to: email,
      subject: "Re: Early access to Reel Savvy",
      html: emailHtml
    });

    console.log(res);
  } catch (error) {
    console.log(error.message);
  }
}

export function GET(req) {
  console.log(req.json());
  return NextResponse.json({ message: "Hello, there" });
}

export async function POST(req) {
  try {
    const body = await req.json();
    const data = await sendEmail(body.email);
    return NextResponse.json({ body });
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({ message: error.message });
  }
}
