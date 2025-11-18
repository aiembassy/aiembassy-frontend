#!/bin/bash

echo "📦 Checking bundle sizes..."

cd "$(dirname "$0")/.." || exit 1

if [ ! -d "public" ]; then
    echo "❌ No build found. Run 'hugo --gc --minify' first."
    exit 1
fi

echo ""
echo "CSS Files:"
echo "---"
if find public -name "*.css" | grep -q .; then
    find public -name "*.css" -exec du -h {} \; | sort -h
else
    echo "No CSS files found"
fi

echo ""
echo "JavaScript Files:"
echo "---"
if find public -name "*.js" | grep -q .; then
    find public -name "*.js" -exec du -h {} \; | sort -h
else
    echo "No JavaScript files found"
fi

echo ""
echo "Total Build Size:"
echo "---"
du -sh public

echo ""
echo "Largest Files (Top 20):"
echo "---"
find public -type f -exec du -h {} \; | sort -rh | head -20

echo ""
echo "File Type Summary:"
echo "---"
echo "HTML files: $(find public -name "*.html" | wc -l)"
echo "CSS files: $(find public -name "*.css" | wc -l)"
echo "JS files: $(find public -name "*.js" | wc -l)"
echo "Images: $(find public \( -name "*.jpg" -o -name "*.png" -o -name "*.gif" -o -name "*.svg" -o -name "*.webp" \) | wc -l)"

# Check for gzip potential (if gzip is available)
if command -v gzip &> /dev/null; then
    echo ""
    echo "Gzip Compression Potential:"
    echo "---"

    for file in public/css/main.css public/js/main.js; do
        if [ -f "$file" ]; then
            original=$(wc -c < "$file")
            compressed=$(gzip -c "$file" | wc -c)
            ratio=$(echo "scale=2; 100 - ($compressed * 100 / $original)" | bc)
            echo "$(basename "$file"):"
            echo "  Original: $(du -h "$file" | cut -f1)"
            echo "  Gzipped: $(echo "$compressed" | awk '{print $1/1024 "K"}')"
            echo "  Savings: ${ratio}%"
        fi
    done
fi

# Performance warnings
echo ""
echo "Performance Checks:"
echo "---"

total_size=$(du -s public | cut -f1)
if [ "$total_size" -gt 1024 ]; then  # > 1MB
    echo "⚠️  Total build size is large (> 1MB)"
fi

for css_file in public/css/*.css; do
    if [ -f "$css_file" ]; then
        css_size=$(wc -c < "$css_file")
        if [ "$css_size" -gt 51200 ]; then  # > 50KB
            echo "⚠️  CSS file is large: $(basename "$css_file") (> 50KB)"
        fi
    fi
done

for js_file in public/js/*.js; do
    if [ -f "$js_file" ]; then
        js_size=$(wc -c < "$js_file")
        if [ "$js_size" -gt 30720 ]; then  # > 30KB
            echo "⚠️  JavaScript file is large: $(basename "$js_file") (> 30KB)"
        fi
    fi
done

echo "✅ Bundle size check complete!"
