/* 
Some helpful functions
*/

const home = document.getElementById("home");
const about = document.getElementById("about");
const blog = document.getElementById("blog");
const portfolio = document.getElementById("portfolio");


// Check if, given an id, an element is hidden
function isHidden(id) {
    const element = document.getElementById(id);

    // Check if element exists
    if (element == null) {
        console.log("No such element with id", id);
    } else {
        // Get display
        const display = window.getComputedStyle(element).display.toLowerCase();
        return display === 'none';
    }
}


// Set or remove active class for navbar
const homeBound = home.getBoundingClientRect().top;
const aboutBound = about.getBoundingClientRect().top;
const blogBound = blog.getBoundingClientRect().top;
const portfolioBound = portfolio.getBoundingClientRect().top;

function navbarActiveSection() {
    const sections = ['home', 'about', 'blog', 'portfolio'];

    var y = scrollY;
    let active = "";

    switch (y) {
        case (y >= portfolioBound):
            active = "portfolio";
            break;
        case (y >= blogBound):
            active = "blog";
            break;
        case (y >= aboutBound):
            active = "about";
            break;
        default:
            active = "home";
    }

    // set or remove class 'active' based on active section
    sections.forEach((section) => {
        const element = document.getElementById(`nav-btn-${section}`)

        if (section == active) {
            element.className = "active";
        } else {
            element.className = "";
        }
    })
}


// toggle display none or block
function toggleDisplay(id) {
    const element = document.getElementById(id);

    if (isHidden(id)) {
        element.style.display = 'block';
    } else {
        element.style.display = 'none';
    }
}

