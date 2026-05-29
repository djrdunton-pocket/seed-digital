import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  const { name, email, business_name, package: pkg, message } = await request.json();

  try {
    await resend.emails.send({
      from: 'Seed Digital <hello@seed-digital.ai>',
      to: 'hello@seed-digital.ai',
      replyTo: email,
      subject: `New enquiry from ${name}`,
      html: `
        <h2>New contact form submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Business:</strong> ${business_name || 'Not provided'}</p>
        <p><strong>Package:</strong> ${pkg || 'Not selected'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <hr />
        <p><a href="mailto:${email}">Reply to ${name}</a></p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Resend error:', error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}