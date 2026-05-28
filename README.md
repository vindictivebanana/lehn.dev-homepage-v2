# [lehn.dev](https://www.lehn.dev)

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

