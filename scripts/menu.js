/*
Functionality for navigation menu
*/

const navButton1 = document.getElementById("nav-btn-1");
const navButton2 = document.getElementById("nav-btn-2");
const navButton3 = document.getElementById("nav-btn-3");
const navButton4 = document.getElementById("nav-btn-4");
const navButton5 = document.getElementById("nav-btn-5");

/* 
Scroll to the section with the given ID smoothly.

Parameters:
- sectionId (string): The ID of the section to scroll to.
*/
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth'
        })
    } else {
        console.error(`Section with ID ${sectionId} not found.`);
    }
}

navButton1.addEventListener("click", () => {
    scrollToSection("section-1");
});
navButton2.addEventListener("click", () => {
    scrollToSection("section-2");
});
navButton3.addEventListener("click", () => {
    scrollToSection("section-3");
});
navButton4.addEventListener("click", () => {
    scrollToSection("section-4");
});
navButton5.addEventListener("click", () => {
    scrollToSection("section-5");
});
