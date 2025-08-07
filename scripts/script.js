import "./utils"

const jumpToTopButton = document.getElementById("jump-to-top");
const mobileMenu = document.getElementById("mobile-menu");
const socials = document.getElementById("socials")
const nav = document.getElementById("nav");


// Show or Hide Jump To Top
window.addEventListener('scroll', (event) => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 200) {
        jumpToTopButton.style.display = "block";
    }
    else {
        jumpToTopButton.style.display = "none";
    }
});


// Display menu on phone devices
mobileMenu.addEventListener('click', (event) => {
    const width = window.innerWidth;
    const display = window.getComputedStyle(mobileMenu).display.toLowerCase();

    // breakpoints defined in style.css
    const firstBreakpoint = 720;
    const secondBreakpoint = 1024;

    // get computed style of nav and socials
    const navDisplay = window.getComputedStyle(nav).display.toLowerCase();
    const socialsDisplay = window.getComputedStyle(socials).display.toLowerCase();

    if (display != 'none') {
        
        // Both socials and nav
        if (width < firstBreakpoint) {
            
            if (
                navDisplay == 'none' &&
                socialsDisplay == 'none'
            ) {
                nav.style.display == 'block';
                socials.style.display == 'block';
            }

        }

        // Only socials
        else if (width > firstBreakpoint && width <= secondBreakpoint) {
            console.log("Tablet");
        }
    }
})

