# Nityog — Corporate Wellness Website

## Quick Start (works on Windows, Mac, Linux)

**Requirements:** Node.js 18+ — download from https://nodejs.org

```bash
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

## Build for production
```bash
npm run build
npm run preview
```

---

## Project Structure — One Section Per File

```
src/
  components/
    sections/
      Navbar.tsx          ← Top navigation bar + mobile menu
      Hero.tsx            ← Full-screen hero section
      TrustedBy.tsx       ← Scrolling company logo marquee
      About.tsx           ← About the experience section
      Experiences.tsx     ← Hover-reveal service cards
      Programs.tsx        ← Signature programs (Yoga + Meditation)
      Gallery.tsx         ← Photo gallery grid
      WhyUs.tsx           ← Why choose us cards
      Story.tsx           ← Founder story section
      Stats.tsx           ← Animated statistics bar
      Contact.tsx         ← Contact form
      Footer.tsx          ← Site footer
    ui/                   ← UI primitives (Button, Input, Form…) — do not edit
  pages/
    Home.tsx              ← Assembles all sections in order
  lib/
    utils.ts              ← Tailwind class helper — do not edit
  hooks/
    use-toast.ts          ← Toast notification hook — do not edit
  App.tsx                 ← App root — do not edit
  main.tsx                ← Entry point — do not edit
  index.css               ← Global styles & colour theme

public/
  images/                 ← ALL site images live here (see guide below)
  logo.jpeg               ← Brand logo used in Navbar and Footer
```

### Rule for team collaboration
**Each teammate edits their own section file only.**
Changes to one file do not affect any other section.

---

## Replacing Photos (without breaking the UI)

All images live in `public/images/`. To swap a photo:

1. Save your new photo in `public/images/`
2. Use the **exact same filename** as the one you're replacing (e.g. `hero.png`)
   — OR — open the matching section file and update the `src` path

| File | Used in section | Recommended size |
|------|-----------------|-----------------|
| `hero.png`  | Hero background | 1920×1080 px |
| `about.png` | About section (left column) | 800×1000 px |
| `story.png` | Founder portrait | 800×1067 px |
| `sig1.png`  | Signature program 1 (Corporate Yoga) | 1200×900 px |
| `sig2.png`  | Signature program 2 (Meditation) | 1200×900 px |
| `gal1.png`  | Yoga Experiences card + Gallery | 800×600 px |
| `gal2.png`  | Meditation Journeys card + Gallery | 800×600 px |
| `gal3.png`  | Breathwork Sessions card | 800×600 px |
| `gal4.png`  | Ice Bath Recovery card | 800×600 px |
| `gal5.png`  | Sound Healing card + Gallery | 800×600 px |
| `logo.jpeg` | Navbar + Footer logo | 200×200 px |

**Supported formats:** .png, .jpg, .jpeg, .webp — any format works.

---

## Common Edits

### Change a section's text
Open the matching file in `src/components/sections/` — every editable piece of text has a `── EDIT:` comment marking it.

### Add a new service card (Experiences section)
Open `src/components/sections/Experiences.tsx` and add an entry to the `services` array:
```ts
{
  name: "Your New Service",
  image: "/images/your-image.png",   // place the image in public/images/
  benefits: ["Benefit 1", "Benefit 2", "Benefit 3", "Benefit 4"],
},
```

### Add a gallery photo
Open `src/components/sections/Gallery.tsx` and add the path to the `images` array.

### Update the Google Form link
Open `src/components/sections/Contact.tsx` and replace the URL in the `CONTACT` object:
```ts
googleFormUrl: "https://forms.gle/YOUR_ACTUAL_FORM_ID",
```

### Change the colour theme
Open `src/index.css` — the `:root` block has HSL values for every colour. Change `--primary`, `--accent`, `--background` etc. to restyle the entire site.

---

## Troubleshooting

| Problem | Fix |
|---------|-----|
| `npm install` fails | Make sure Node.js 18+ is installed: `node --version` |
| Port 3000 already in use | Run `npm run dev -- --port 3001` |
| Image not showing | Check the filename matches exactly (case-sensitive on Mac/Linux) |
| Fonts not loading | Check your internet connection — fonts load from Google Fonts |
