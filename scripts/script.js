// Breakpoints
const minWidth = 480;
const minHeight = 600;

const jumpToTopButton = document.getElementById("jump-to-top");

// Hide navbar menu; display hamburger menu
window.addEventListener("resize", (event) => {
    const width = window.innerWidth;

    if (width <= minWidth) {
        console.log("The screen is getting too small");
    }
});


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
displayMenu = function() {
    console.log("Hello world");
}