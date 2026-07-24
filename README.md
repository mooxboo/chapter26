# Chapter 26

A luxury digital storybook designed as a premium, minimal, and emotional birthday experience.

## Deployment to GitHub Pages

1. Create a new repository on GitHub named `chapter26`.
2. Upload all the files (`index.html`, `css/style.css`, `js/app.js`) maintaining the folder structure.
3. Go to your repository **Settings**.
4. Navigate to **Pages** on the left sidebar.
5. Under **Build and deployment**, set the Source to **Deploy from a branch**.
6. Select the `main` (or `master`) branch and `/ (root)` folder, then click **Save**.
7. Wait a few minutes, and your site will be live at `https://mooxboo.github.io/chapter26`.

## Adding Real Photos
To add real photos in the "Memories" section:
1. Create an `assets/images/` folder.
2. Place your photos there (e.g., `photo1.jpg`).
3. In `index.html`, replace the `<div class="image-placeholder">...</div>` with:
   `<img src="assets/images/photo1.jpg" alt="Description of memory" style="width: 100%; height: 100%; object-fit: cover;" loading="lazy">`

## Design Philosophy
- **Typography:** Cormorant Garamond for elegant headings, Inter for highly readable body text.
- **Colors:** Warm, minimal palette inspired by premium editorial design.
- **Animations:** Subtle, physics-based fade-ups triggered by scroll, fully respecting accessibility standards (`prefers-reduced-motion`).
