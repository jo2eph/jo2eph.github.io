const width = window.innerWidth;

// Breakpoints defined in style.css
const firstBreakpoint = 720;
const secondBreakpoint = 1024;

window.addEventListener('load', (event) => {
    navbarActiveSection()
})


// Show or hide Jump To Top
window.addEventListener('scroll', (event) => {
    const jumpToTopButton = document.getElementById("jump-to-top");

    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 200) {
        jumpToTopButton.style.display = "block";
    }
    else {
        jumpToTopButton.style.display = "none";
    }
});


// Highlight navbar depending on where user is
document.addEventListener('scroll', () => {
    navbarActiveSection()
})


// Display menu on phone devices
const mobileMenu = document.getElementById('mobile-menu');

mobileMenu.addEventListener('click', (event) => {

    if (isHidden('mobile-menu')) {
        
        // Both socials and nav
        if (width < firstBreakpoint) {
            toggleDisplay('nav');
            toggleDisplay('socials');
        }

        // Only socials
        else if (width > firstBreakpoint && width <= secondBreakpoint) {
            toggleDisplay('socials');
        }
    }
})


window.addEventListener('resize', (event) => {
    // TODO
})
