# lehn.dev

Personal homepage. Static HTML/CSS served via Cloudflare Workers Sites.

## Structure

```
lehn.dev/
├── index.html                 # main page
├── css/
│   └── style.css              # all styles + CSS variables
├── js/
│   └── main.js                # minimal JS (year, future interactivity)
├── assets/
│   └── img/
│       ├── projects/          # project photos (WebP, <200KB each)
│       └── og-image.png       # social preview (1200×630)
├── worker/
│   └── index.js               # Cloudflare Worker entry point
├── wrangler.toml              # Wrangler config
└── package.json
```

## Adding a project photo

1. Export/convert your photo to WebP: `cwebp input.jpg -q 80 -o assets/img/projects/myproject.webp`
2. Add an `<img>` tag to the project item in `index.html`:

```html
<div class="project-item">
  <span class="project-tag">3d print</span>
  <img src="/assets/img/projects/myproject.webp" alt="brief description" class="project-img">
  <div class="project-content">
    ...
  </div>
</div>
```
## Customising

All design tokens (colors, fonts) live in `css/style.css` under `:root`.
To change the accent color, update `--accent` and `--accent2`.
