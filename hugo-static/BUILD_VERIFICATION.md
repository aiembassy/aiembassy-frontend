# Build Verification Guide

This guide helps verify that the Hugo static site builds correctly and all components are functioning as expected.

## Prerequisites

### Required Software

1. **Hugo Extended** (v0.100.0 or higher)
   ```bash
   # Install on macOS
   brew install hugo

   # Install on Linux
   snap install hugo --channel=extended

   # Verify installation
   hugo version
   ```

2. **Node.js** (v14.x or higher) - Optional for testing tools
   ```bash
   node --version
   npm --version
   ```

### Optional Testing Tools

```bash
# Link checker
npm install -g broken-link-checker

# Performance testing
npm install -g lighthouse

# Accessibility testing
npm install -g pa11y

# JSON parsing for reports
# Linux: apt-get install jq
# macOS: brew install jq
```

## Build Process

### Development Build

For local development with live reload:

```bash
cd hugo-static
hugo server -D --verbose
```

**What this does:**
- Starts local server on http://localhost:1313
- Includes draft content (`-D`)
- Enables live reload
- Shows verbose output for debugging

**Verify:**
- Server starts without errors
- No template parsing errors
- No SCSS compilation errors
- Can access site at http://localhost:1313

### Production Build

For production deployment:

```bash
cd hugo-static
hugo --gc --minify --verbose
```

**What this does:**
- Builds site to `public/` directory
- Garbage collection (`--gc`) removes unused cache files
- Minifies HTML, CSS, and JS (`--minify`)
- Shows verbose output

**Verify:**
- Build completes without errors
- `public/` directory created
- All expected files generated

## Build Verification Checklist

### 1. File Generation

After running `hugo --gc --minify`, verify these files exist:

#### Root Files
```bash
ls public/
```

Expected:
- [ ] `index.html` - Homepage (Polish)
- [ ] `sitemap.xml` - Site map
- [ ] `robots.txt` - Robots file
- [ ] `404.html` - Error page

#### Language Directories
```bash
ls public/en/
```

Expected:
- [ ] `public/en/index.html` - English homepage
- [ ] English versions of all content

#### Content Sections
```bash
ls public/projects/
ls public/events/
ls public/workshops/
ls public/contact/
ls public/donation/
```

Expected:
- [ ] Each section has `index.html` (list page)
- [ ] Individual items have their own directories

#### Assets
```bash
ls public/css/
ls public/js/
ls public/images/
```

Expected:
- [ ] `public/css/main.*.css` (with hash)
- [ ] `public/js/main.*.js` (with hash)
- [ ] All images from `static/images/` copied

### 2. Build Output Analysis

Check the build output for:

```
                   |  EN  |  PL
-------------------+------+------
  Pages            |   XX |  XX
  Paginator pages  |    0 |   0
  Non-page files   |    0 |   0
  Static files     |  XXX |  XXX
  Processed images |    X |   X
  Aliases          |    X |   X
  Sitemaps         |    2 |   2
  Cleaned          |    0 |   0
```

**Verify:**
- [ ] Pages generated for both languages
- [ ] Static files copied
- [ ] Sitemaps created
- [ ] No errors or warnings

### 3. Content Verification

Use the automated script:

```bash
cd hugo-static
scripts/test-build.sh
```

Or manually verify:

#### Polish Content (Default)
```bash
# Homepage
ls public/index.html

# Projects
ls public/projects/index.html
ls public/projects/smogspots/index.html

# Events
ls public/events/index.html
ls public/events/*/index.html

# Workshops
ls public/workshops/index.html
ls public/workshops/*/index.html

# Special pages
ls public/contact/index.html
ls public/donation/index.html
```

#### English Content
```bash
# Homepage
ls public/en/index.html

# Projects
ls public/en/projects/index.html
ls public/en/projects/smogspots/index.html

# Events
ls public/en/events/index.html

# Workshops
ls public/en/workshops/index.html

# Special pages
ls public/en/contact/index.html
ls public/en/donation/index.html
```

### 4. Asset Verification

#### CSS Files

```bash
find public -name "*.css" -type f
```

Expected:
- Main stylesheet(s) in `public/css/`
- Minified (no whitespace)
- Fingerprinted (contains hash in filename)

Check size:
```bash
du -h public/css/*.css
```

Target: < 50KB per file (minified)

#### JavaScript Files

```bash
find public -name "*.js" -type f
```

Expected:
- Main JavaScript in `public/js/`
- Minified
- Fingerprinted

Check size:
```bash
du -h public/js/*.js
```

Target: < 30KB per file (minified)

#### Images

```bash
find public/images -type f | head -20
```

Expected:
- All images from `static/images/` present
- Proper directory structure maintained
- No broken image references

### 5. Template Verification

Check that templates render correctly:

```bash
# Homepage
grep -l "class=\"hero\"" public/index.html

# Navigation
grep -l "class=\"menu\"" public/index.html

# Footer
grep -l "class=\"footer\"" public/index.html
```

Each should return the file path if element exists.

### 6. Language Switching

Verify language switcher links:

```bash
# Check Polish page has English link
grep "href=\"/en/\"" public/index.html

# Check English page has Polish link
grep "href=\"/\"" public/en/index.html
```

### 7. SEO Elements

#### Meta Tags

```bash
# Check title tag
grep "<title>" public/index.html

# Check meta description
grep "meta name=\"description\"" public/index.html

# Check Open Graph tags
grep "og:title" public/index.html
grep "og:description" public/index.html
grep "og:image" public/index.html
```

#### Structured Data

```bash
# Check JSON-LD
grep "application/ld+json" public/index.html
```

#### Hreflang Tags

```bash
# Check hreflang
grep "hreflang" public/index.html
```

Expected:
- Self-referencing hreflang
- Alternate language hreflang
- x-default hreflang

#### Sitemap

```bash
# Verify sitemap exists and is valid XML
xmllint --noout public/sitemap.xml 2>&1

# Or check manually
head -20 public/sitemap.xml
```

Expected:
- Valid XML format
- Contains all pages
- Absolute URLs
- References to language variants

#### Robots.txt

```bash
cat public/robots.txt
```

Expected for production:
```
User-agent: *
Allow: /
Sitemap: https://aiembassy.org/sitemap.xml
```

## Common Build Issues

### Issue: Build fails with template error

**Symptoms:**
```
ERROR: template: ... executing "..." at <...>: ...
```

**Solutions:**
1. Check template syntax in the referenced file
2. Verify variable names and Hugo functions
3. Check for missing partials
4. Ensure all required parameters are defined

### Issue: SCSS compilation error

**Symptoms:**
```
ERROR: SCSS processing failed
```

**Solutions:**
1. Check for syntax errors in SCSS files
2. Verify import paths in `main.scss`
3. Ensure all SCSS variables are defined
4. Check for missing SCSS partials

### Issue: Content not showing

**Symptoms:**
- Pages build but content is empty or incorrect

**Solutions:**
1. Check front matter in content files
2. Verify date is not in future (unless using `--buildFuture`)
3. Check if content is marked as draft
4. Verify language directory structure

### Issue: Images not loading

**Symptoms:**
- Images don't appear or show broken links

**Solutions:**
1. Check image paths in templates
2. Verify images exist in `static/images/`
3. Check baseURL in `config.toml`
4. Try absolute URLs for images

### Issue: JavaScript not working

**Symptoms:**
- Interactive features don't work
- Console shows errors

**Solutions:**
1. Check JavaScript syntax
2. Verify script is included in templates
3. Check script loading order
4. Ensure DOM is loaded before script execution

### Issue: Language switching broken

**Symptoms:**
- Language switcher doesn't work
- Shows 404 on language switch

**Solutions:**
1. Verify content exists in both languages
2. Check language configuration in `config/_default/languages.toml`
3. Ensure `defaultContentLanguageInSubdir = false` for default language
4. Verify translation links in templates

## Automated Build Test

Run the automated build verification:

```bash
cd hugo-static
chmod +x scripts/test-build.sh
./scripts/test-build.sh
```

This script:
1. Cleans previous build
2. Runs production build
3. Checks for essential files
4. Verifies language content
5. Checks asset generation
6. Reports build statistics

Expected output:
```
🔨 Testing Hugo Build...
✅ Build successful!
✅ Homepage generated
✅ Sitemap generated
✅ Robots.txt generated
✅ English content generated
✅ CSS files generated
✅ JavaScript files generated

✅ All tests passed!

Build Statistics:
  Total pages: XX
  Total size: XXM
```

## Manual Verification

### Visual Inspection

After building, start a local server:

```bash
cd hugo-static/public
python3 -m http.server 8000
```

Visit http://localhost:8000 and verify:

1. **Homepage:**
   - [ ] Hero section displays
   - [ ] All sections present
   - [ ] Images load
   - [ ] Styles applied
   - [ ] Navigation works

2. **Navigation:**
   - [ ] Menu items work
   - [ ] Language switcher works
   - [ ] Mobile menu works (resize browser)

3. **Content Pages:**
   - [ ] Project pages load
   - [ ] Event pages load
   - [ ] Workshop pages load
   - [ ] Content displays correctly
   - [ ] Prev/Next navigation works

4. **Forms:**
   - [ ] Contact form displays
   - [ ] Donation page displays
   - [ ] Validation works
   - [ ] Honeypot field hidden

5. **Footer:**
   - [ ] Social links work
   - [ ] Footer content displays

### Browser Console Check

Open browser DevTools (F12) and check:

- [ ] No JavaScript errors
- [ ] No 404 errors for assets
- [ ] No CORS errors
- [ ] No mixed content warnings

## Build Optimization Checklist

- [ ] Minification enabled (`--minify`)
- [ ] Garbage collection enabled (`--gc`)
- [ ] Images optimized (appropriate sizes, formats)
- [ ] CSS optimized (no unused styles)
- [ ] JavaScript optimized (no unused code)
- [ ] Fonts optimized (woff2 format, font-display: swap)
- [ ] Resource hints configured (preconnect, dns-prefetch)
- [ ] Cache headers configured (server-level)

## Performance Targets

After building, verify performance:

- [ ] Total build size < 5MB
- [ ] Main CSS < 50KB (minified + gzipped)
- [ ] Main JS < 30KB (minified + gzipped)
- [ ] Build time < 5 seconds
- [ ] Homepage size < 500KB
- [ ] Images optimized (use WebP where possible)

Check with:
```bash
./scripts/check-bundle-size.sh
```

## Next Steps After Successful Build

1. ✅ Build verification complete
2. → Run cross-browser tests
3. → Run responsive tests
4. → Run performance audits
5. → Run accessibility tests
6. → Run SEO validation

See [TESTING.md](./TESTING.md) for comprehensive testing checklist.

---

**Last Updated:** 2025-11-17
**Hugo Version:** Extended v0.100.0+
