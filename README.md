# LUTEGUARD-B™ Website

Brand homepage in Next.js with the existing Streamlit Blue Light Archive embedded only on `/archive`.

## Local run

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Streamlit URL

Create `.env.local`:

```text
NEXT_PUBLIC_STREAMLIT_URL=https://YOUR-APP.streamlit.app
```

If omitted, the starter defaults to:

```text
https://blue-light-archive.streamlit.app
```

## Main routes

- `/` brand homepage
- `/archive` embedded Streamlit archive
- `/our-story`
- `/luteguard-b`
- `/contact`

## Deploy

Import this repository into Vercel. Add `NEXT_PUBLIC_STREAMLIT_URL` in Vercel Project Settings > Environment Variables, then redeploy.

After deployment, add your custom domain in Vercel Project Settings > Domains.

## Images

See `public/images/README.md`.
