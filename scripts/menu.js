/*
Functionality for navbar
*/

const navButton1 = document.getElementById("nav-btn-1");
const navButton2 = document.getElementById("nav-btn-2");
const navButton3 = document.getElementById("nav-btn-3");
const navButton4 = document.getElementById("nav-btn-4");
const navButton5 = document.getElementById("nav-btn-5");

/* 
Scroll to the section with the given ID smoothly.

Parameters:
- sectionId (string): The ID of the section to scroll to.
*/
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth'
        })
    } else {
        console.error(`Section with ID ${sectionId} not found.`);
    }
}

navButton1.addEventListener("click", () => {
    scrollToSection("section-1");
});
navButton2.addEventListener("click", () => {
    scrollToSection("section-2");
});
navButton3.addEventListener("click", () => {
    scrollToSection("section-3");
});
navButton4.addEventListener("click", () => {
    scrollToSection("section-4");
});
navButton5.addEventListener("click", () => {
    scrollToSection("section-5");
});


// FOR MOBILE MENUS
const mobileMenu = document.getElementById("mobile-menu");

const mobileNavButton1 = document.getElementById("mobile-nav-btn-1");
const mobileNavButton2 = document.getElementById("mobile-nav-btn-2");
const mobileNavButton3 = document.getElementById("mobile-nav-btn-3");
const mobileNavButton4 = document.getElementById("mobile-nav-btn-4");
const mobileNavButton5 = document.getElementById("mobile-nav-btn-5");

mobileNavButton1.addEventListener("click", () => {
    scrollToSection("section-1");
});
mobileNavButton2.addEventListener("click", () => {
    scrollToSection("section-2");
});
mobileNavButton3.addEventListener("click", () => {
    scrollToSection("section-3");
});
mobileNavButton4.addEventListener("click", () => {
    scrollToSection("section-4");
});
mobileNavButton5.addEventListener("click", () => {
    scrollToSection("section-5");
});

// Breakpoints found in ./styles/navbar.css
const firstBreakpoint = 850;
const secondBreakpoint = 985;

mobileMenu.addEventListener("click", () => {
    const windowWidth = window.innerWidth;
    
    const mobileNav = document.getElementById("mobile-navbar-menu");
    const mobileSocials = document.getElementById("mobile-navbar-socials");

    // Show full menu
    if (windowWidth < firstBreakpoint) {
        mobileNav.classList.toggle("hidden");
    }
    // Show only the social icons
    if (windowWidth < secondBreakpoint) {
        mobileSocials.classList.toggle("hidden");
    }
});

// Close mobile menu when clicking off of it
document.addEventListener("click", (event) => {
    const windowWidth = window.innerWidth;
    if (windowWidth < firstBreakpoint) {
        const isClickInsideMenu = mobileMenu.contains(event.target) || document.getElementById("mobile-navbar-menu").contains(event.target) || document.getElementById("mobile-navbar-socials").contains(event.target);
        if (!isClickInsideMenu) {
            document.getElementById("mobile-navbar-menu").classList.add("hidden");
            document.getElementById("mobile-navbar-socials").classList.add("hidden");
        }
    }
})
