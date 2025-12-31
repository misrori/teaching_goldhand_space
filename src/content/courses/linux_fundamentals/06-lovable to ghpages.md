# Deploying a Lovable Vite App to GitHub Pages

This guide walks you through the steps to deploy a web application created with Lovable (based on Vite & React) to GitHub Pages.

## 1. Prepare your Lovable Project

Before deploying, we need to configure the app to run in a subdirectory (since GitHub Pages URLs often look like `yourname.github.io/repo-name/`).

### A. Update `vite.config.ts` (Dynamic Base)

Instead of hardcoding the base URL, we can use an environment variable so the app works both locally and on GitHub.

Open `vite.config.ts` and modify the `defineConfig` export:

```typescript
export default defineConfig(({ mode }) => ({
  // ... other settings ...
  
  // This tells Vite where to find assets on production
  base: mode === 'development' ? '/' : '/YOUR_REPO_NAME/', 
  
  // ... plugins and resolve ...
}));
```

*Ideally, replace `/YOUR_REPO_NAME/` with the actual name of your repository.*

### B. Update `src/App.tsx` (Router)

Since the app will live in a subdirectory, the Router needs to know this "base" path.

```tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

// ...

const App = () => (
  // Use import.meta.env.BASE_URL which comes from the vite config above
  <BrowserRouter basename={import.meta.env.BASE_URL}>
    <Routes>
      <Route path="/" element={<Index />} />
      {/* ... your other routes ... */}
    </Routes>
  </BrowserRouter>
);
```

### C. Update `package.json`

Add a specific build script for GitHub Pages to ensure the correct base path is used if you prefer command-line arguments:

```json
"scripts": {
  "build:gh": "vite build --base=/YOUR_REPO_NAME/",
  // ... other scripts
}
```

## 2. Push to GitHub

1.  Create a new repository on GitHub.
2.  Push your Lovable project code to this repository.

## 3. Set up Automatic Deployment (GitHub Actions)

The easiest way to deploy is using GitHub Actions.

1.  Create a file at `.github/workflows/deploy.yml` in your project.
2.  Paste the following content:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        
      - name: Setup Bun (or Node)
        uses: oven-sh/setup-bun@v1
        with:
          bun-version: latest
          
      - name: Install Dependencies
        run: bun install
        
      - name: Build
        # Uses the script we defined earlier, or just standard build if config is set
        run: bun run build:gh 
        
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

## 4. Enable GitHub Pages

1.  Go to your repository **Settings** tab.
2.  Click on **Pages** in the left sidebar.
3.  Under **Build and deployment**, switch the **Source** to **GitHub Actions**.

## 5. Verify

Once you push the `.github/workflows/deploy.yml` file, click on the **Actions** tab in your repository. You should see the deployment workflow running. When it finishes (green checkmark), your site will be live at the URL shown in the workflow details!
