# Portfolio Deployment Guide

Multiple free options to deploy your AI Engineering portfolio with a custom URL.

## 🚀 Option 1: Vercel (Recommended - Easiest!)

**Best for**: Quick deployment, automatic HTTPS, custom domains
**Free tier**: Yes, generous

### Steps:
1. Push your code to GitHub (if not already)
   ```bash
   cd /Users/dawsonfilion/Projects/ai-portfolio
   git init
   git add .
   git commit -m "Initial commit - AI Engineering Portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/ai-portfolio.git
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com)
3. Sign up with GitHub
4. Click **"Add New Project"**
5. Import your `ai-portfolio` repository
6. Vercel auto-detects Vite - just click **Deploy**
7. Done! You'll get a URL like: `your-portfolio.vercel.app`

### Add Custom Domain (Optional):
- In Vercel dashboard → Settings → Domains
- Add your custom domain (e.g., `dawsonfilion.com`)
- Follow DNS setup instructions

**Pros**:
- Automatic deployments on git push
- Free SSL certificate
- Lightning fast CDN
- Zero configuration needed

---

## 🌐 Option 2: Netlify

**Best for**: Easy drag-and-drop, great for beginners
**Free tier**: Yes

### Method A: Drag & Drop (No Git Required)
1. Build your project:
   ```bash
   npm run build
   ```
2. Go to [netlify.com](https://netlify.com)
3. Sign up
4. Drag the `dist` folder to the drop zone
5. Done! Get URL like: `your-site.netlify.app`

### Method B: Git Integration
1. Push code to GitHub
2. Sign up at [netlify.com](https://netlify.com)
3. Click **"Add new site"** → **"Import an existing project"**
4. Connect to GitHub
5. Select `ai-portfolio` repo
6. Build settings (auto-detected):
   - Build command: `npm run build`
   - Publish directory: `dist`
7. Click **Deploy**

### Custom Domain:
- Site settings → Domain management → Add custom domain

---

## 📄 Option 3: GitHub Pages

**Best for**: Free hosting on GitHub, good for portfolios
**Free tier**: Yes (with GitHub account)

### Setup:
1. Install gh-pages package:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Update `package.json`:
   ```json
   {
     "homepage": "https://Dawsonf18.github.io/ai-portfolio",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. Update `vite.config.js`:
   ```javascript
   import { defineConfig } from 'vite'
   import react from '@vitejs/plugin-react'

   export default defineConfig({
     plugins: [react()],
     base: '/ai-portfolio/'  // Add this line
   })
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

5. Enable GitHub Pages:
   - Go to repo Settings → Pages
   - Source: Deploy from branch
   - Branch: `gh-pages`
   - Save

URL: `https://Dawsonf18.github.io/ai-portfolio/`

### Custom Domain:
- Add `CNAME` file in `public/` folder with your domain
- Configure DNS with your domain provider

---

## ☁️ Option 4: Azure Static Web Apps

**Best for**: Azure ecosystem integration
**Free tier**: Yes

### Steps:
1. Install Azure CLI:
   ```bash
   brew install azure-cli  # Mac
   ```

2. Login:
   ```bash
   az login
   ```

3. Install Azure Static Web Apps CLI:
   ```bash
   npm install -g @azure/static-web-apps-cli
   ```

4. Build your app:
   ```bash
   npm run build
   ```

5. Deploy:
   ```bash
   az staticwebapp create \
     --name ai-portfolio \
     --resource-group your-resource-group \
     --source dist \
     --location "East US 2" \
     --branch main \
     --app-location "dist"
   ```

Or use Azure Portal:
1. Go to [portal.azure.com](https://portal.azure.com)
2. Create new Static Web App
3. Connect to GitHub
4. Configure build settings
5. Deploy

---

## 🎯 Quick Comparison

| Platform | Setup Time | Auto Deploy | Custom Domain | Best For |
|----------|------------|-------------|---------------|----------|
| **Vercel** | 2 min | ✅ Yes | ✅ Free | Easiest, fastest |
| **Netlify** | 3 min | ✅ Yes | ✅ Free | Beginners |
| **GitHub Pages** | 5 min | ✅ Yes | ✅ Free | GitHub users |
| **Azure** | 10 min | ✅ Yes | ✅ Free | Azure ecosystem |

---

## 📝 Before Deploying

1. **Set up EmailJS** (see `EMAILJS_SETUP.md`)
   - Contact form won't work without it
   - Takes 5-10 minutes

2. **Update Projects** (optional)
   - Replace example project with real one in `src/pages/Projects.jsx`

3. **Test build locally**:
   ```bash
   npm run build
   npm run preview
   ```

4. **Check all links work**:
   - LinkedIn profile
   - GitHub profile
   - Email addresses

---

## 🔧 Troubleshooting

### Build fails on deploy:
- Check Node.js version (platform might use different version)
- Add build settings manually if auto-detect fails

### Routes don't work (404 errors):
- Add redirect rules for SPA routing
- **Vercel**: Create `vercel.json`:
  ```json
  {
    "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
  }
  ```
- **Netlify**: Create `public/_redirects`:
  ```
  /*    /index.html   200
  ```

### Custom domain not working:
- Wait for DNS propagation (up to 48 hours)
- Verify DNS records are correct
- Check SSL certificate status

---

## 🎉 Recommended Flow

1. **Deploy to Vercel first** (quickest, easiest)
2. **Test everything works**
3. **Add custom domain** (optional)
4. **Share your portfolio URL!**

Your portfolio will be live at a URL like:
- `dawson-ai-portfolio.vercel.app`
- Or your custom domain: `dawsonfilion.com`

---

## Need Help?

Common issues and solutions in README.md or create an issue in the GitHub repo.
