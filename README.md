# Ritexo Technologies — Website

Modern, responsive corporate website for **Ritexo Technologies**.
_Connecting Talent. Delivering Technology._

Built with **React + Vite + Tailwind CSS + React Router + Lucide React**.

---

## Quick start

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server (opens http://localhost:5173)
npm run dev

# 3. Production build
npm run build

# 4. Preview the production build locally
npm run preview
```

Requires Node.js 18+.

---

## Project structure

```
ritexo-website/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── public/
│   └── assets/
│       ├── favicon.svg
│       ├── README.txt            # how to add the logo
│       └── ritexo-logo.png       # <-- ADD THE OFFICIAL LOGO HERE
└── src/
    ├── main.jsx
    ├── App.jsx                   # routes
    ├── index.css                 # Tailwind + design tokens
    ├── data/
    │   └── websiteContent.js     # SINGLE SOURCE OF TRUTH for all content
    ├── components/
    │   ├── Navbar.jsx            # sticky nav, dropdowns, mega-menu, mobile
    │   ├── Footer.jsx
    │   ├── DropdownMenu.jsx      # (dropdown logic lives in Navbar)
    │   ├── Logo.jsx              # logo with auto placeholder fallback
    │   ├── Icon.jsx             # string -> lucide icon registry
    │   ├── Reveal.jsx           # scroll-reveal animation wrapper
    │   ├── ScrollManager.jsx    # scroll-to-top / hash handling
    │   ├── SectionHeading.jsx
    │   ├── CardGrid.jsx
    │   ├── PageHeader.jsx
    │   ├── DetailView.jsx       # generic detail page (services/solutions/...)
    │   └── CTASection.jsx
    └── pages/
        ├── Home.jsx
        ├── About.jsx            # #vision #mission #values anchors
        ├── Services.jsx         # overview + /services/:slug detail
        ├── Solutions.jsx        # overview + /solutions/:slug detail
        ├── Industries.jsx       # overview + /industries/:slug detail
        ├── Careers.jsx
        ├── Resources.jsx        # overview + /resources/:slug detail
        ├── Contact.jsx          # validated form (no backend yet)
        └── NotFound.jsx
```

---

## Replacing the logo

1. Save the official logo as `public/assets/ritexo-logo.png`.
2. Refresh — it appears in the header and footer automatically.

Until the file exists, a branded "R" monogram placeholder is shown.
To use a different filename/format (e.g. SVG), change `brand.logo` in
`src/data/websiteContent.js`.

---

## Replacing placeholder content

All text, navigation, services, solutions, industries, resources and
contact details live in **`src/data/websiteContent.js`**. Edit that file
to update the site — no design/component changes required.

Example — add a real service description:

```js
export const services = [
  {
    slug: 'technology-consulting',
    title: 'Technology Consulting',
    icon: 'Lightbulb',
    description: 'Your real description here.', // was placeholder
  },
  // ...
]
```

Placeholder strings are centralized in the `PLACEHOLDER` object at the top
of the same file.

---

## Connecting the contact form to a backend

The form (`src/pages/Contact.jsx`) validates on the frontend and logs the
payload. To receive submissions, replace the `BACKEND HOOK` block in
`handleSubmit` with a real call, e.g.:

```js
await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(form),
})
```

---

## Notes

- No fake clients, stats, testimonials, job listings, or certifications are
  included — placeholder copy ("Content coming soon.") is used where real
  content is not yet available.
- Fully responsive (desktop / laptop / tablet / phone), no horizontal scroll.
- Dropdowns work on hover + click (desktop) and tap (mobile), close on
  outside-click / Escape, and are keyboard accessible.
```
