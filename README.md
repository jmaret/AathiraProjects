# Aathira J Maret — Personal Site

One-page static site reflecting Aathira’s resume. Hosted on GitHub Pages and redeployed on every push to `main`.

## Local preview

Open `index.html` in a browser, or from this folder:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

## Publish

1. In the GitHub repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
2. Push to `main` (or run the **Deploy GitHub Pages** workflow manually).
3. Site URL (until a custom domain is attached): `https://jmaret.github.io/AathiraProjects/`.

## Custom domain

Connect the domain in GitHub Pages settings (DNS + optional `CNAME` in the repo). Relative asset paths are used so the site works at a project path or at a custom domain root.

## Still empty by design

- **Contact** fields (email, phone, location) are present but blank.
- **Resume PDF** link points to `assets/Aathira_J_Maret_Resume.pdf`; add the file there when ready.
- **Photo** can be added later in the hero without restructuring the page.
