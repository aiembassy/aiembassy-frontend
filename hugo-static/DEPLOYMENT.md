# Deployment Guide - AI Embassy Hugo Site

This comprehensive guide covers all deployment options for the AI Embassy Hugo static site.

**Last Updated:** 2025-11-17
**Hugo Version:** 0.139.3 Extended
**Status:** Production Ready

---

## Table of Contents

1. [Pre-Deployment Checklist](#pre-deployment-checklist)
2. [Deployment Options](#deployment-options)
3. [Netlify Deployment](#netlify-deployment)
4. [Vercel Deployment](#vercel-deployment)
5. [Cloudflare Pages Deployment](#cloudflare-pages-deployment)
6. [GitHub Pages Deployment](#github-pages-deployment)
7. [Custom Server Deployment](#custom-server-deployment)
8. [Environment Configuration](#environment-configuration)
9. [Post-Deployment Steps](#post-deployment-steps)
10. [Monitoring & Maintenance](#monitoring--maintenance)
11. [Rollback Procedures](#rollback-procedures)
12. [Troubleshooting](#troubleshooting)

---

## Pre-Deployment Checklist

Before deploying, ensure all these items are complete:

### Code Quality
- [ ] All tests pass (`./scripts/run-all-tests.sh`)
- [ ] Build completes without errors (`hugo --gc --minify`)
- [ ] No broken links
- [ ] All content reviewed and approved
- [ ] Translations verified (Polish & English)

### Performance
- [ ] Lighthouse scores meet targets (≥90 Performance, ≥95 others)
- [ ] Images optimized
- [ ] Bundle sizes within limits (CSS <50KB, JS <30KB)
- [ ] Core Web Vitals acceptable

### SEO
- [ ] Meta tags verified
- [ ] Structured data validated
- [ ] Sitemap generated
- [ ] Robots.txt configured
- [ ] Hreflang tags correct

### Security
- [ ] Security headers configured
- [ ] HTTPS enforced
- [ ] CSP policy defined
- [ ] No sensitive data in repository

### Configuration
- [ ] Base URL set to production domain
- [ ] API endpoints configured
- [ ] Analytics tracking code added (if applicable)
- [ ] Environment variables documented

---

## Deployment Options

Choose the deployment platform that best fits your needs:

| Platform | Best For | Free Tier | Build Time | CDN | Difficulty |
|----------|----------|-----------|------------|-----|------------|
| **Netlify** | Quick setup, great DX | ✅ Generous | Fast | Global | ⭐ Easy |
| **Vercel** | Next.js migrations | ✅ Good | Very Fast | Global | ⭐ Easy |
| **Cloudflare Pages** | Advanced CDN, DDoS | ✅ Excellent | Fast | 275+ POPs | ⭐⭐ Moderate |
| **GitHub Pages** | Simple, git-based | ✅ Limited | Moderate | Limited | ⭐⭐ Moderate |
| **Custom Server** | Full control | ❌ Cost varies | Manual | Optional | ⭐⭐⭐ Advanced |

**Recommended:** Netlify (easiest) or Cloudflare Pages (best performance)

---

## Netlify Deployment

### Quick Start (Fastest)

1. **Connect Repository:**
   - Go to [app.netlify.com](https://app.netlify.com/)
   - Click "New site from Git"
   - Choose GitHub and select `aiembassy-frontend`
   - Netlify will auto-detect Hugo

2. **Configuration:**
   - Build command: `cd hugo-static && hugo --gc --minify`
   - Publish directory: `hugo-static/public`
   - Hugo version: `0.139.3`

3. **Deploy:**
   - Click "Deploy site"
   - Wait ~2 minutes for build
   - Site live at `[random-name].netlify.app`

### Advanced Configuration

The repository includes `netlify.toml` with:
- Production build settings
- Deploy preview configuration
- Security headers
- Cache control
- Custom redirects

**Environment Variables:**
```
HUGO_VERSION=0.139.3
HUGO_ENV=production
HUGO_ENABLEGITINFO=true
```

**Custom Domain:**
1. Domain settings → Add custom domain
2. Enter `aiembassy.org`
3. Configure DNS (automatic or manual)
4. Enable HTTPS (automatic with Let's Encrypt)

**Deploy Previews:**
- Automatic for all pull requests
- URL: `deploy-preview-[pr-number]--[site-name].netlify.app`

### Netlify Features

✅ **Included Free:**
- 300 build minutes/month
- 100GB bandwidth/month
- Automatic HTTPS
- Deploy previews
- Form handling
- Serverless functions
- Split testing (A/B)

---

## Vercel Deployment

### Quick Start

1. **Import Project:**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Import `aiembassy-frontend` from GitHub
   - Vercel auto-detects repository

2. **Configure:**
   - Framework Preset: Other
   - Root Directory: `./`
   - Build Command: `cd hugo-static && hugo --gc --minify`
   - Output Directory: `hugo-static/public`

3. **Environment Variables:**
   ```
   HUGO_VERSION=0.139.3
   HUGO_ENV=production
   ```

4. **Deploy:**
   - Click "Deploy"
   - Site live at `[project-name].vercel.app`

### Advanced Configuration

The repository includes `vercel.json` with:
- Build configuration
- Security headers
- Cache control
- Redirects

**Custom Domain:**
1. Project Settings → Domains
2. Add `aiembassy.org`
3. Configure DNS records
4. Auto HTTPS

**Preview Deployments:**
- Automatic for Git branches
- Unique URL per branch/PR

---

## Cloudflare Pages Deployment

See **[CLOUDFLARE_PAGES.md](./CLOUDFLARE_PAGES.md)** for detailed guide.

### Quick Start

1. **Connect Repository:**
   - Dashboard → Pages → Create project
   - Connect to Git → Select repository

2. **Build Settings:**
   - Build command: `cd hugo-static && hugo --gc --minify`
   - Build output: `hugo-static/public`
   - Environment: `HUGO_VERSION=0.139.3`

3. **Deploy:**
   - Click "Save and Deploy"
   - Live at `[project-name].pages.dev`

### Why Cloudflare Pages?

- ✅ Unlimited bandwidth
- ✅ Unlimited builds
- ✅ 275+ CDN locations
- ✅ Advanced DDoS protection
- ✅ Best global performance
- ✅ Free analytics

---

## GitHub Pages Deployment

### Using GitHub Actions

The repository includes `.github/workflows/hugo-deploy.yml`.

1. **Enable GitHub Pages:**
   - Repository Settings → Pages
   - Source: GitHub Actions

2. **Push to Main:**
   - Workflow runs automatically
   - Builds Hugo site
   - Deploys to GitHub Pages

3. **Access Site:**
   - `https://[username].github.io/aiembassy-frontend/`
   - Or custom domain: `aiembassy.org`

### Custom Domain

1. **Add CNAME:**
   - Create `hugo-static/static/CNAME`
   - Content: `aiembassy.org`

2. **Configure DNS:**
   ```
   Type: A
   Name: @
   Value: 185.199.108.153
          185.199.109.153
          185.199.110.153
          185.199.111.153

   Type: CNAME
   Name: www
   Value: [username].github.io
   ```

3. **Enable in Settings:**
   - Settings → Pages → Custom domain
   - Enter `aiembassy.org`
   - Enforce HTTPS

---

## Custom Server Deployment

### Requirements

- Server with Hugo installed
- Web server (Nginx, Apache, Caddy)
- SSL certificate
- Domain configured

### Build Locally

```bash
cd hugo-static
hugo --gc --minify --environment production
```

### Deploy via SCP

```bash
scp -r hugo-static/public/* user@server:/var/www/aiembassy.org/
```

### Deploy via Rsync

```bash
rsync -avz --delete hugo-static/public/ user@server:/var/www/aiembassy.org/
```

### Nginx Configuration

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name aiembassy.org www.aiembassy.org;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name aiembassy.org www.aiembassy.org;

    ssl_certificate /etc/letsencrypt/live/aiembassy.org/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/aiembassy.org/privkey.pem;

    root /var/www/aiembassy.org;
    index index.html;

    # Security headers
    add_header X-Frame-Options "DENY" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;

    # Cache static assets
    location ~* \.(css|js|jpg|jpeg|png|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # HTML caching
    location ~* \.html$ {
        expires 1h;
        add_header Cache-Control "public, must-revalidate";
    }

    # SPA-style routing
    location / {
        try_files $uri $uri/ /404.html;
    }

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_types text/plain text/css text/xml text/javascript application/javascript application/xml+rss application/json;
}
```

### Apache Configuration

```apache
<VirtualHost *:80>
    ServerName aiembassy.org
    ServerAlias www.aiembassy.org
    Redirect permanent / https://aiembassy.org/
</VirtualHost>

<VirtualHost *:443>
    ServerName aiembassy.org
    ServerAlias www.aiembassy.org

    DocumentRoot /var/www/aiembassy.org

    SSLEngine on
    SSLCertificateFile /etc/letsencrypt/live/aiembassy.org/fullchain.pem
    SSLCertificateKeyFile /etc/letsencrypt/live/aiembassy.org/privkey.pem

    # Security headers
    Header always set X-Frame-Options "DENY"
    Header always set X-Content-Type-Options "nosniff"
    Header always set X-XSS-Protection "1; mode=block"

    # Cache control
    <FilesMatch "\.(css|js|jpg|jpeg|png|gif|ico|svg|woff|woff2)$">
        Header set Cache-Control "max-age=31536000, public, immutable"
    </FilesMatch>

    <FilesMatch "\.html$">
        Header set Cache-Control "max-age=3600, public, must-revalidate"
    </FilesMatch>

    # Compression
    <IfModule mod_deflate.c>
        AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
    </IfModule>

    <Directory /var/www/aiembassy.org>
        Options -Indexes +FollowSymLinks
        AllowOverride None
        Require all granted

        # SPA-style routing
        FallbackResource /404.html
    </Directory>
</VirtualHost>
```

---

## Environment Configuration

### Production Environment

```toml
# config/production/config.toml
baseURL = "https://aiembassy.org/"
environment = "production"
buildDrafts = false
buildFuture = false
enableGitInfo = true
```

### Staging Environment

```toml
# config/staging/config.toml
baseURL = "https://staging.aiembassy.org/"
environment = "staging"
buildDrafts = true
buildFuture = true
```

### Development Environment

```toml
# config/development/config.toml (or use _default)
baseURL = "http://localhost:1313/"
environment = "development"
buildDrafts = true
buildFuture = true
```

---

## Post-Deployment Steps

### Immediate (Within 1 Hour)

1. **Verify Deployment:**
   - [ ] Site loads at production URL
   - [ ] All pages accessible
   - [ ] No 404 errors
   - [ ] No console errors

2. **Test Core Functionality:**
   - [ ] Navigation works
   - [ ] Language switcher works
   - [ ] Forms submit correctly
   - [ ] Images load
   - [ ] Mobile menu works

3. **Performance Check:**
   - [ ] Run Lighthouse audit
   - [ ] Check Core Web Vitals
   - [ ] Test loading speed

4. **SEO Verification:**
   - [ ] Submit sitemap to Google Search Console
   - [ ] Submit sitemap to Bing Webmaster Tools
   - [ ] Verify structured data with Rich Results Test
   - [ ] Check robots.txt is accessible

### First 24 Hours

5. **Monitor Analytics:**
   - [ ] Set up Google Analytics (if not already)
   - [ ] Monitor error rates
   - [ ] Check traffic patterns
   - [ ] Review user behavior

6. **Search Engine Indexing:**
   - [ ] Verify site is indexed by Google
   - [ ] Check search console for errors
   - [ ] Monitor crawl stats

### First Week

7. **Performance Monitoring:**
   - [ ] Monitor Core Web Vitals in Search Console
   - [ ] Check error logs
   - [ ] Review analytics for issues

8. **User Feedback:**
   - [ ] Monitor support channels
   - [ ] Review user feedback
   - [ ] Address critical issues

---

## Monitoring & Maintenance

### Performance Monitoring

**Tools:**
- Google PageSpeed Insights
- WebPageTest
- Lighthouse CI
- Cloudflare Analytics / Netlify Analytics

**Key Metrics:**
- Largest Contentful Paint (LCP): < 2.5s
- First Input Delay (FID): < 100ms
- Cumulative Layout Shift (CLS): < 0.1
- Time to First Byte (TTFB): < 800ms

### Uptime Monitoring

**Recommended Services:**
- UptimeRobot (free)
- Pingdom
- StatusCake
- Better Uptime

**Set Up:**
1. Monitor main URL
2. Check every 5 minutes
3. Alert on downtime
4. Monitor SSL certificate expiry

### Error Monitoring

**Log Collection:**
- Netlify: Built-in logs
- Vercel: Built-in logs
- Cloudflare: Real-time logs
- Custom server: Nginx/Apache logs

**Error Tracking:**
- Sentry (optional)
- LogRocket (optional)
- Google Search Console

---

## Rollback Procedures

### Platform-Specific Rollback

**Netlify:**
1. Go to Deploys tab
2. Find last working deployment
3. Click "Publish deploy"

**Vercel:**
1. Go to Deployments
2. Find previous deployment
3. Click "Promote to Production"

**Cloudflare Pages:**
1. Go to Deployments
2. Select working deployment
3. Click "Rollback to this deployment"

**GitHub Pages:**
1. Revert commit in Git
2. Push to main branch
3. Wait for workflow to complete

### Git-Based Rollback

```bash
# Find commit hash of last working version
git log --oneline

# Revert to that commit
git revert [commit-hash]

# Or reset (use with caution)
git reset --hard [commit-hash]

# Push to trigger new deployment
git push origin main
```

---

## Troubleshooting

### Common Issues

**Issue:** Build fails with "Hugo not found"
- **Solution:** Check Hugo version in environment variables
- **Platform:** All

**Issue:** "SCSS compilation failed"
- **Solution:** Ensure using Hugo Extended (not standard)
- **Platform:** All

**Issue:** Blank page / No content
- **Solution:** Check build output directory path
- **Verify:** Should be `hugo-static/public`

**Issue:** CSS/JS not loading (404)
- **Solution:** Verify baseURL matches deployment URL
- **Check:** `config/_default/config.toml` or environment config

**Issue:** Images not displaying
- **Solution:** Ensure images are in `static/images/` or use Hugo's image processing
- **Check:** Image paths in templates

**Issue:** Forms not submitting
- **Solution:** Verify API endpoints in `config/_default/params.toml`
- **Check:** CORS settings on API server

**Issue:** Slow build times
- **Solution:** Reduce image sizes, enable caching, optimize content
- **Check:** Build logs for bottlenecks

### Getting Help

1. **Check Documentation:**
   - [TESTING.md](./TESTING.md)
   - [BUILD_VERIFICATION.md](./BUILD_VERIFICATION.md)
   - [QA_SUMMARY.md](./QA_SUMMARY.md)

2. **Review Logs:**
   - Platform build logs
   - Browser console
   - Server error logs

3. **Community Support:**
   - [Hugo Forums](https://discourse.gohugo.io/)
   - Platform-specific support channels

---

## Deployment Comparison Matrix

| Feature | Netlify | Vercel | Cloudflare Pages | GitHub Pages |
|---------|---------|--------|------------------|--------------|
| **Setup Time** | 5 min | 5 min | 10 min | 15 min |
| **Build Time** | ~2 min | ~1-2 min | ~2 min | ~3-5 min |
| **Free Bandwidth** | 100GB | 100GB | Unlimited | 100GB |
| **Free Builds** | 300 min/mo | 6000 min/mo | Unlimited | Unlimited |
| **CDN POPs** | 100+ | 100+ | 275+ | Limited |
| **DDoS Protection** | Basic | Basic | Advanced | Basic |
| **Deploy Previews** | ✅ | ✅ | ✅ | ❌ |
| **Custom Headers** | ✅ | ✅ | ✅ | Limited |
| **Redirects** | ✅ | ✅ | ✅ | Limited |
| **Forms** | ✅ | ❌ | ❌ | ❌ |
| **Functions** | ✅ | ✅ | ✅ | ❌ |
| **Analytics** | 💰 Paid | 💰 Paid | ✅ Free | ❌ |
| **A/B Testing** | ✅ | ❌ | ✅ | ❌ |

---

**Next Steps:** Choose your deployment platform and follow the corresponding section above.

**Support:** For deployment issues, refer to platform-specific documentation or raise an issue in the repository.

**Last Updated:** 2025-11-17
