#!/bin/bash

echo "🧪 Running All Tests for Hugo Static Site"
echo "=========================================="
echo ""

cd "$(dirname "$0")/.." || exit 1

# Track test results
tests_passed=0
tests_failed=0
tests_skipped=0

# Function to run a test script
run_test() {
    local script=$1
    local name=$2

    if [ -f "scripts/$script" ]; then
        chmod +x "scripts/$script"
        echo ""
        echo "-------------------------------------------"
        echo "Running: $name"
        echo "-------------------------------------------"

        if "scripts/$script"; then
            ((tests_passed++))
            echo "✅ $name: PASSED"
        else
            ((tests_failed++))
            echo "❌ $name: FAILED"
        fi
    else
        ((tests_skipped++))
        echo "⚠️  $name: SKIPPED (script not found)"
    fi
}

# 1. Build Test
run_test "test-build.sh" "Build Test"

# Only run other tests if build passed
if [ $tests_failed -eq 0 ]; then
    # 2. Bundle Size Check
    run_test "check-bundle-size.sh" "Bundle Size Check"

    # 3. Start Hugo server for live tests
    echo ""
    echo "-------------------------------------------"
    echo "Starting Hugo Server for Live Tests"
    echo "-------------------------------------------"

    hugo server -D &
    SERVER_PID=$!

    # Wait for server to start
    sleep 3

    # Check if server started
    if curl -s http://localhost:1313 > /dev/null 2>&1; then
        echo "✅ Server started successfully"

        # 4. Link Check
        run_test "check-links.sh" "Link Check"

        # 5. Accessibility Test
        run_test "test-accessibility.sh" "Accessibility Test"

        # 6. Performance Test
        run_test "test-performance.sh" "Performance Test"

        # Stop server
        kill $SERVER_PID 2>/dev/null
        echo ""
        echo "✅ Server stopped"
    else
        echo "❌ Failed to start Hugo server"
        kill $SERVER_PID 2>/dev/null
        ((tests_failed++))
    fi
else
    echo ""
    echo "⚠️  Skipping live tests due to build failure"
fi

# Summary
echo ""
echo "=========================================="
echo "Test Summary"
echo "=========================================="
echo "Passed:  $tests_passed"
echo "Failed:  $tests_failed"
echo "Skipped: $tests_skipped"
echo ""

if [ $tests_failed -eq 0 ]; then
    echo "✅ All tests passed!"
    exit 0
else
    echo "❌ Some tests failed!"
    exit 1
fi
