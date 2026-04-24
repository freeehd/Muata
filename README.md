<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/951c40d6-b06c-4117-a2ef-a4157519de63

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Add these email vars to [.env.local](.env.local): `CONTACT_MAIL_MODE`, `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, `SMTP_PASS`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`, `CONTACT_FROM_NAME`
4. Run the app:
   `npm run dev`

## Email setup

The contact form posts to `/api/contact`. In development, Vite proxies that request to the Express mail server on port `3001`.

Set `CONTACT_MAIL_MODE=development` to capture messages locally. Set `CONTACT_MAIL_MODE=smtp` plus the SMTP vars to send real emails. `CONTACT_TO_EMAIL` is the inbox that should receive submissions; replies use the visitor's email as `replyTo`.

## Vercel

The app is Vercel-ready with `api/contact.ts` for the mail handler and `vercel.json` for SPA routing. Add the same SMTP env vars in your Vercel project settings; `.env.local` is only for local development.
# Muata
