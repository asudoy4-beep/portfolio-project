# Ahmed Shahariar Udoy — Portfolio

Magazine-style personal portfolio built with Next.js, Tailwind CSS, and Framer Motion.

## Design

Editorial magazine aesthetic with:
- Warm cream paper background (`#f5f0e8`)
- Playfair Display serif headlines
- EB Garamond body copy
- Drop caps, pull quotes, column rules
- Section numbering (I–V)
- Ink-on-paper color palette with editorial red accents

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Build (Static Export)

```bash
npm run build
```

Outputs to `./out/` — ready for any static host.

## Deploy to GitHub Pages

### Automatic (GitHub Actions)

1. Push this repository to GitHub
2. Go to **Settings → Pages**
3. Under **Source**, select **GitHub Actions**
4. Push to `main` — the workflow at `.github/workflows/deploy.yml` will build and deploy automatically

Your site will be live at: `https://<your-username>.github.io/<repo-name>/`

> If deploying to a subdirectory (e.g. `/<repo-name>/`), add `basePath` to `next.config.ts`:
> ```ts
> basePath: "/<repo-name>",
> assetPrefix: "/<repo-name>/",
> ```

### Manual

```bash
npm run build
# Upload the ./out folder contents to your Pages branch
```

## Project Structure

```
app/
  components/
    Navbar.tsx       # Magazine masthead with dateline
    Hero.tsx         # Cover story layout
    About.tsx        # Three-column editorial with pull quote
    Projects.tsx     # Newspaper article grid
    Skills.tsx       # Catalog table layout
    Education.tsx    # Credentials card
    Contact.tsx      # Correspondence form
    Footer.tsx       # Colophon
  data/
    projects.ts      # Project data
    skills.ts        # Skills data
  globals.css        # Magazine typography & CSS variables
  layout.tsx
  page.tsx
.github/workflows/deploy.yml   # GitHub Pages CI/CD
public/.nojekyll               # Prevents Jekyll processing
```
