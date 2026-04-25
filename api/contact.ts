import type { IncomingMessage, ServerResponse } from 'node:http';

import { parseContactSubmission, sendContactSubmission } from '../lib/contact-mail.ts';

type ApiRequest = IncomingMessage & {
  method?: string;
  body?: unknown;
};

type ApiResponse = ServerResponse & {
  status: (code: number) => ApiResponse;
  json: (body: unknown) => void;
};

const sendJson = (res: ApiResponse, code: number, body: unknown) => {
  res.status(code);
  res.json(body);
};

export default async function handler(req: ApiRequest, res: ApiResponse) {
  if (req.method !== 'POST') {
    return sendJson(res, 405, { error: 'Method not allowed.' });
  }

  const parsed = parseContactSubmission(req.body);

  if ('error' in parsed) {
    return sendJson(res, 400, { error: parsed.error });
  }

  try {
    const result = await sendContactSubmission(process.env, parsed.submission);
    return sendJson(res, 200, result);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to send message.';
    const stack = error instanceof Error ? error.stack : '';
    console.error('Contact form error:', message, stack);
    return sendJson(res, 500, { error: message });
  }
}
