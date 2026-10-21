# portfolio-v3

A Tailwind CSS **v3** + Vite rebuild of [olutunde.dev](https://olutunde.dev) (the original is Next.js + Tailwind v4: [Olutunde22/portfolio](https://github.com/Olutunde22/portfolio)).

## Stack

- Vite 8 + React 19 + TypeScript (strict)
- Tailwind CSS 3.4 (`tailwind.config.js` + PostCSS + Autoprefixer)
- Prettier with `prettier-plugin-tailwindcss`

## Themes

Five themes, switchable from the header (`theme: ▾`) and saved in `localStorage`:

| Theme      | Look                            |
| ---------- | ------------------------------- |
| `ember`    | The original — black and orange |
| `phosphor` | Green CRT terminal              |
| `amber`    | Monochrome amber terminal       |
| `dracula`  | Dracula palette, purple accent  |
| `paper`    | Light theme                     |

Colours are CSS variables holding RGB channels (`--accent: 255 107 0`), mapped in `tailwind.config.js` as
`rgb(var(--accent) / <alpha-value>)`, so opacity modifiers like `bg-accent/10` work in every theme.

**Adding a theme:** add a `[data-theme="name"]` block in `src/index.css`, an entry in `src/lib/themes.ts`,
and the id to the inline script in `index.html` (it applies the saved theme before first paint).

## v4 → v3 notes

- `@theme inline` tokens moved to `theme.extend` in `tailwind.config.js` (colours, fonts, keyframes, animations).
- v4 accepts any spacing step (`mb-5.5`, `pt-19`, `max-w-310`); v3 needs them declared, so they're in `spacing`, `maxWidth` and `zIndex`.
- `outline-2` needs an explicit `outline` style class in v3.
- `next/image`, `next/font` and Next metadata became a plain `<img>`, Google Fonts `<link>` and tags in `index.html`.

## Scripts

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # type-check + production build to dist/
npm run preview
```
