window.addEventListener('load', (event) => {
    navbarActiveSection();
})


window.addEventListener('scroll', (event) => {
    const jumpToTopButton = document.getElementById("jump-to-top");

    // Show or hide Jump to top button
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 200) {
        jumpToTopButton.style.display = "block";
    }
    else {
        jumpToTopButton.style.display = "none";
    }

    // Highlight which section the user currently is in
    navbarActiveSection();
});


// Scroll to top of the page
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

