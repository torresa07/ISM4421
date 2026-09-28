# ISM4421 — Suno Studio

A one-page web app for generating AI music with the [Suno API](https://docs.sunoapi.org).

## Features

- **Bring your own API key.** Paste it when the page opens. It is held in memory only: not saved to storage, cookies, or the server, and gone when the tab reloads.
- **Credit balance** shown once you connect.
- **Simple mode:** describe a song and Suno writes the lyrics.
- **Custom mode:** set the title, style, and your own lyrics, with an **AI lyrics helper**.
- **Instrumental** toggle, **model picker** (V3.5 to V5), excluded styles, and vocal gender.
- **Live progress:** streaming previews play while the song renders, then switch to the final MP3.
- Per-track **download**, cover art, lyrics view, and copy link.

## Deploying to Netlify

1. In Netlify, choose **Add new site → Import an existing project** and pick this repo.
2. Leave the build command empty. The publish directory is `.` (already set in `netlify.toml`).
3. Deploy. No environment variables are needed, because each user supplies their own key.

`netlify.toml` proxies `/api/suno/*` to `https://api.sunoapi.org/api/v1/*`, so the browser never runs into CORS. The key travels only in the `Authorization` header of each request. Suno requires a `callBackUrl`, so `netlify/functions/callback.js` just acknowledges it. The app polls for results instead.

## Running locally

```bash
npx netlify-cli dev
```

Then open the URL it prints. You can also open `index.html` directly, and it will call the API host directly.
