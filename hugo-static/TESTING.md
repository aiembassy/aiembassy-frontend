# Testing & QA Checklist - Hugo Static Site

**Project:** AI Embassy Frontend (Hugo Migration)
**Phase:** 9 - Testing & QA
**Date Created:** 2025-11-17
**Status:** Ready for Testing

---

## 📋 Table of Contents

1. [Build Verification](#1-build-verification)
2. [Cross-Browser Testing](#2-cross-browser-testing)
3. [Responsive Testing](#3-responsive-testing)
4. [Content Verification](#4-content-verification)
5. [Performance Testing](#5-performance-testing)
6. [Accessibility Testing](#6-accessibility-testing)
7. [SEO Validation](#7-seo-validation)
8. [Testing Scripts](#8-testing-scripts)

---

## 1. Build Verification

### Prerequisites

Ensure Hugo is installed:
```bash
hugo version
# Required: Hugo Extended v0.100.0 or higher
```

### Build Tests

#### 1.1 Development Build
```bash
cd hugo-static
hugo server -D --verbose
```

**Checklist:**
- [ ] Build completes without errors
- [ ] No template parsing errors
- [ ] No SCSS compilation errors
- [ ] No JavaScript errors in console
- [ ] Server starts successfully on http://localhost:1313
- [ ] Hot reload works correctly

#### 1.2 Production Build
```bash
cd hugo-static
hugo --gc --minify --verbose
```

**Checklist:**
- [ ] Build completes without errors
- [ ] All pages generated in `public/` directory
- [ ] Assets minified correctly (CSS, JS, HTML)
- [ ] Images optimized
- [ ] Sitemap.xml generated
- [ ] Robots.txt generated
- [ ] No broken internal links (check build output)

#### 1.3 Multi-language Build
```bash
cd hugo-static
hugo --verbose
```

**Verify:**
- [ ] Polish content generated (default language)
- [ ] English content generated
- [ ] Language switcher links work
- [ ] Hreflang tags present in all pages
- [ ] No missing translation warnings

---

## 2. Cross-Browser Testing

### Desktop Browsers

Test on the following browsers with latest versions:

#### Chrome/Chromium
- [ ] All pages load correctly
- [ ] Styles render correctly
- [ ] JavaScript functionality works
- [ ] Forms submit correctly
- [ ] Animations smooth
- [ ] Console has no errors

#### Firefox
- [ ] All pages load correctly
- [ ] Styles render correctly
- [ ] JavaScript functionality works
- [ ] Forms submit correctly
- [ ] Animations smooth
- [ ] Console has no errors

#### Safari (macOS)
- [ ] All pages load correctly
- [ ] Styles render correctly
- [ ] JavaScript functionality works
- [ ] Forms submit correctly
- [ ] Animations smooth
- [ ] Console has no errors

#### Edge
- [ ] All pages load correctly
- [ ] Styles render correctly
- [ ] JavaScript functionality works
- [ ] Forms submit correctly
- [ ] Animations smooth
- [ ] Console has no errors

### Mobile Browsers

#### iOS Safari
- [ ] All pages load correctly
- [ ] Touch interactions work
- [ ] Mobile menu functions
- [ ] Forms work on mobile
- [ ] Viewport scaling correct
- [ ] No horizontal scroll

#### Chrome Mobile (Android)
- [ ] All pages load correctly
- [ ] Touch interactions work
- [ ] Mobile menu functions
- [ ] Forms work on mobile
- [ ] Viewport scaling correct
- [ ] No horizontal scroll

---

## 3. Responsive Testing

### Breakpoints to Test

Test at the following viewport widths:

#### Mobile (320px - 575px)
- [ ] 320px (iPhone SE)
- [ ] 375px (iPhone X/11)
- [ ] 414px (iPhone Plus)

**Verify:**
- [ ] Mobile navigation works
- [ ] Content readable
- [ ] Images scale properly
- [ ] Forms usable
- [ ] No horizontal overflow
- [ ] Touch targets adequate (min 44x44px)

#### Tablet (576px - 1023px)
- [ ] 768px (iPad Portrait)
- [ ] 1024px (iPad Landscape)

**Verify:**
- [ ] Layout adapts appropriately
- [ ] Navigation transitions
- [ ] Grid layouts work
- [ ] Images scale properly
- [ ] Content hierarchy clear

#### Desktop (1024px+)
- [ ] 1280px (Standard laptop)
- [ ] 1440px (Large laptop)
- [ ] 1920px (Full HD)

**Verify:**
- [ ] Desktop navigation
- [ ] Full layout displayed
- [ ] Proper spacing and margins
- [ ] Images display correctly
- [ ] Content centered/aligned
- [ ] No excessive whitespace

### Responsive Components

Test these components at all breakpoints:

- [ ] Header/Navigation
- [ ] Hero section
- [ ] About section
- [ ] Benefits cards
- [ ] Project grid
- [ ] Team member cards
- [ ] Event cards
- [ ] Workshop grid
- [ ] Contact form
- [ ] Footer
- [ ] Carousel/Slider
- [ ] Modals

---

## 4. Content Verification

### Page Availability

Verify all pages are accessible:

#### Core Pages (Polish)
- [ ] `/` - Homepage
- [ ] `/contact/` - Contact page
- [ ] `/donation/` - Donation page
- [ ] `/projects/` - Projects list
- [ ] `/events/` - Events list
- [ ] `/workshops/` - Workshops list

#### Core Pages (English)
- [ ] `/en/` - Homepage
- [ ] `/en/contact/` - Contact page
- [ ] `/en/donation/` - Donation page
- [ ] `/en/projects/` - Projects list
- [ ] `/en/events/` - Events list
- [ ] `/en/workshops/` - Workshops list

#### Single Pages (Polish)
- [ ] `/projects/smogspots/` - Project detail
- [ ] `/events/[event-slug]/` - Event detail
- [ ] `/workshops/[workshop-slug]/` - Workshop detail

#### Single Pages (English)
- [ ] `/en/projects/smogspots/` - Project detail
- [ ] `/en/events/[event-slug]/` - Event detail
- [ ] `/en/workshops/[workshop-slug]/` - Workshop detail

#### Special Pages
- [ ] `/landing/[landing-slug]/` - Landing pages
- [ ] `/landing/list/` - Landing list

### Translation Verification

For each page type, verify:

#### Polish Content
- [ ] All text in Polish
- [ ] No English fallbacks showing
- [ ] Dates formatted correctly (DD.MM.YYYY)
- [ ] Currency in PLN
- [ ] Proper Polish characters (ą, ć, ę, ł, ń, ó, ś, ź, ż)

#### English Content
- [ ] All text in English
- [ ] No Polish text showing
- [ ] Dates formatted correctly (MM/DD/YYYY or YYYY-MM-DD)
- [ ] Currency in USD/EUR
- [ ] Proper English grammar

### Content Accuracy

- [ ] Project descriptions accurate
- [ ] Event dates and times correct
- [ ] Workshop information complete
- [ ] Team member bios accurate
- [ ] Contact information correct
- [ ] Social media links work
- [ ] Email addresses valid
- [ ] Phone numbers formatted correctly

### Link Testing

#### Internal Links
- [ ] Navigation menu links
- [ ] Footer links
- [ ] Breadcrumb navigation
- [ ] Prev/Next navigation on single pages
- [ ] Language switcher links
- [ ] CTA buttons
- [ ] "Read more" links

#### External Links
- [ ] Social media links (Facebook, Twitter, LinkedIn)
- [ ] External resources
- [ ] Partner links
- [ ] Document downloads (PDFs)
- [ ] All open in new tab where appropriate

### Form Testing

#### Contact Form
- [ ] All fields render correctly
- [ ] Placeholder text shows
- [ ] Labels associated with inputs
- [ ] Required field validation works
- [ ] Email validation works
- [ ] Min length validation works
- [ ] Honeypot field hidden
- [ ] Submit button works
- [ ] Loading state displays
- [ ] Success message shows
- [ ] Error message shows on failure
- [ ] Form clears after success

#### Newsletter Form (if applicable)
- [ ] Email field validates
- [ ] Submit works
- [ ] Success/error messages

#### Donation Form
- [ ] Payment options display
- [ ] Bank details toggle works
- [ ] Copy bank details works
- [ ] Amount selection works

---

## 5. Performance Testing

### Lighthouse Audits

Run Lighthouse audits for key pages:

#### Homepage (Polish & English)
```bash
# Using Chrome DevTools or CLI
lighthouse https://your-site.com --view
```

**Target Scores:**
- [ ] Performance: 90+
- [ ] Accessibility: 95+
- [ ] Best Practices: 95+
- [ ] SEO: 95+

**Metrics to Check:**
- [ ] First Contentful Paint (FCP) < 1.8s
- [ ] Largest Contentful Paint (LCP) < 2.5s
- [ ] Cumulative Layout Shift (CLS) < 0.1
- [ ] Time to Interactive (TTI) < 3.8s
- [ ] Total Blocking Time (TBT) < 200ms

#### Projects List Page
- [ ] Performance: 90+
- [ ] Accessibility: 95+
- [ ] Best Practices: 95+
- [ ] SEO: 95+

#### Single Project Page
- [ ] Performance: 90+
- [ ] Accessibility: 95+
- [ ] Best Practices: 95+
- [ ] SEO: 95+

#### Contact Page
- [ ] Performance: 90+
- [ ] Accessibility: 95+
- [ ] Best Practices: 95+
- [ ] SEO: 95+

### Bundle Size Analysis

Check generated file sizes:

```bash
cd hugo-static/public
find . -name "*.css" -exec du -h {} \; | sort -h
find . -name "*.js" -exec du -h {} \; | sort -h
```

**Target Sizes:**
- [ ] Main CSS: < 50KB (minified + gzipped)
- [ ] Main JS: < 30KB (minified + gzipped)
- [ ] Total page weight (homepage): < 500KB

### Image Optimization

- [ ] Images compressed appropriately
- [ ] Responsive images serve correct sizes
- [ ] Lazy loading implemented
- [ ] WebP format used where supported
- [ ] Alt text on all images
- [ ] No oversized images

### Loading Performance

Test loading times on various connections:

#### Fast 3G
- [ ] Homepage loads < 3s
- [ ] Time to interactive < 5s

#### Slow 3G
- [ ] Homepage loads < 5s
- [ ] Time to interactive < 8s

#### Desktop (Fast)
- [ ] Homepage loads < 1s
- [ ] Time to interactive < 2s

### Resource Optimization

- [ ] CSS minified
- [ ] JavaScript minified
- [ ] HTML minified
- [ ] No unused CSS
- [ ] No unused JavaScript
- [ ] Fonts optimized (font-display: swap)
- [ ] Resource hints implemented (preconnect, dns-prefetch)

---

## 6. Accessibility Testing

### Automated Testing

Use automated tools:

```bash
# Using axe DevTools or similar
# Check each page type
```

**Tools to use:**
- [ ] axe DevTools (Chrome extension)
- [ ] WAVE (Web Accessibility Evaluation Tool)
- [ ] Lighthouse accessibility audit

### Keyboard Navigation

- [ ] Tab through all interactive elements
- [ ] Tab order logical
- [ ] Focus indicators visible
- [ ] Skip to main content link works
- [ ] Dropdown menus accessible via keyboard
- [ ] Modal dialogs trap focus
- [ ] Escape key closes modals
- [ ] Enter key submits forms

### Screen Reader Testing

Test with screen readers (if available):
- NVDA (Windows)
- JAWS (Windows)
- VoiceOver (macOS/iOS)

**Verify:**
- [ ] Proper heading hierarchy (h1, h2, h3)
- [ ] Alt text on images
- [ ] ARIA labels on interactive elements
- [ ] Form labels read correctly
- [ ] Error messages announced
- [ ] Dynamic content changes announced
- [ ] Landmark regions defined

### Visual Accessibility

- [ ] Color contrast ratios meet WCAG AA (4.5:1 for text)
- [ ] No reliance on color alone for information
- [ ] Text resizable to 200% without breaking layout
- [ ] Content readable without CSS
- [ ] No flashing content (seizure risk)
- [ ] Animations respect prefers-reduced-motion

### Form Accessibility

- [ ] Labels associated with inputs
- [ ] Required fields indicated
- [ ] Error messages clear and helpful
- [ ] Error states announced to screen readers
- [ ] Placeholder text not used as labels
- [ ] Focus management in multi-step forms

---

## 7. SEO Validation

### Meta Tags

For each page type, verify:

- [ ] Title tag present and unique
- [ ] Title tag length < 60 characters
- [ ] Meta description present and unique
- [ ] Meta description length 150-160 characters
- [ ] Meta keywords (if used)
- [ ] Canonical URL set correctly
- [ ] Robots meta tag appropriate

### Open Graph Tags

- [ ] og:title
- [ ] og:description
- [ ] og:image (correct size: 1200x630)
- [ ] og:url
- [ ] og:type
- [ ] og:locale
- [ ] og:locale:alternate (for other languages)

### Twitter Cards

- [ ] twitter:card
- [ ] twitter:title
- [ ] twitter:description
- [ ] twitter:image
- [ ] twitter:site

### Structured Data

Validate JSON-LD structured data:

```bash
# Use Google's Structured Data Testing Tool
# https://search.google.com/test/rich-results
```

**Verify schemas:**
- [ ] Organization (homepage)
- [ ] WebSite with SearchAction (homepage)
- [ ] Article (project pages)
- [ ] Event (event pages)
- [ ] Course (workshop pages)
- [ ] BreadcrumbList (all pages)

### Hreflang Tags

- [ ] Self-referencing hreflang present
- [ ] Hreflang for each language version
- [ ] x-default hreflang set
- [ ] Hreflang URLs absolute, not relative

### Sitemap & Robots

- [ ] sitemap.xml generated
- [ ] Sitemap contains all pages
- [ ] Sitemap URLs absolute
- [ ] robots.txt present
- [ ] robots.txt allows/disallows correctly based on environment
- [ ] robots.txt references sitemap

### URL Structure

- [ ] URLs human-readable
- [ ] URLs use hyphens, not underscores
- [ ] No special characters in URLs
- [ ] Consistent trailing slash usage
- [ ] Language prefix consistent (/en/)

---

## 8. Testing Scripts

### Build Script

Create `hugo-static/scripts/test-build.sh`:

```bash
#!/bin/bash

echo "🔨 Testing Hugo Build..."

cd "$(dirname "$0")/.." || exit 1

# Clean previous build
rm -rf public resources

# Build with verbose output
if hugo --gc --minify --verbose; then
    echo "✅ Build successful!"

    # Check for generated files
    if [ -f "public/index.html" ]; then
        echo "✅ Homepage generated"
    else
        echo "❌ Homepage missing!"
        exit 1
    fi

    if [ -f "public/sitemap.xml" ]; then
        echo "✅ Sitemap generated"
    else
        echo "❌ Sitemap missing!"
        exit 1
    fi

    if [ -f "public/robots.txt" ]; then
        echo "✅ Robots.txt generated"
    else
        echo "❌ Robots.txt missing!"
        exit 1
    fi

    echo "✅ All tests passed!"
else
    echo "❌ Build failed!"
    exit 1
fi
```

### Link Checker Script

Create `hugo-static/scripts/check-links.sh`:

```bash
#!/bin/bash

echo "🔗 Checking internal links..."

cd "$(dirname "$0")/.." || exit 1

# Requires: npm install -g broken-link-checker
# Or use: wget --spider -r -nd -nv -l 3 http://localhost:1313 2>&1 | grep -B1 'broken link'

if command -v blc &> /dev/null; then
    blc http://localhost:1313 -ro --filter-level 3
else
    echo "⚠️  Install broken-link-checker: npm install -g broken-link-checker"
    exit 1
fi
```

### Performance Test Script

Create `hugo-static/scripts/test-performance.sh`:

```bash
#!/bin/bash

echo "⚡ Testing Performance..."

cd "$(dirname "$0")/.." || exit 1

# Requires: npm install -g lighthouse
if command -v lighthouse &> /dev/null; then
    lighthouse http://localhost:1313 \
        --output html \
        --output-path ./reports/lighthouse-report.html \
        --chrome-flags="--headless"

    echo "✅ Report generated: reports/lighthouse-report.html"
else
    echo "⚠️  Install Lighthouse: npm install -g lighthouse"
    exit 1
fi
```

### Bundle Size Check Script

Create `hugo-static/scripts/check-bundle-size.sh`:

```bash
#!/bin/bash

echo "📦 Checking bundle sizes..."

cd "$(dirname "$0")/.." || exit 1

if [ ! -d "public" ]; then
    echo "❌ No build found. Run 'hugo' first."
    exit 1
fi

echo ""
echo "CSS Files:"
find public -name "*.css" -exec du -h {} \; | sort -h

echo ""
echo "JavaScript Files:"
find public -name "*.js" -exec du -h {} \; | sort -h

echo ""
echo "Total Size:"
du -sh public

echo ""
echo "Largest Files:"
find public -type f -exec du -h {} \; | sort -rh | head -20
```

### Accessibility Test Script

Create `hugo-static/scripts/test-accessibility.sh`:

```bash
#!/bin/bash

echo "♿ Testing Accessibility..."

cd "$(dirname "$0")/.." || exit 1

# Requires: npm install -g pa11y
if command -v pa11y &> /dev/null; then
    pa11y http://localhost:1313 --standard WCAG2AA
    pa11y http://localhost:1313/contact --standard WCAG2AA
    pa11y http://localhost:1313/projects --standard WCAG2AA
else
    echo "⚠️  Install pa11y: npm install -g pa11y"
    exit 1
fi
```

---

## 9. Test Execution Workflow

### Step 1: Pre-Testing Setup

1. Build the site:
   ```bash
   cd hugo-static
   hugo --gc --minify
   ```

2. Start development server:
   ```bash
   hugo server -D
   ```

3. Open browser to http://localhost:1313

### Step 2: Automated Tests

Run all automated tests:

```bash
cd hugo-static/scripts
chmod +x *.sh
./test-build.sh
./check-links.sh
./check-bundle-size.sh
```

### Step 3: Manual Tests

1. Complete Cross-Browser Testing checklist
2. Complete Responsive Testing checklist
3. Complete Content Verification checklist
4. Complete Accessibility Testing checklist

### Step 4: Performance & SEO

1. Run Lighthouse audits on key pages
2. Validate structured data
3. Check sitemap and robots.txt
4. Verify hreflang implementation

### Step 5: Documentation

1. Document all issues found
2. Create GitHub issues for bugs
3. Prioritize fixes (P0, P1, P2, P3)
4. Update this checklist with results

---

## 10. Issue Tracking Template

When you find issues, document them:

```markdown
## Issue: [Brief Description]

**Severity:** P0 (Critical) / P1 (High) / P2 (Medium) / P3 (Low)
**Category:** Build / Cross-Browser / Responsive / Content / Performance / Accessibility / SEO
**Browser/Device:** [Specify if applicable]
**Page:** [URL or page type]

**Description:**
[Detailed description of the issue]

**Steps to Reproduce:**
1.
2.
3.

**Expected Behavior:**
[What should happen]

**Actual Behavior:**
[What actually happens]

**Screenshots:**
[If applicable]

**Proposed Fix:**
[If known]
```

---

## 11. Sign-Off Criteria

Phase 9 is complete when:

- [ ] All build tests pass
- [ ] No critical (P0) issues
- [ ] < 5 high priority (P1) issues
- [ ] Cross-browser testing complete for all major browsers
- [ ] Responsive testing complete for all breakpoints
- [ ] All core pages accessible and functional
- [ ] Lighthouse scores meet targets (90+ performance, 95+ others)
- [ ] No accessibility violations (WCAG AA)
- [ ] Structured data validates
- [ ] All internal links work
- [ ] Forms function correctly
- [ ] Multi-language support verified
- [ ] Testing documentation complete

---

**Testing Owner:** [Name]
**Testing Start Date:** [Date]
**Testing End Date:** [Date]
**Status:** [Not Started / In Progress / Complete]
