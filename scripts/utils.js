/* 
Some helpful functions
*/

const home = document.getElementById("home");
const about = document.getElementById("about");
const blog = document.getElementById("blog");
const experience = document.getElementById("experience");
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

        return display == 'none';    
    }
}


// Set or remove active class for navbar
function navbarActiveSection() {
    const sections = ['home', 'about', 'blog', 'experience', 'portfolio'];

    const y = scrollY;
    let active = "";

    if (y >= home.getBoundingClientRect().top) {
        active = "home";
    }
    if (y >= about.getBoundingClientRect().top) {
        active = "about";
    }
    if (y >= blog.getBoundingClientRect().top) {
        active = "blog";
    }
    if (y >= experience.getBoundingClientRect().top) {
        active = "experience";
    }
    if (y >= portfolio.getBoundingClientRect().top) {
        active = "portfolio";
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

