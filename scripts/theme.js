const themeBtn = document.getElementById("theme-button");
const themeMenu = document.getElementById("theme-menu");

themeBtn.addEventListener("click", () => {
    themeMenu.classList.toggle("hidden");
})