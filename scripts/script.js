const jumpToTopButton = document.getElementById("jump-to-top");

// Toggle Jump To Top button based on where the user is on the page
function toggleJumpToTopVisibility() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 200) {
        jumpToTopButton.classList.remove('hidden');
    }
    else {
        jumpToTopButton.classList.add('hidden');
    }
}


window.addEventListener('load', () => {
    navbarActiveSection();
    toggleJumpToTopVisibility();
});


window.addEventListener('scroll', () => {
    toggleJumpToTopVisibility();

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

jumpToTopButton.addEventListener('click', scrollToTop);
