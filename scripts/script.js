const jumpToTopButton = document.getElementById("jump-to-top");
const mobileMenu = document.getElementById("mobile-menu");
const socials = document.getElementById("socials")


// Show or Hide Jump To Top
window.addEventListener('scroll', (event) => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 200) {
        jumpToTopButton.style.display = "block";
    }
    else {
        jumpToTopButton.style.display = "none";
    }
});


window.addEventListener("resize", (event) => {
    const width = window.innerWidth;

    if (width > 980) {
        socials.style.display = 'block';
    } else {
        socials.style.display = 'none';
    }
});


// Display menu on phone devices
mobileMenu.addEventListener('click', (event) => {
    const width = window.innerWidth;
    
    if (width < 980 && width > 680 && !isMenuShown) {
        socials.style.display = 'block';
        isMenuShown = true;
    } else if (width < 980 && width > 680 && isMenuShown) {
        socials.style.display = 'none';
        isMenuShown = false;
    }
})

