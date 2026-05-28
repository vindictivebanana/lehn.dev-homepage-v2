
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