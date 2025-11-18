/**
 * Modal System for Hugo
 * Replicates Next.js modal behavior with client-side routing
 */

(function() {
    'use strict';

    // Modal state
    let currentModal = null;
    let previousUrl = null;

    /**
     * Open modal with content
     */
    function openModal(url, isSmall = false) {
        // Store previous URL for back navigation
        previousUrl = window.location.href;

        // Fetch the full page content
        fetch(url)
            .then(response => response.text())
            .then(html => {
                // Parse the HTML
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, 'text/html');

                // Extract content from the page
                const pageTitle = doc.querySelector('title')?.textContent || '';
                const pageContent = doc.querySelector('main')?.innerHTML || '';

                // Get metadata if available
                const metaCategory = doc.querySelector('[data-category]')?.dataset.category || '';
                const metaDescription = doc.querySelector('[data-description]')?.dataset.description || '';

                // Create modal structure
                createModal(pageTitle, pageContent, isSmall, metaCategory, metaDescription);

                // Update browser history (pushState for back button support)
                history.pushState({ modal: true, url: url }, pageTitle, url);

                // Show modal
                showModal();
            })
            .catch(error => {
                console.error('Error loading modal content:', error);
                // Fallback: navigate to the page normally
                window.location.href = url;
            });
    }

    /**
     * Create modal DOM structure
     */
    function createModal(title, content, isSmall, category, description) {
        // Remove existing modal if any
        closeModal(false);

        // Create backdrop
        const backdrop = document.createElement('div');
        backdrop.className = 'modal-backdrop';
        backdrop.setAttribute('data-modal-backdrop', '');

        // Create modal
        const modal = document.createElement('div');
        modal.className = isSmall ? 'modal modal--small' : 'modal';
        modal.setAttribute('data-modal', '');

        // Build modal HTML
        modal.innerHTML = `
            <div class="modal__inner">
                <div class="modal__header">
                    <a href="#" class="modal__back" data-modal-back>
                        POWRÓT
                    </a>
                    <button class="modal__close" data-modal-close aria-label="Close">
                        ×
                    </button>
                    ${category ? `<div class="modal__category">${category}</div>` : ''}
                    <h1 class="modal__title">${title}</h1>
                    ${description ? `<p class="modal__description">${description}</p>` : ''}
                </div>
                <div class="modal__content">
                    <div class="modal__article">
                        ${content}
                    </div>
                </div>
            </div>
        `;

        // Append to body
        document.body.appendChild(backdrop);
        document.body.appendChild(modal);

        // Store reference
        currentModal = { modal, backdrop };

        // Add event listeners
        addModalEventListeners();
    }

    /**
     * Add event listeners to modal elements
     */
    function addModalEventListeners() {
        if (!currentModal) return;

        const { modal, backdrop } = currentModal;

        // Close button
        const closeBtn = modal.querySelector('[data-modal-close]');
        if (closeBtn) {
            closeBtn.addEventListener('click', (e) => {
                e.preventDefault();
                closeModal();
            });
        }

        // Back button
        const backBtn = modal.querySelector('[data-modal-back]');
        if (backBtn) {
            backBtn.addEventListener('click', (e) => {
                e.preventDefault();
                closeModal();
            });
        }

        // Backdrop click
        backdrop.addEventListener('click', () => {
            closeModal();
        });

        // ESC key
        const escHandler = (e) => {
            if (e.key === 'Escape') {
                closeModal();
            }
        };
        document.addEventListener('keydown', escHandler);

        // Store handler for cleanup
        currentModal.escHandler = escHandler;
    }

    /**
     * Show modal (with animation)
     */
    function showModal() {
        if (!currentModal) return;

        const { modal, backdrop } = currentModal;

        // Lock body scroll
        document.body.classList.add('modal-open');

        // Trigger reflow for animation
        void backdrop.offsetWidth;
        void modal.offsetWidth;

        // Add active class (triggers CSS transition)
        backdrop.classList.add('active');
        modal.classList.add('active');

        // Focus management
        const firstFocusable = modal.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
        if (firstFocusable) {
            firstFocusable.focus();
        }
    }

    /**
     * Close modal
     */
    function closeModal(updateHistory = true) {
        if (!currentModal) return;

        const { modal, backdrop, escHandler } = currentModal;

        // Remove active class (triggers exit animation)
        modal.classList.remove('active');
        backdrop.classList.remove('active');

        // Wait for animation to complete, then remove from DOM
        setTimeout(() => {
            modal.remove();
            backdrop.remove();
            document.body.classList.remove('modal-open');
        }, 600); // Match $transition-modal

        // Remove ESC key listener
        if (escHandler) {
            document.removeEventListener('keydown', escHandler);
        }

        // Clear reference
        currentModal = null;

        // Update browser history
        if (updateHistory && previousUrl) {
            history.back();
        }
    }

    /**
     * Handle popstate (browser back/forward buttons)
     */
    window.addEventListener('popstate', (event) => {
        if (currentModal) {
            // Modal is open and user clicked back
            closeModal(false);
        } else if (event.state && event.state.modal) {
            // User clicked forward to a modal state
            openModal(event.state.url);
        }
    });

    /**
     * Intercept clicks to detail pages and open as modals
     */
    function interceptDetailLinks() {
        // Selectors for links that should open in modals
        const modalLinkSelectors = [
            'a[href^="/workshops/"]',
            'a[href^="/projects/"]',
            'a[href^="/events/"]',
            'a[href^="/pl/workshops/"]',
            'a[href^="/pl/projects/"]',
            'a[href^="/pl/events/"]',
            'a[href^="/en/workshops/"]',
            'a[href^="/en/projects/"]',
            'a[href^="/en/events/"]',
        ].join(', ');

        document.addEventListener('click', (e) => {
            // Check if click is on a detail link
            const link = e.target.closest(modalLinkSelectors);

            if (!link) return;

            // Ignore links with target="_blank" or external links
            if (link.target === '_blank' || link.hostname !== window.location.hostname) {
                return;
            }

            // Ignore links with data-no-modal attribute
            if (link.hasAttribute('data-no-modal')) {
                return;
            }

            // Prevent default navigation
            e.preventDefault();

            // Open modal with the link's href
            const url = link.href;
            const isSmall = link.hasAttribute('data-modal-small');
            openModal(url, isSmall);
        });
    }

    /**
     * Initialize modal system
     */
    function init() {
        // Intercept detail page links
        interceptDetailLinks();

        // Handle contact and donation pages as small modals
        document.addEventListener('click', (e) => {
            const contactLink = e.target.closest('a[href*="/contact"]');
            const donationLink = e.target.closest('a[href*="/donation"]');

            if (contactLink && contactLink.hostname === window.location.hostname) {
                e.preventDefault();
                openModal(contactLink.href, true);
            } else if (donationLink && donationLink.hostname === window.location.hostname) {
                e.preventDefault();
                openModal(donationLink.href, true);
            }
        });
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Export for external use if needed
    window.AiEmbassyModal = {
        open: openModal,
        close: closeModal
    };
})();
