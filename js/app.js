/**
 * Chapter 26 - Core Application Logic
 * Architecture: Vanilla ES6+
 */

document.addEventListener('DOMContentLoaded', () => {

    // 1. Remove 'no-js' class to enable JS-specific styling if needed
    document.documentElement.classList.remove('no-js');

    // 2. Setup Intersection Observer for scroll animations
    const setupScrollAnimations = () => {
        // Check if user prefers reduced motion
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        // Select all elements that need to animate in
        const animatedElements = document.querySelectorAll('.fade-up-element');

        // Observer options
        const observerOptions = {
            root: null, // viewport
            rootMargin: '0px 0px -10% 0px', // Trigger slightly before element comes into view
            threshold: 0.1 // Trigger when 10% of element is visible
        };

        // Observer callback
        const observerCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Add visible class to trigger CSS transition
                    entry.target.classList.add('is-visible');

                    // Stop observing once animated to improve performance
                    observer.unobserve(entry.target);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        animatedElements.forEach(el => {
            // If reduced motion is preferred, make visible immediately
            if (prefersReducedMotion) {
                el.classList.add('is-visible');
            } else {
                observer.observe(el);
            }
        });
    };

    // Initialize animations
    setupScrollAnimations();
});
