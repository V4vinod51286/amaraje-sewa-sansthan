# Amaraje Seva Sansthan — responsive website starter

A bilingual (English/Hindi), responsive static website for the proposed Greater Noida food-rescue and gaushala-support initiative.

## Files

- `index.html` — page content and sections
- `styles.css` — responsive layout, colour palette and typography
- `script.js` — mobile navigation, language toggle and contact form behaviour
- `assets/amaraje-emblem.png` — symbolic logo illustration crop

## Run locally

The site uses no build system or npm dependencies. Open `index.html` in a browser. For a local web server, from this folder run:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Before publishing

1. Replace `ADD-OFFICIAL-EMAIL@example.com` in `script.js` with the trust's official contact email. Until then, the contact form intentionally does not send/store personal details.
2. Add an official phone number and any confirmed address in `index.html`.
3. Only publish verified impact figures, partner gaushala names and donation/payment details.
4. Do not claim the trust is registered or donations are tax-deductible until the relevant registration/approval is actually complete.
5. Check that the logo crop and Hindi text look correct on the target devices.

## Publish

This is a static site and can be hosted on GitHub Pages, Netlify, Cloudflare Pages or any standard web host. Upload the contents of this folder (not just the ZIP) as the site root. No backend is configured.

## Brand palette

- Forest green: `#14583D`
- Deep green: `#0B3D2B`
- Saffron: `#F4A62A`
- Warm cream: `#FFF9EE`
- Earth brown: `#7D4A2C`

## Important

The donation call-to-action is informational only. The site does not process payments, store form submissions, or claim that the proposed organisation has completed registration or tax approvals.
