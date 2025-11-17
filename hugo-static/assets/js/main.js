/**
 * AI Embassy - Main JavaScript
 * Hugo Static Site
 */

(function() {
    'use strict';

    // Mobile menu toggle
    const initMobileMenu = () => {
        const toggle = document.querySelector('.nav__toggle');
        const mobileMenu = document.querySelector('.nav__mobile');

        if (!toggle || !mobileMenu) return;

        toggle.addEventListener('click', () => {
            const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
            toggle.setAttribute('aria-expanded', !isExpanded);
            mobileMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!toggle.contains(e.target) && !mobileMenu.contains(e.target)) {
                toggle.setAttribute('aria-expanded', 'false');
                mobileMenu.classList.remove('active');
            }
        });

        // Close mobile menu when pressing Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                toggle.setAttribute('aria-expanded', 'false');
                mobileMenu.classList.remove('active');
            }
        });
    };

    // Language switcher
    const initLanguageSwitcher = () => {
        const switcher = document.querySelector('.language-switcher__wrapper');

        if (!switcher) return;

        // Keyboard navigation
        switcher.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const menu = switcher.querySelector('.language-switcher__menu');
                menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
            }
        });
    };

    // Smooth scroll for anchor links
    const initSmoothScroll = () => {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');

                if (href === '#') return;

                e.preventDefault();
                const target = document.querySelector(href);

                if (target) {
                    const headerOffset = 80; // Account for fixed header
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    };

    // Modal functionality
    const initModals = () => {
        // Open modal
        document.querySelectorAll('[data-modal-open]').forEach(trigger => {
            trigger.addEventListener('click', (e) => {
                e.preventDefault();
                const modalId = trigger.getAttribute('data-modal-open');
                const modal = document.getElementById(modalId);

                if (modal) {
                    modal.classList.add('active');
                    document.body.classList.add('modal-open');

                    // Focus trap
                    const focusableElements = modal.querySelectorAll(
                        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
                    );
                    if (focusableElements.length) {
                        focusableElements[0].focus();
                    }
                }
            });
        });

        // Close modal
        document.querySelectorAll('[data-modal-close]').forEach(trigger => {
            trigger.addEventListener('click', () => {
                const modal = trigger.closest('.modal-overlay');
                if (modal) {
                    modal.classList.remove('active');
                    document.body.classList.remove('modal-open');
                }
            });
        });

        // Close modal on overlay click
        document.querySelectorAll('.modal-overlay').forEach(overlay => {
            overlay.addEventListener('click', (e) => {
                if (e.target === overlay) {
                    overlay.classList.remove('active');
                    document.body.classList.remove('modal-open');
                }
            });
        });

        // Close modal on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                document.querySelectorAll('.modal-overlay.active').forEach(modal => {
                    modal.classList.remove('active');
                    document.body.classList.remove('modal-open');
                });
            }
        });
    };

    // Form validation helper
    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const validateField = (field) => {
        const value = field.value.trim();
        const type = field.type;
        let isValid = true;
        let errorMessage = '';

        // Required field check
        if (field.hasAttribute('required') && !value) {
            isValid = false;
            errorMessage = field.getAttribute('data-error-required') || 'This field is required';
        }
        // Email validation
        else if (type === 'email' && value && !validateEmail(value)) {
            isValid = false;
            errorMessage = field.getAttribute('data-error-email') || 'Please enter a valid email address';
        }
        // Min length validation
        else if (field.hasAttribute('minlength')) {
            const minLength = parseInt(field.getAttribute('minlength'));
            if (value.length < minLength) {
                isValid = false;
                errorMessage = field.getAttribute('data-error-minlength') || `Minimum ${minLength} characters required`;
            }
        }

        return { isValid, errorMessage };
    };

    const showFieldError = (field, message) => {
        field.classList.add('form-control--error');
        let error = field.parentElement.querySelector('.form-error');
        if (!error) {
            error = document.createElement('span');
            error.className = 'form-error';
            field.parentElement.appendChild(error);
        }
        error.textContent = message;
    };

    const clearFieldError = (field) => {
        field.classList.remove('form-control--error');
        const error = field.parentElement.querySelector('.form-error');
        if (error) error.remove();
    };

    const initFormValidation = () => {
        const forms = document.querySelectorAll('form[data-validate]');

        forms.forEach(form => {
            form.addEventListener('submit', (e) => {
                e.preventDefault();

                let isValid = true;
                const fields = form.querySelectorAll('input, textarea, select');

                // Validate all fields
                fields.forEach(field => {
                    const validation = validateField(field);
                    if (!validation.isValid) {
                        isValid = false;
                        showFieldError(field, validation.errorMessage);
                    } else {
                        clearFieldError(field);
                    }
                });

                // If form is valid, submit it
                if (isValid) {
                    handleFormSubmit(form);
                }
            });

            // Clear errors on input
            form.querySelectorAll('input, textarea, select').forEach(field => {
                field.addEventListener('input', () => {
                    clearFieldError(field);
                });

                field.addEventListener('blur', () => {
                    const validation = validateField(field);
                    if (!validation.isValid && field.value.trim()) {
                        showFieldError(field, validation.errorMessage);
                    }
                });
            });
        });
    };

    // Handle form submission to API
    const handleFormSubmit = async (form) => {
        const apiEndpoint = form.getAttribute('data-api-endpoint');
        const successMessage = form.querySelector('.form-success');
        const errorMessage = form.querySelector('.form-error-general');
        const submitButton = form.querySelector('button[type="submit"]');

        if (!apiEndpoint) {
            console.error('No API endpoint specified for form');
            return;
        }

        // Disable submit button
        if (submitButton) {
            submitButton.disabled = true;
            submitButton.textContent = submitButton.getAttribute('data-loading-text') || 'Sending...';
        }

        // Collect form data
        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => {
            // Skip honeypot field
            if (key !== '_gotcha') {
                data[key] = value;
            }
        });

        try {
            // TODO: Replace with actual API call
            // This is a placeholder - configure your API endpoint in config/_default/params.toml
            const response = await fetch(apiEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                // Success
                form.reset();
                if (successMessage) {
                    successMessage.style.display = 'block';
                    setTimeout(() => {
                        successMessage.style.display = 'none';
                    }, 5000);
                }

                // Hide error message if visible
                if (errorMessage) {
                    errorMessage.style.display = 'none';
                }
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            // Error
            console.error('Form submission error:', error);
            if (errorMessage) {
                errorMessage.style.display = 'block';
            }
        } finally {
            // Re-enable submit button
            if (submitButton) {
                submitButton.disabled = false;
                submitButton.textContent = submitButton.getAttribute('data-original-text') || 'Submit';
            }
        }
    };

    // Lazy load images
    const initLazyLoad = () => {
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                });
            });

            document.querySelectorAll('img[data-src]').forEach(img => {
                imageObserver.observe(img);
            });
        } else {
            // Fallback for browsers without IntersectionObserver
            document.querySelectorAll('img[data-src]').forEach(img => {
                img.src = img.dataset.src;
            });
        }
    };

    // Simple Carousel
    const initCarousel = () => {
        const carousels = document.querySelectorAll('.carousel');

        carousels.forEach(carousel => {
            const track = carousel.querySelector('.carousel__track');
            const slides = Array.from(carousel.querySelectorAll('.carousel__slide'));
            const prevButton = carousel.querySelector('.carousel__button--prev');
            const nextButton = carousel.querySelector('.carousel__button--next');
            const indicators = carousel.querySelector('.carousel__indicators');

            if (!track || slides.length === 0) return;

            let currentIndex = 0;
            const slidesCount = slides.length;

            // Get slides to show based on viewport
            const getSlidesToShow = () => {
                if (window.innerWidth >= 1024) return 3;
                if (window.innerWidth >= 768) return 2;
                return 1;
            };

            let slidesToShow = getSlidesToShow();
            const maxIndex = Math.max(0, slidesCount - slidesToShow);

            // Update carousel position
            const updateCarousel = () => {
                const slideWidth = slides[0].offsetWidth;
                track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

                // Update buttons
                if (prevButton) prevButton.disabled = currentIndex === 0;
                if (nextButton) nextButton.disabled = currentIndex >= maxIndex;

                // Update indicators
                if (indicators) {
                    const dots = indicators.querySelectorAll('.carousel__indicator');
                    dots.forEach((dot, index) => {
                        dot.classList.toggle('carousel__indicator--active', index === currentIndex);
                    });
                }
            };

            // Navigation
            if (prevButton) {
                prevButton.addEventListener('click', () => {
                    if (currentIndex > 0) {
                        currentIndex--;
                        updateCarousel();
                    }
                });
            }

            if (nextButton) {
                nextButton.addEventListener('click', () => {
                    if (currentIndex < maxIndex) {
                        currentIndex++;
                        updateCarousel();
                    }
                });
            }

            // Indicators
            if (indicators) {
                const dotsCount = maxIndex + 1;
                for (let i = 0; i < dotsCount; i++) {
                    const dot = document.createElement('button');
                    dot.className = 'carousel__indicator';
                    dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
                    dot.addEventListener('click', () => {
                        currentIndex = i;
                        updateCarousel();
                    });
                    indicators.appendChild(dot);
                }
            }

            // Keyboard navigation
            carousel.addEventListener('keydown', (e) => {
                if (e.key === 'ArrowLeft' && currentIndex > 0) {
                    currentIndex--;
                    updateCarousel();
                } else if (e.key === 'ArrowRight' && currentIndex < maxIndex) {
                    currentIndex++;
                    updateCarousel();
                }
            });

            // Touch/swipe support
            let touchStartX = 0;
            let touchEndX = 0;

            track.addEventListener('touchstart', (e) => {
                touchStartX = e.changedTouches[0].screenX;
            });

            track.addEventListener('touchend', (e) => {
                touchEndX = e.changedTouches[0].screenX;
                handleSwipe();
            });

            const handleSwipe = () => {
                const swipeThreshold = 50;
                if (touchEndX < touchStartX - swipeThreshold && currentIndex < maxIndex) {
                    currentIndex++;
                    updateCarousel();
                } else if (touchEndX > touchStartX + swipeThreshold && currentIndex > 0) {
                    currentIndex--;
                    updateCarousel();
                }
            };

            // Responsive update
            let resizeTimer;
            window.addEventListener('resize', () => {
                clearTimeout(resizeTimer);
                resizeTimer = setTimeout(() => {
                    const newSlidesToShow = getSlidesToShow();
                    if (newSlidesToShow !== slidesToShow) {
                        slidesToShow = newSlidesToShow;
                        currentIndex = Math.min(currentIndex, Math.max(0, slidesCount - slidesToShow));
                        updateCarousel();
                    }
                }, 250);
            });

            // Initial update
            updateCarousel();
        });
    };

    // Scroll-triggered animations
    const initScrollAnimations = () => {
        if ('IntersectionObserver' in window) {
            const animationObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        // Optionally unobserve after animation
                        // animationObserver.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.1, // Trigger when 10% of element is visible
                rootMargin: '0px 0px -50px 0px' // Trigger slightly before element enters viewport
            });

            // Observe all elements with scroll animation classes
            document.querySelectorAll('.scroll-animate, .scroll-animate-fade-up, .scroll-animate-fade-down, .scroll-animate-fade-left, .scroll-animate-fade-right, .scroll-animate-scale').forEach(element => {
                animationObserver.observe(element);
            });
        } else {
            // Fallback: immediately show all elements
            document.querySelectorAll('.scroll-animate, .scroll-animate-fade-up, .scroll-animate-fade-down, .scroll-animate-fade-left, .scroll-animate-fade-right, .scroll-animate-scale').forEach(element => {
                element.classList.add('is-visible');
            });
        }
    };

    // Initialize all functions when DOM is ready
    const init = () => {
        initMobileMenu();
        initLanguageSwitcher();
        initSmoothScroll();
        initModals();
        initFormValidation();
        initLazyLoad();
        initScrollAnimations();
        initCarousel();
    };

    // Run on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
