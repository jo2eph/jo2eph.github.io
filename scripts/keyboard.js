window.addEventListener('keydown', (event) => {
    const keyPressed = event.key;
    
    // Jump to section if number keys are pressed
    if (keyPressed == "1" || keyPressed == "0") {
        scrollToSection("home");
    } else if (keyPressed == "2") {
        scrollToSection("about");
    } else if (keyPressed == "3") {
        scrollToSection("education");
    } else if (keyPressed == "4") {
        scrollToSection("blog");
    } else if (keyPressed == "5"){
        scrollToSection("projects");
    } else if (keyPressed == "9") {
        scrollToSection("footer");
    }
});