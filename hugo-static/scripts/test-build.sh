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

    # Check for language directories
    if [ -d "public/en" ]; then
        echo "✅ English content generated"
    else
        echo "⚠️  English content missing"
    fi

    # Check for critical assets
    if ls public/css/*.css 1> /dev/null 2>&1; then
        echo "✅ CSS files generated"
    else
        echo "❌ CSS files missing!"
        exit 1
    fi

    if ls public/js/*.js 1> /dev/null 2>&1; then
        echo "✅ JavaScript files generated"
    else
        echo "❌ JavaScript files missing!"
        exit 1
    fi

    echo ""
    echo "✅ All tests passed!"
    echo ""
    echo "Build Statistics:"
    echo "  Total pages: $(find public -name "index.html" | wc -l)"
    echo "  Total size: $(du -sh public | cut -f1)"
else
    echo "❌ Build failed!"
    exit 1
fi
