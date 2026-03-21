const jumpToTopButton = document.getElementById("jump-to-top");

jumpToTopButton.addEventListener("click", () => {
    window.scrollTo({top: 0, behavior: "smooth"});
});

/* Show button only when user scrolls down */
window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        jumpToTopButton.style.display = "block";
    } else {
        jumpToTopButton.style.display = "none";
    }
})