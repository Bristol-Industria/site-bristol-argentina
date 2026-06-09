import { NextRequest, NextResponse } from 'next/server';

interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export async function POST(req: NextRequest) {
  let body: ContactPayload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const { name, email, message } = body;
  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 422 });
  }

  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRe.test(email)) {
    return NextResponse.json({ error: 'Invalid email' }, { status: 422 });
  }

  // ── WordPress CF7 API submission ─────────────────────────────────────────
  // If you prefer to keep Contact Form 7 in WordPress as the backend,
  // uncomment the block below and set WP_CF7_FORM_ID in .env.local.
  //
  // const wpUrl = process.env.NEXT_PUBLIC_WP_API_URL;
  // const formId = process.env.WP_CF7_FORM_ID;
  // if (wpUrl && formId) {
  //   const fd = new FormData();
  //   fd.append('your-name', name);
  //   fd.append('your-email', email);
  //   fd.append('your-phone', body.phone ?? '');
  //   fd.append('your-message', message);
  //   const cf7Res = await fetch(`${wpUrl}/wp-json/contact-form-7/v1/contact-forms/${formId}/feedback`, {
  //     method: 'POST', body: fd,
  //   });
  //   const cf7Json = await cf7Res.json();
  //   if (cf7Json.status !== 'mail_sent') {
  //     return NextResponse.json({ error: 'CF7 delivery failed' }, { status: 502 });
  //   }
  //   return NextResponse.json({ ok: true });
  // }

  // ── Nodemailer SMTP fallback ──────────────────────────────────────────────
  // Install: npm i nodemailer @types/nodemailer
  // Then uncomment and configure:
  //
  // const nodemailer = (await import('nodemailer')).default;
  // const transporter = nodemailer.createTransport({
  //   host: process.env.SMTP_HOST,
  //   port: Number(process.env.SMTP_PORT ?? 587),
  //   auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  // });
  // await transporter.sendMail({
  //   from: `"${name}" <${process.env.SMTP_USER}>`,
  //   replyTo: email,
  //   to: process.env.CONTACT_TO_EMAIL ?? 'ventas@bristolbr.com.ar',
  //   subject: `[Bristol] Nuevo mensaje de ${name}`,
  //   text: `Nombre: ${name}\nEmail: ${email}\nTeléfono: ${body.phone ?? '-'}\n\n${message}`,
  // });

  // ── Console log for development ───────────────────────────────────────────
  console.log('[contact]', { name, email, phone: body.phone, message });

  return NextResponse.json({ ok: true });
}
