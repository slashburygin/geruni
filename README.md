# Geruni landing page

Russian-language, responsive one-page site based on `docs/landing.docx`, built with vanilla JavaScript and Vite.

## Local development

```sh
npm install
npm run dev
```

Open the local URL printed by Vite (normally http://localhost:5173).

```sh
npm run build
npm run preview
```

The production output is in `dist/` and can be served by any static web host.

## Content and assets

The page includes an interactive schematic, keyboard/touch/wheel timeline, and a location link. The schematic is illustrative, not an engineering drawing. No backend is required.

The brief does not include licensed archival portraits, construction photographs, interviews, narration, ambient recordings, or a booking-bot URL. The current page uses a contemporary telescope photograph and a map link; it does not simulate recordings or bookings. Supply those assets to complete the corresponding media treatments. The proposed quotation is omitted pending attribution. Historical copy is adapted from the supplied brief; review it before publication.

Photo: Dminasyan, “Orgov Radio-Optical Telescope - 2.jpg”, Wikimedia Commons, CC BY-SA 4.0:
https://commons.wikimedia.org/wiki/File:Orgov_Radio-Optical_Telescope_-_2.jpg
https://creativecommons.org/licenses/by-sa/4.0/
CSS crops and recolors the photograph; adapted image treatments retain CC BY-SA 4.0. The repository code license does not replace the image license.

## Implementation reference

XERJ had no existing Geruni source results. The Vite `index.html` entry-point convention was checked against vitejs/vite, commit `cce559ab158cc6b177d0911a0bea73436b48faff`, `docs/guide/index.md:161–199` (MIT). That reference checkout is newer than the deployed Vite 7.3.8; only the stable HTML entry-point convention is used. The installed version is recorded in `package-lock.json`. No upstream source was copied.
