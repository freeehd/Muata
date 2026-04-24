import nodemailer, { type Transporter } from 'nodemailer';

export type ContactSubmission = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type ContactMailer = {
  transporter: Transporter;
  mode: 'smtp' | 'development';
  fromEmail: string;
  fromName: string;
  toEmail: string;
  subjectPrefix: string;
};

const normalizeText = (value: unknown) => (typeof value === 'string' ? value.trim() : '');

export const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

export const escapeHtml = (value: string) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');

export const parseContactSubmission = (body: unknown) => {
  const source = (body ?? {}) as Partial<Record<keyof ContactSubmission, unknown>>;
  const submission: ContactSubmission = {
    name: normalizeText(source.name),
    email: normalizeText(source.email),
    subject: normalizeText(source.subject),
    message: normalizeText(source.message),
  };

  if (!submission.name || !submission.email || !submission.subject || !submission.message) {
    return { error: 'All fields are required.' } as const;
  }

  if (!isValidEmail(submission.email)) {
    return { error: 'Enter a valid email address.' } as const;
  }

  return { submission } as const;
};

const readEnv = (env: NodeJS.ProcessEnv, name: string) => env[name]?.trim() || '';

const requiredSmtpEnvVars = ['SMTP_HOST', 'SMTP_USER', 'SMTP_PASS', 'CONTACT_TO_EMAIL'] as const;
const readMailMode = (env: NodeJS.ProcessEnv) => readEnv(env, 'CONTACT_MAIL_MODE').toLowerCase();

const getMissingEnvVars = (env: NodeJS.ProcessEnv) =>
  requiredSmtpEnvVars.filter((name) => !readEnv(env, name));

const isProductionEnv = (env: NodeJS.ProcessEnv) =>
  readEnv(env, 'NODE_ENV') === 'production' || readEnv(env, 'VERCEL_ENV') === 'production';

export const createContactMailer = (env: NodeJS.ProcessEnv = process.env): ContactMailer => {
  const fromName = readEnv(env, 'CONTACT_FROM_NAME') || 'Muata Portfolio';
  const subjectPrefix = readEnv(env, 'CONTACT_SUBJECT_PREFIX') || '[Muata Portfolio]';
  const smtpSecure = readEnv(env, 'SMTP_SECURE').toLowerCase() === 'true';
  const toEmail = readEnv(env, 'CONTACT_TO_EMAIL');
  const mailMode = readMailMode(env);
  const missingEnvVars = getMissingEnvVars(env);

  if (mailMode === 'smtp') {
    if (missingEnvVars.length > 0) {
      throw new Error(`Missing SMTP env vars: ${missingEnvVars.join(', ')}.`);
    }

    const smtpHost = readEnv(env, 'SMTP_HOST');
    const smtpPort = Number(readEnv(env, 'SMTP_PORT') || '587');
    const smtpUser = readEnv(env, 'SMTP_USER');
    const smtpPass = readEnv(env, 'SMTP_PASS');
    const fromEmail = readEnv(env, 'CONTACT_FROM_EMAIL') || smtpUser;

    if (!Number.isInteger(smtpPort) || smtpPort <= 0) {
      throw new Error('SMTP_PORT must be a positive integer');
    }

    return {
      transporter: nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpSecure,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      }),
      mode: 'smtp',
      fromEmail,
      fromName,
      toEmail,
      subjectPrefix,
    };
  }

  if (isProductionEnv(env) && mailMode !== 'development') {
    throw new Error('Set CONTACT_MAIL_MODE=smtp and provide SMTP env vars in production.');
  }

  return {
    transporter: nodemailer.createTransport({
      streamTransport: true,
      buffer: true,
      newline: 'unix',
    }),
    mode: 'development',
    fromEmail: readEnv(env, 'CONTACT_FROM_EMAIL') || 'no-reply@example.com',
    fromName,
    toEmail: toEmail || 'local-preview@example.com',
    subjectPrefix,
  };
};

export const buildMailOptions = (mailer: ContactMailer, submission: ContactSubmission) => ({
  from: `${mailer.fromName} <${mailer.fromEmail}>`,
  to: mailer.toEmail,
  replyTo: submission.email,
  subject: `${mailer.subjectPrefix} ${submission.subject}`,
  text: [
    `Name: ${submission.name}`,
    `Email: ${submission.email}`,
    `Subject: ${submission.subject}`,
    '',
    submission.message,
  ].join('\n'),
  html: `
    <h2>New contact form submission</h2>
    <p><strong>Name:</strong> ${escapeHtml(submission.name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(submission.email)}</p>
    <p><strong>Subject:</strong> ${escapeHtml(submission.subject)}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(submission.message).replaceAll('\n', '<br />')}</p>
  `,
});

export const sendContactSubmission = async (env: NodeJS.ProcessEnv, submission: ContactSubmission) => {
  const mailer = createContactMailer(env);
  const info = await mailer.transporter.sendMail(buildMailOptions(mailer, submission));

  if (mailer.mode === 'development') {
    console.log(info.message.toString());
  }

  return {
    message:
      mailer.mode === 'development'
        ? 'Development mode: message captured locally. Set CONTACT_MAIL_MODE=smtp and add SMTP env vars to send real emails.'
        : 'Message sent successfully.',
  };
};
