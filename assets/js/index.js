// Auto set theme based on system preference
document.addEventListener('DOMContentLoaded', () => {
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    const body = document.body;

    // Function to apply the theme
    function applyTheme() {
        if (prefersDarkScheme.matches) {
            body.classList.add('dark');
            body.classList.remove('light');
        } else {
            body.classList.remove('dark');
            body.classList.add('light');
        }
    }

    // Initial theme application
    applyTheme();

    // Listen for changes in the system preference
    prefersDarkScheme.addEventListener('change', applyTheme);
});


// Mobile menu toggle
const menuToggle = document.querySelector('.menu');
const closeNav = document.querySelector('.close');
const mobileNavLinks = document.querySelector('.mobile-nav');

menuToggle.addEventListener('click', () => {
    mobileNavLinks.classList.toggle('active');
    closeNav.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

// Close the menu when a link is clicked
closeNav.addEventListener('click', () => {
    mobileNavLinks.classList.remove('active');
    closeNav.classList.remove('active');
    menuToggle.classList.remove('active');
});