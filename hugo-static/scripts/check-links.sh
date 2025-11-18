#!/bin/bash

echo "🔗 Checking internal links..."

cd "$(dirname "$0")/.." || exit 1

# Check if Hugo server is running
if ! curl -s http://localhost:1313 > /dev/null 2>&1; then
    echo "❌ Hugo server not running!"
    echo "   Start it with: hugo server -D"
    exit 1
fi

# Method 1: Using broken-link-checker (if installed)
if command -v blc &> /dev/null; then
    echo "Using broken-link-checker..."
    blc http://localhost:1313 \
        --recursive \
        --ordered \
        --filter-level 3 \
        --exclude linkedin.com \
        --exclude facebook.com \
        --exclude twitter.com
    exit $?
fi

# Method 2: Using wget
if command -v wget &> /dev/null; then
    echo "Using wget spider..."
    wget \
        --spider \
        --recursive \
        --no-directories \
        --no-verbose \
        --level 3 \
        --wait 1 \
        --reject-regex '(linkedin|facebook|twitter|instagram)' \
        http://localhost:1313 2>&1 | grep -B1 'broken link'

    if [ $? -eq 0 ]; then
        echo "❌ Broken links found!"
        exit 1
    else
        echo "✅ No broken links detected!"
        exit 0
    fi
fi

# Fallback: Manual check recommendation
echo "⚠️  No link checker found!"
echo ""
echo "Install one of the following:"
echo "  npm install -g broken-link-checker"
echo "  apt-get install wget"
echo ""
echo "Or manually check links at: http://localhost:1313"
exit 1
