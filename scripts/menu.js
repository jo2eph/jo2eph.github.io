function toggleMobileMenu() {
    // Breakpoints defined in style.css
    const firstBreakpoint = 720;
    const secondBreakpoint = 1024;

    const mobileMenu = document.getElementById('mobile-menu');

    const width = window.innerWidth;
    let nav = document.getElementById('nav');
    let socials = document.getElementById('socials');

    // Only socials are hidden
    if (width < secondBreakpoint && width >= firstBreakpoint) {
        
        if (socials.style.display === "block") {
            socials.style.display = "none";
        } else {
            socials.style.display = "block";
        }

    }
    // Both socials and nav are hidden
    else if (width < firstBreakpoint) {
        
        if (socials.style.display === "block" && 
            nav.style.display === "block") 
        {
            nav.style.display = "none";
            socials.style.display = "none";
        } else {
            nav.style.display = "block";
            socials.style.display = "block";
        }

    }
}

