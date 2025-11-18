#!/bin/bash

echo "♿ Testing Accessibility..."

cd "$(dirname "$0")/.." || exit 1

# Check if Hugo server is running
if ! curl -s http://localhost:1313 > /dev/null 2>&1; then
    echo "❌ Hugo server not running!"
    echo "   Start it with: hugo server -D"
    exit 1
fi

# Check if pa11y is installed
if command -v pa11y &> /dev/null; then
    echo "Running pa11y accessibility tests..."
    echo ""

    # Test homepage
    echo "Testing homepage..."
    pa11y http://localhost:1313 --standard WCAG2AA --reporter cli

    # Test contact page
    echo ""
    echo "Testing contact page..."
    pa11y http://localhost:1313/contact --standard WCAG2AA --reporter cli

    # Test projects list
    echo ""
    echo "Testing projects page..."
    pa11y http://localhost:1313/projects --standard WCAG2AA --reporter cli

    # Test events page
    echo ""
    echo "Testing events page..."
    pa11y http://localhost:1313/events --standard WCAG2AA --reporter cli

    # Test workshops page
    echo ""
    echo "Testing workshops page..."
    pa11y http://localhost:1313/workshops --standard WCAG2AA --reporter cli

    echo ""
    echo "✅ Accessibility testing complete!"

# Check if axe-cli is installed
elif command -v axe &> /dev/null; then
    echo "Running axe accessibility tests..."
    echo ""

    # Test pages
    axe http://localhost:1313 --tags wcag2a,wcag2aa
    axe http://localhost:1313/contact --tags wcag2a,wcag2aa
    axe http://localhost:1313/projects --tags wcag2a,wcag2aa

    echo ""
    echo "✅ Accessibility testing complete!"

else
    echo "⚠️  No accessibility testing tool found!"
    echo ""
    echo "Install one of the following:"
    echo "  npm install -g pa11y"
    echo "  npm install -g @axe-core/cli"
    echo ""
    echo "Manual testing recommendations:"
    echo "  1. Use browser extensions:"
    echo "     - axe DevTools (Chrome/Firefox)"
    echo "     - WAVE (Chrome/Firefox)"
    echo "  2. Test keyboard navigation (Tab, Enter, Escape)"
    echo "  3. Test with screen reader (NVDA, JAWS, VoiceOver)"
    echo "  4. Verify color contrast"
    echo "  5. Check heading hierarchy"
    exit 1
fi
