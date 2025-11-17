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
    const initFormValidation = () => {
        const forms = document.querySelectorAll('form[data-validate]');

        forms.forEach(form => {
            form.addEventListener('submit', (e) => {
                let isValid = true;
                const requiredFields = form.querySelectorAll('[required]');

                requiredFields.forEach(field => {
                    if (!field.value.trim()) {
                        isValid = false;
                        field.classList.add('form-control--error');

                        // Show error message
                        let error = field.parentElement.querySelector('.form-error');
                        if (!error) {
                            error = document.createElement('span');
                            error.className = 'form-error';
                            error.textContent = 'This field is required';
                            field.parentElement.appendChild(error);
                        }
                    } else {
                        field.classList.remove('form-control--error');
                        const error = field.parentElement.querySelector('.form-error');
                        if (error) error.remove();
                    }
                });

                if (!isValid) {
                    e.preventDefault();
                }
            });

            // Clear errors on input
            form.querySelectorAll('[required]').forEach(field => {
                field.addEventListener('input', () => {
                    field.classList.remove('form-control--error');
                    const error = field.parentElement.querySelector('.form-error');
                    if (error) error.remove();
                });
            });
        });
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

    // Initialize all functions when DOM is ready
    const init = () => {
        initMobileMenu();
        initLanguageSwitcher();
        initSmoothScroll();
        initModals();
        initFormValidation();
        initLazyLoad();
    };

    // Run on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
