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

### Build for Production

```bash
hugo --minify
```

The generated site will be in the `public/` directory.

### Hosting Options

The static site can be deployed to:
- **Netlify** - Recommended (automatic builds from Git)
- **Vercel** - Great Hugo support
- **Cloudflare Pages** - Fast CDN
- **GitHub Pages** - Free hosting
- **AWS S3 + CloudFront** - Scalable solution

### Netlify Configuration

Create `netlify.toml` in the root:
```toml
[build]
  publish = "public"
  command = "hugo --minify"

[build.environment]
  HUGO_VERSION = "0.139.3"

[context.production.environment]
  HUGO_ENV = "production"
```

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

**Version:** 0.7.0 (Phase 7 Complete)
**Last Updated:** 2025-11-17
**Status:** In Development - 70% Complete
