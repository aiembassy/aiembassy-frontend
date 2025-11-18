#!/bin/bash

echo "⚡ Testing Performance..."

cd "$(dirname "$0")/.." || exit 1

# Create reports directory if it doesn't exist
mkdir -p reports

# Check if Hugo server is running
if ! curl -s http://localhost:1313 > /dev/null 2>&1; then
    echo "❌ Hugo server not running!"
    echo "   Start it with: hugo server -D"
    exit 1
fi

# Check if Lighthouse is installed
if command -v lighthouse &> /dev/null; then
    echo "Running Lighthouse audits..."

    # Test homepage
    echo "Testing homepage..."
    lighthouse http://localhost:1313 \
        --output html \
        --output json \
        --output-path ./reports/lighthouse-homepage \
        --chrome-flags="--headless" \
        --quiet

    # Test contact page
    echo "Testing contact page..."
    lighthouse http://localhost:1313/contact \
        --output html \
        --output json \
        --output-path ./reports/lighthouse-contact \
        --chrome-flags="--headless" \
        --quiet

    # Test projects list
    echo "Testing projects page..."
    lighthouse http://localhost:1313/projects \
        --output html \
        --output json \
        --output-path ./reports/lighthouse-projects \
        --chrome-flags="--headless" \
        --quiet

    echo ""
    echo "✅ Lighthouse reports generated:"
    echo "   - reports/lighthouse-homepage.html"
    echo "   - reports/lighthouse-contact.html"
    echo "   - reports/lighthouse-projects.html"
    echo ""

    # Extract scores from JSON reports
    if command -v jq &> /dev/null; then
        echo "Performance Scores Summary:"
        echo "---"
        for report in reports/lighthouse-*.json; do
            if [ -f "$report" ]; then
                page=$(basename "$report" .json | sed 's/lighthouse-//')
                perf=$(jq '.categories.performance.score * 100' "$report")
                a11y=$(jq '.categories.accessibility.score * 100' "$report")
                bp=$(jq '.categories["best-practices"].score * 100' "$report")
                seo=$(jq '.categories.seo.score * 100' "$report")

                echo "$page:"
                echo "  Performance: $perf"
                echo "  Accessibility: $a11y"
                echo "  Best Practices: $bp"
                echo "  SEO: $seo"
                echo ""
            fi
        done
    fi

    exit 0
else
    echo "⚠️  Lighthouse not found!"
    echo ""
    echo "Install Lighthouse:"
    echo "  npm install -g lighthouse"
    echo ""
    echo "Or use Chrome DevTools Lighthouse tab manually"
    exit 1
fi
