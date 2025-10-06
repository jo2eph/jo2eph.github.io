const themeButton = document.getElementById("theme-button");
const themeMenuBar = document.getElementById("theme-bar");

// Display Theme Menu after mouse clicks on it
themeButton.addEventListener('click', (event) => {
    themeMenuBar.classList.toggle("hidden");
});

