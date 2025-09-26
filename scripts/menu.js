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

    // Below first breakpoint, show both navigation links and social media icons
    if (width < firstBreakpoint) {
        mobileNav.classList.toggle('hidden');
        mobileSocial.classList.toggle('hidden');
    } 
    // Between first and second breakpoint, only show navigation links
    else if (width < secondBreakpoint) {
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


// Scroll to section when navbar menu section links are clicked
const homeButton = document.getElementById("nav-btn-home");
const aboutButton = document.getElementById("nav-btn-about");
const educationButton = document.getElementById("nav-btn-education");
const blogButton = document.getElementById("nav-btn-blog");
const projectsButton = document.getElementById("nav-btn-projects");

homeButton.addEventListener('click', () => {
    scrollToSection("home");
});
aboutButton.addEventListener('click', () => {
    scrollToSection("about");
});
educationButton.addEventListener('click', () => {
    scrollToSection("education");
});
blogButton.addEventListener('click', () => {
    scrollToSection("blog");
});
projectsButton.addEventListener('click', () => {
    scrollToSection("projects");
});


// Mobile version
const mobileHomeButton = document.getElementById("mobile-nav-home");
const mobileAboutButton = document.getElementById("mobile-nav-about");
const mobileEducationButton = document.getElementById("mobile-nav-education");
const mobileBlogButton = document.getElementById("mobile-nav-blog");
const mobileProjectsButton = document.getElementById("mobile-nav-projects");

mobileHomeButton.addEventListener('click', () => {
    scrollToSection("home");
});
mobileAboutButton.addEventListener('click', () => {
    scrollToSection("about");
});
mobileEducationButton.addEventListener('click', () => {
    scrollToSection("education");
});
mobileBlogButton.addEventListener('click', () => {
    scrollToSection("blog");
});
mobileProjectsButton.addEventListener('click', () => {
    scrollToSection("projects");
});

