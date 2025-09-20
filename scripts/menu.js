const mobileMenu = document.getElementById('mobile-menu');
const mobileNavContainer = document.getElementById('mobile-nav-container');
const mobileMenuButton = document.getElementById('mobile-menu-button');

const mobileNav = document.getElementById('mobile-nav');
const mobileSocial = document.getElementById('mobile-social');

// Breakpoints defined in style.css
const firstBreakpoint = 720;
const secondBreakpoint = 1024;


// Toggle mobile menu visibility when the button is clicked
mobileMenu.addEventListener('click', (event) => {

    // Get the current width of window
    const width = window.innerWidth;

    mobileNavContainer.classList.toggle('hidden');

    // Toggle social and nav visibility on small screens
    if (width < firstBreakpoint) {
        mobileNav.classList.toggle('hidden');
        mobileSocial.classList.toggle('hidden');
    } else if (width < secondBreakpoint) {
        mobileSocial.classList.toggle('hidden');
    }
});


// Hide mobile menu when clicking anywhere outside of it or the menu button
document.addEventListener('click', (event) => {
    // Check if click target is outside the mobile menu and button
    if (
        !mobileNavContainer.contains(event.target) && 
        !mobileMenu.contains(event.target)
    ) {
        mobileNavContainer.classList.add('hidden');
        mobileNav.classList.add('hidden');
        mobileSocial.classList.add('hidden');
    }
});


// When resizing window, hide mobile menu
window.addEventListener('resize', () => {
    mobileNavContainer.classList.add('hidden');
    mobileNav.classList.add('hidden');
    mobileSocial.classList.add('hidden');
});
