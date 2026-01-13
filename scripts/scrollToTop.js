const jumpToTopButton = document.getElementById("jump-to-top");

jumpToTopButton.addEventListener("click", () => {
    window.scrollTo({top: 0, behavior: "smooth"});
});