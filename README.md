# JVR General Services website

Static one-page advertising site for JVR General Services, hosted on GitHub Pages.

- `index.html`: all content (phone numbers, services, gallery, contact)
- `styles.css`: black / white / gold design, mobile layout below 820px
- `script.js`: mobile menu, gallery lightbox, footer year
- `favicon.svg`: JVR tab icon

## Updating

- **Phone numbers / Facebook:** search `index.html` for `tel:+16095150447`, `tel:+16095157661` and `facebook.com` and edit every match.
- **Gallery:** the current photos are free Unsplash stock images. Replace them with photos of JVR's own completed projects: put the files in an `images/` folder and change each gallery `<img src>` and `data-full` to `images/your-photo.jpg`.
- Push to `main` and GitHub Pages redeploys in about a minute.
