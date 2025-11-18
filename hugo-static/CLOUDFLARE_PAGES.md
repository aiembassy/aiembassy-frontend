# Cloudflare Pages Deployment Guide

This guide explains how to deploy the AI Embassy Hugo site to Cloudflare Pages.

## Prerequisites

- Cloudflare account
- Repository hosted on GitHub, GitLab, or Bitbucket
- Access to repository settings

## Deployment Steps

### 1. Connect Repository to Cloudflare Pages

1. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Navigate to **Pages** in the left sidebar
3. Click **Create a project**
4. Click **Connect to Git**
5. Select your Git provider (GitHub recommended)
6. Authorize Cloudflare Pages to access your repositories
7. Select the `aiembassy-frontend` repository

### 2. Configure Build Settings

Use the following configuration:

**Production Branch:**
```
main (or master)
```

**Build Configuration:**

| Setting | Value |
|---------|-------|
| Framework preset | None (or Hugo) |
| Build command | `cd hugo-static && hugo --gc --minify --environment production` |
| Build output directory | `hugo-static/public` |
| Root directory | `/` |

**Environment Variables:**

| Variable | Value |
|----------|-------|
| `HUGO_VERSION` | `0.139.3` |
| `HUGO_ENV` | `production` |
| `NODE_VERSION` | `18` |

### 3. Advanced Settings

#### Build Configuration

```yaml
# wrangler.toml (optional - for advanced configuration)
name = "ai-embassy"
compatibility_date = "2025-11-17"

[site]
  bucket = "./hugo-static/public"

[[redirects]]
  from = "/*"
  to = "/404.html"
  status = 404

# Custom headers
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    X-XSS-Protection = "1; mode=block"
    Referrer-Policy = "strict-origin-when-cross-origin"
    Permissions-Policy = "geolocation=(), microphone=(), camera=()"

[[headers]]
  for = "/css/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/js/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/images/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
```

### 4. Custom Domain Setup

1. In Cloudflare Pages project settings, go to **Custom domains**
2. Click **Set up a custom domain**
3. Enter your domain: `aiembassy.org`
4. Add `www.aiembassy.org` as an additional domain
5. Cloudflare will automatically configure DNS

**DNS Records (if manual setup needed):**

For `aiembassy.org`:
```
Type: CNAME
Name: @
Target: [your-project].pages.dev
Proxy: Enabled (orange cloud)
```

For `www.aiembassy.org`:
```
Type: CNAME
Name: www
Target: [your-project].pages.dev
Proxy: Enabled (orange cloud)
```

### 5. Branch Previews

Cloudflare Pages automatically creates preview deployments for:
- Pull requests
- Non-production branches

Preview URL format: `[branch-name].[project-name].pages.dev`

**Configure Branch Previews:**
1. Go to project **Settings** → **Builds & deployments**
2. Enable **Preview deployments**
3. Select branches to preview (or all branches)

### 6. Environment-Specific Configuration

**Production Environment:**
- Automatic deployment on push to `main`/`master`
- Uses production build command
- HUGO_ENV set to "production"

**Preview Environment:**
- Automatic deployment on PR or branch push
- Can use different build command if needed
- HUGO_ENV set to "staging"

### 7. Performance Optimization

Cloudflare Pages automatically provides:
- ✅ Global CDN distribution
- ✅ HTTP/3 support
- ✅ Automatic HTTPS/SSL
- ✅ DDoS protection
- ✅ Image optimization (via Cloudflare Polish)
- ✅ Brotli compression
- ✅ Smart routing

**Additional Optimizations:**

1. **Enable HTTP/3:**
   - Already enabled by default on Cloudflare

2. **Enable Early Hints:**
   - Go to **Speed** → **Optimization**
   - Enable **Early Hints**

3. **Enable Auto Minify:**
   - Go to **Speed** → **Optimization**
   - Enable Auto Minify for HTML, CSS, JS (Hugo already minifies, but this adds extra compression)

4. **Configure Caching:**
   - Go to **Caching** → **Configuration**
   - Set Browser Cache TTL to "Respect existing headers"

### 8. Analytics & Monitoring

**Cloudflare Web Analytics (Free):**
1. Go to **Analytics & Logs** → **Web Analytics**
2. Click **Set up Web Analytics**
3. Add the tracking script to your Hugo site (in `layouts/partials/scripts.html`)

**Usage Analytics:**
- View in Pages project → **Analytics** tab
- Monitor:
  - Requests per second
  - Bandwidth usage
  - Build frequency
  - Error rates

### 9. Build Notifications

Set up build notifications:
1. Go to project **Settings** → **Notifications**
2. Add notification destinations:
   - Email
   - Webhook
   - Slack (via webhook)

### 10. Rollback Strategy

If a deployment fails or has issues:

1. **Instant Rollback:**
   - Go to **Deployments** tab
   - Find the last working deployment
   - Click **⋮** (three dots) → **Rollback to this deployment**

2. **Git-based Rollback:**
   - Revert the problematic commit in Git
   - Push to trigger new deployment

## Deployment Checklist

Before deploying to Cloudflare Pages:

- [ ] Hugo Extended v0.139.3 specified in environment variables
- [ ] Build command correct: `cd hugo-static && hugo --gc --minify`
- [ ] Output directory correct: `hugo-static/public`
- [ ] Custom domain configured (if using)
- [ ] SSL/HTTPS enabled (automatic)
- [ ] Branch previews enabled
- [ ] Build notifications configured
- [ ] Analytics enabled (optional)
- [ ] Cache headers configured
- [ ] Security headers configured

## Troubleshooting

### Build Fails

**Issue:** "Hugo command not found"
- **Solution:** Ensure `HUGO_VERSION` environment variable is set

**Issue:** "SCSS compilation failed"
- **Solution:** Verify using Hugo Extended (not standard Hugo)

**Issue:** "Build timeout"
- **Solution:** Optimize build by reducing image sizes or number of pages

### Deployment Issues

**Issue:** "404 on all pages"
- **Solution:** Check build output directory is set to `hugo-static/public`

**Issue:** "CSS/JS not loading"
- **Solution:** Verify baseURL in Hugo config matches deployment URL

**Issue:** "Custom domain not working"
- **Solution:** Check DNS records and wait for propagation (up to 24 hours)

## Comparison: Cloudflare Pages vs Others

| Feature | Cloudflare Pages | Netlify | Vercel | GitHub Pages |
|---------|-----------------|---------|--------|--------------|
| Build minutes/month | Unlimited | 300 (free) | 6000 | Unlimited |
| Bandwidth | Unlimited | 100GB | 100GB | 100GB |
| CDN | Global (275+ cities) | Global | Global | Limited |
| Custom domains | Unlimited | 1 (free) | Unlimited | 1 |
| Branch previews | ✅ Yes | ✅ Yes | ✅ Yes | ❌ No |
| DDoS protection | ✅ Advanced | ✅ Basic | ✅ Basic | ✅ Basic |
| Analytics | ✅ Free | 💰 Paid | 💰 Paid | ❌ No |

## Additional Resources

- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [Hugo on Cloudflare Pages](https://developers.cloudflare.com/pages/framework-guides/deploy-a-hugo-site/)
- [Cloudflare Pages GitHub Integration](https://developers.cloudflare.com/pages/get-started/git-integration/)

---

**Last Updated:** 2025-11-17
**Recommended for:** Production deployment with advanced CDN and DDoS protection
