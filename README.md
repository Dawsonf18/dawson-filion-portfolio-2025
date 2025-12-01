# AI Engineering Portfolio

A modern, eye-catching portfolio website showcasing AI and machine learning projects. Built with React, Vite, and Framer Motion for smooth animations and a stunning user experience.

## Features

- **Modern Design**: Clean, professional UI with AI-themed aesthetics
- **Smooth Animations**: Powered by Framer Motion for engaging interactions
- **Particle Background**: Interactive particle system using TSParticles
- **Fully Responsive**: Optimized for all devices and screen sizes
- **Type Animation**: Dynamic typing effects for role titles
- **Project Showcase**: Highlight your AI/ML projects with detailed cards
- **Contact Form**: Built-in contact form for easy communication
- **Skills Display**: Comprehensive tech stack visualization

## Tech Stack

### Frontend
- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **React Router DOM** - Client-side routing
- **Framer Motion** - Animation library
- **React Type Animation** - Typing effect component
- **TSParticles** - Particle background effects
- **React Icons** - Icon library

### Styling
- **Custom CSS** - Modern CSS with CSS variables
- **Gradient Effects** - Eye-catching gradients
- **Glass-morphism** - Modern card designs
- **Responsive Grid** - Mobile-first approach

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Dawsonf18/ai-portfolio.git
cd ai-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The build files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
ai-portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar/
│   │   ├── Footer/
│   │   └── Particles/
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   └── Contact.jsx
│   ├── assets/
│   │   └── images/
│   ├── App.jsx
│   ├── App.css
│   └── index.css
├── public/
├── package.json
└── vite.config.js
```

## Customization

### Update Personal Information

1. **Home Page**: Edit `src/pages/Home.jsx`
   - Update name and role
   - Modify social links

2. **About Page**: Edit `src/pages/About.jsx`
   - Update bio and description
   - Add/remove skills
   - Customize expertise list

3. **Projects**: Edit `src/pages/Projects.jsx`
   - Add your actual projects
   - Update GitHub and demo links
   - Modify project descriptions

4. **Contact**: Edit `src/pages/Contact.jsx`
   - Update email and social links
   - Configure contact form backend

### Color Scheme

Edit CSS variables in `src/App.css`:

```css
:root {
  --bg-primary: #0a0e27;
  --bg-secondary: #111632;
  --accent-primary: #00d4ff;
  --accent-secondary: #7b2cbf;
  /* ... */
}
```

## Deployment

### Deploy to GitHub Pages

1. Update `package.json` with your repository URL:
```json
{
  "homepage": "https://yourusername.github.io/ai-portfolio"
}
```

2. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

3. Add deploy scripts to `package.json`:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

4. Deploy:
```bash
npm run deploy
```

### Deploy to Vercel/Netlify

Simply connect your GitHub repository to Vercel or Netlify and they will automatically build and deploy your site.

## Features to Implement

- [ ] Blog section for AI/ML articles
- [ ] Dark/Light theme toggle
- [ ] Backend integration for contact form
- [ ] Resume download functionality
- [ ] Project filtering by technology
- [ ] SEO optimization
- [ ] Analytics integration

## License

MIT License - feel free to use this portfolio for your own projects!

## Author

**Dawson Filion** - AI Engineer

- GitHub: [@Dawsonf18](https://github.com/Dawsonf18)
- LinkedIn: [Your LinkedIn](https://linkedin.com)

## Acknowledgments

- Design inspiration from modern AI/ML portfolios
- Icons from React Icons
- Fonts from Google Fonts (Inter)
- Particle effects from TSParticles
