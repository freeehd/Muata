import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import dotenv from 'dotenv';
import express, { type Request, type Response } from 'express';
import { parseContactSubmission, sendContactSubmission } from '../lib/contact-mail.ts';

dotenv.config({ path: '.env.local' });
dotenv.config({ path: '.env' });

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distPath = path.resolve(__dirname, '..', 'dist');

const port = Number(process.env.PORT?.trim() || '3001');

const app = express();

app.use(express.json({ limit: '25kb' }));

app.post('/api/contact', async (req: Request, res: Response) => {
  const parsed = parseContactSubmission(req.body);

  if ('error' in parsed) {
    return res.status(400).json({ error: parsed.error });
  }

  const result = await sendContactSubmission(process.env, parsed.submission);
  return res.status(200).json(result);
});

app.use('/api', (_req, res) => {
  res.status(404).json({ error: 'Not found.' });
});

if (fs.existsSync(distPath)) {
  app.use(express.static(distPath));
  app.get('*', (req, res, next) => {
    if (req.path.startsWith('/api/')) {
      next();
      return;
    }

    res.sendFile(path.join(distPath, 'index.html'));
  });
}

async function start() {
  app.listen(port, '0.0.0.0', () => {
    console.log(`Mail server running on http://127.0.0.1:${port}`);
  });
}

start().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
