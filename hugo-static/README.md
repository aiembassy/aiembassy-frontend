# AI Embassy Hugo Static Site

This directory contains the Hugo static site version of the AI Embassy website, migrated from Next.js.

## 🚀 Quick Start

### Prerequisites

- Hugo Extended (v0.110.0 or higher) - [Installation Guide](https://gohugo.io/installation/)
- Git

### Installation

```bash
# Install Hugo Extended (macOS)
brew install hugo

# Install Hugo Extended (Linux)
snap install hugo --channel=extended

# Install Hugo Extended (Windows)
choco install hugo-extended
```

### Development

```bash
# Navigate to the hugo-static directory
cd hugo-static

# Start development server
hugo server -D

# Start with live reload
hugo server --disableFastRender

# Build for production
hugo --minify
```

The site will be available at `http://localhost:1313`

## 📁 Directory Structure

```
hugo-static/
├── archetypes/           # Content templates
├── assets/               # Source assets (SCSS, JS)
│   └── scss/            # SCSS stylesheets
│       ├── base/        # Base styles (reset, typography, utilities)
│       ├── layout/      # Layout styles (grid, header, footer)
│       ├── components/  # Component styles (to be added)
│       ├── _variables.scss
│       ├── _mixins.scss
│       ├── _functions.scss
│       └── main.scss
├── config/               # Configuration files
│   └── _default/
│       ├── config.toml   # Main configuration
│       ├── languages.toml # Language settings (Polish, English)
│       ├── params.toml   # Site parameters
│       └── menus.toml    # Navigation menus
├── content/              # Markdown content (to be added)
│   ├── pl/              # Polish content
│   └── en/              # English content
├── data/                 # Data files (YAML, JSON, TOML)
├── i18n/                 # Translation strings
│   ├── pl.toml          # Polish translations
│   └── en.toml          # English translations
├── layouts/              # HTML templates
│   ├── _default/
│   │   └── baseof.html  # Base template
│   ├── partials/
│   │   ├── head/        # Head partials (meta, styles, etc.)
│   │   ├── header.html
│   │   ├── footer.html
│   │   ├── language-switcher.html
│   │   ├── social-links.html
│   │   └── scripts.html
│   └── shortcodes/       # Custom shortcodes
├── static/               # Static files (served as-is)
│   ├── css/
│   ├── js/
│   ├── images/
│   ├── docs/
│   └── favicon/
└── public/               # Generated site (git-ignored)
```

## 🎨 Design System

The design system has been converted from the Next.js theme to SCSS variables:

### Colors
- Primary: `#008C8C` (Green)
- Primary Hover: `#006666`
- Secondary: `#FF2936` (Red)
- Text: `#3B4949`
- Background: `#F6F6F6`

### Typography
- Primary Font: Open Sans
- Secondary Font: Roboto
- Headings Font: Merriweather

### Breakpoints
- Mobile: `< 576px`
- Tablet: `768px`
- Desktop: `1024px`
- Wide: `1440px`

See `assets/scss/_variables.scss` for complete design tokens.

## 🌍 Multilingual Support

The site supports two languages:
- **Polish (pl)** - Default language
- **English (en)**

### Configuration
- Language settings: `config/_default/languages.toml`
- Translation strings: `i18n/pl.toml` and `i18n/en.toml`
- Content structure: `content/pl/` and `content/en/`

### Usage in Templates
```go-html-template
{{ i18n "key_name" }}
```

## 🛠 Development Guidelines

### Adding New Content

```bash
# Create new content file
hugo new content/pl/projects/project-name.md
hugo new content/en/projects/project-name.md
```

### Front Matter Example

```yaml
---
title: "Project Title"
date: 2025-11-17
draft: false
category: "Research"
image: "/images/projects/project.jpg"
description: "Short description"
tags: ["AI", "Research"]
---

Content goes here...
```

### Adding New Partials

Create partial files in `layouts/partials/`:
```html
<!-- layouts/partials/components/button.html -->
<button class="btn btn--{{ .type }}">
    {{ .text }}
</button>
```

Use in templates:
```go-html-template
{{ partial "components/button.html" (dict "type" "primary" "text" "Click me") }}
```

### Adding New Styles

1. Create component SCSS file: `assets/scss/components/_component-name.scss`
2. Import in `assets/scss/main.scss`:
   ```scss
   @import "components/component-name";
   ```

## 🧪 Testing & Quality Assurance

### Automated Testing

The project includes comprehensive testing scripts in `scripts/`:

**Run All Tests:**
```bash
./scripts/run-all-tests.sh
```

**Individual Tests:**
```bash
# Build verification
./scripts/test-build.sh

# Bundle size analysis
./scripts/check-bundle-size.sh

# Link validation (requires Hugo server running)
./scripts/check-links.sh

# Accessibility testing (requires Hugo server)
./scripts/test-accessibility.sh

# Performance testing (requires Hugo server)
./scripts/test-performance.sh
```

### Testing Documentation

Comprehensive testing guides are available:

- **[TESTING.md](./TESTING.md)** - Complete testing checklist covering:
  - Cross-browser testing (Chrome, Firefox, Safari, Edge)
  - Responsive testing (all breakpoints)
  - Content verification
  - Performance testing (Lighthouse audits)
  - Accessibility testing (WCAG 2.0 AA)
  - SEO validation

- **[BUILD_VERIFICATION.md](./BUILD_VERIFICATION.md)** - Build verification guide:
  - Prerequisites and setup
  - Build process (development & production)
  - File generation verification
  - Common build issues and solutions

- **[CONTENT_VERIFICATION.md](./CONTENT_VERIFICATION.md)** - Content structure verification:
  - File inventory (35 templates, 20 SCSS, 1 JS, 20 content files)
  - Content completeness check
  - Architecture verification

- **[QA_SUMMARY.md](./QA_SUMMARY.md)** - QA framework summary:
  - Testing workflow
  - Sign-off criteria
  - Issue tracking

### Performance Targets

- **Lighthouse Scores:**
  - Performance: 90+
  - Accessibility: 95+
  - Best Practices: 95+
  - SEO: 95+

- **Bundle Sizes:**
  - Main CSS: < 50KB (minified + gzipped)
  - Main JS: < 30KB (minified + gzipped)
  - Total page weight: < 500KB

### Testing Requirements

**Required Software:**
```bash
# Hugo Extended
hugo version  # v0.100.0+

# Optional testing tools
npm install -g broken-link-checker
npm install -g lighthouse
npm install -g pa11y
```

## 📋 Migration Status

**Phase 1: Setup & Foundation** ✅ COMPLETED
- Hugo project initialized
- Configuration files set up
- Base templates created
- Design system converted to SCSS

**Phase 2: Static Assets & Styles** ✅ COMPLETED
- All static files migrated (images, docs, favicons)
- Component SCSS library created
- Asset optimization pipeline set up
- Critical CSS strategy implemented

**Phase 3: Core Components & Partials** ✅ COMPLETED
- Homepage section partials created (7 sections)
- Page templates (index, single, list)
- Content structure established
- Team data file created

**Phase 4: Content & Data** ✅ COMPLETED
- Translation files converted (JSON → TOML)
- Real data migrated (projects, events, workshops)
- Data files created (trainings, opinions)
- Content archetypes defined

**Phase 5: Page Templates** ✅ COMPLETED
- Homepage template with all sections
- Single page templates (projects, events, workshops)
- List page templates with pagination
- Special pages (contact, donation, landing)

**Phase 6: Forms & Interactivity** ✅ COMPLETED
- Form validation and handling with API integration
- Interactive elements (mobile menu, modals)
- Smooth scroll navigation
- Loading states and error handling

**Phase 7: Animations & Polish** ✅ COMPLETED
- CSS animations and transitions
- Scroll-triggered animations with Intersection Observer
- Carousel/slider component for content
- Hugo image processing and optimization
- Resource hints for performance

**Phase 8: SEO & Metadata** ✅ COMPLETED
- Comprehensive JSON-LD structured data
- Sitemap configuration
- Robots.txt with environment-based rules
- Enhanced Open Graph and Twitter Cards
- Multilingual hreflang tags
- SEO utility helpers

**Phase 9: Testing & QA** ✅ COMPLETED
- Comprehensive testing documentation (TESTING.md, BUILD_VERIFICATION.md, CONTENT_VERIFICATION.md, QA_SUMMARY.md)
- Automated test scripts (6 scripts: build, bundle size, links, accessibility, performance, all-tests)
- Build verification procedures
- Cross-browser testing checklists
- Responsive testing procedures
- Performance testing framework (Lighthouse integration)
- Accessibility testing framework (WCAG 2.0 AA)
- Content structure verification
- Testing workflow documentation

**Phase 10: Deployment & Launch** ✅ COMPLETED
- Production build configuration (config/production/config.toml)
- Netlify deployment configuration (netlify.toml with security headers, caching, redirects)
- Vercel deployment configuration (vercel.json with optimized settings)
- Cloudflare Pages deployment guide (CLOUDFLARE_PAGES.md)
- GitHub Actions CI/CD workflow (.github/workflows/hugo-deploy.yml)
- Comprehensive deployment documentation (DEPLOYMENT.md)
- Platform comparison and recommendations
- Environment-specific configurations
- Security headers and CSP policies
- Cache control strategies
- Custom domain setup guides
- SSL/HTTPS configuration
- Monitoring and analytics setup
- Rollback procedures
- Launch checklist (LAUNCH_CHECKLIST.md)
- Post-deployment monitoring guidelines

**🎉 Migration Complete!** All phases (1-10) finished. The site is production-ready and can be deployed to any major hosting platform.

See [MIGRATION_PLAN.md](../MIGRATION_PLAN.md) for full migration details.

## 🔧 Configuration

### Site Configuration
Edit `config/_default/config.toml` for:
- Base URL
- Language settings
- Build options
- Output formats

### Site Parameters
Edit `config/_default/params.toml` for:
- Site description
- Author information
- Social media links
- Contact information
- Theme colors
- Feature toggles

### Menus
Edit `config/_default/menus.toml` for:
- Main navigation
- Footer navigation
- Language-specific menus

## 🚢 Deployment

The site is ready for production deployment with comprehensive configurations for multiple platforms.

### Quick Start

**Build for Production:**
```bash
cd hugo-static
hugo --gc --minify --environment production
```

The generated site will be in the `public/` directory.

### Deployment Platforms

Choose the platform that best fits your needs:

| Platform | Setup Time | Features | Best For |
|----------|------------|----------|----------|
| **[Netlify](#netlify)** | 5 min | Deploy previews, forms | Quick setup |
| **[Vercel](#vercel)** | 5 min | Edge network, analytics | Performance |
| **[Cloudflare Pages](#cloudflare-pages)** | 10 min | Unlimited bandwidth, DDoS | Enterprise |
| **[GitHub Pages](#github-pages)** | 15 min | Git-based, free | Simple projects |

### Netlify

**Configuration:** `netlify.toml` (included in repository root)

```bash
# Automatic deployment on git push
# Build command: cd hugo-static && hugo --gc --minify
# Publish directory: hugo-static/public
```

**Features:**
- ✅ Automatic HTTPS
- ✅ Deploy previews for PRs
- ✅ Form handling
- ✅ Serverless functions
- ✅ 300 build minutes/month (free tier)

**Deploy Now:**
1. Push to GitHub
2. Connect repository at [app.netlify.com](https://app.netlify.com/)
3. Deploy automatically

### Vercel

**Configuration:** `vercel.json` (included in repository root)

```bash
# Build command: cd hugo-static && hugo --gc --minify
# Output directory: hugo-static/public
```

**Features:**
- ✅ Global CDN
- ✅ Preview deployments
- ✅ Edge functions
- ✅ Analytics
- ✅ 6000 build minutes/month (free tier)

### Cloudflare Pages

**Configuration:** See `CLOUDFLARE_PAGES.md` for detailed setup

```bash
# Build command: cd hugo-static && hugo --gc --minify
# Build output: hugo-static/public
# Hugo version: 0.139.3
```

**Features:**
- ✅ Unlimited bandwidth
- ✅ 275+ CDN locations
- ✅ Advanced DDoS protection
- ✅ Free analytics
- ✅ Unlimited builds

### GitHub Pages

**Configuration:** `.github/workflows/hugo-deploy.yml` (included)

Automatic deployment via GitHub Actions:
1. Enable GitHub Pages in repository settings
2. Select "GitHub Actions" as source
3. Push to main branch

### Deployment Documentation

Comprehensive guides available:

- **[DEPLOYMENT.md](./DEPLOYMENT.md)** - Complete deployment guide
  - All platform configurations
  - Environment setup
  - Custom domain configuration
  - Security headers
  - Performance optimization
  - Troubleshooting

- **[CLOUDFLARE_PAGES.md](./CLOUDFLARE_PAGES.md)** - Cloudflare Pages specific guide
  - Step-by-step setup
  - DNS configuration
  - Branch previews
  - Performance optimization

- **[LAUNCH_CHECKLIST.md](./LAUNCH_CHECKLIST.md)** - Pre-launch checklist
  - Pre-deployment tasks
  - Launch day procedures
  - Post-launch monitoring
  - Success criteria

### Environment Variables

Set these in your deployment platform:

```bash
HUGO_VERSION=0.139.3
HUGO_ENV=production
HUGO_ENABLEGITINFO=true
```

### Custom Domain

Configure in platform settings:
1. Add custom domain (`aiembassy.org`)
2. Update DNS records
3. Enable HTTPS (automatic)

### Deployment Commands

```bash
# Production build
hugo --gc --minify --environment production

# Staging build
hugo --gc --minify --buildFuture --environment staging

# Development server
hugo server -D
```

### Security & Performance

All deployment configurations include:
- ✅ Security headers (CSP, X-Frame-Options, etc.)
- ✅ Cache control for static assets
- ✅ Automatic HTTPS/SSL
- ✅ Compression (gzip/brotli)
- ✅ CDN distribution

### Monitoring

Post-deployment monitoring recommendations:
- Google Analytics (optional)
- Google Search Console
- Uptime monitoring (UptimeRobot, Pingdom)
- Performance monitoring (Lighthouse CI)

See [DEPLOYMENT.md](./DEPLOYMENT.md) for complete deployment procedures and [LAUNCH_CHECKLIST.md](./LAUNCH_CHECKLIST.md) for launch preparation.

## 📚 Resources

- [Hugo Documentation](https://gohugo.io/documentation/)
- [Hugo Multilingual Mode](https://gohugo.io/content-management/multilingual/)
- [Hugo Templates](https://gohugo.io/templates/)
- [Hugo Asset Pipeline](https://gohugo.io/hugo-pipes/)

## 🤝 Contributing

When adding new features:
1. Follow the existing directory structure
2. Use SCSS variables from `_variables.scss`
3. Add translations to both `pl.toml` and `en.toml`
4. Update this README if needed

## 📝 Notes

- Hugo Extended is required for SCSS processing
- All SCSS files are processed through Hugo Pipes
- Images are optimized during build
- The site is fully static with no server-side rendering

## 🔗 Related Files

- Migration Plan: [../MIGRATION_PLAN.md](../MIGRATION_PLAN.md)
- Original Next.js Project: `../`
- Developer Guide: [../CLAUDE.md](../CLAUDE.md)

---

**Version:** 1.0.0 (Migration Complete)
**Last Updated:** 2025-11-17
**Status:** Ready for Production - All Phases Complete (100%)
