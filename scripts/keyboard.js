/*
Add keyboard shortcuts for navigation
*/

document.addEventListener('keydown', (event) => {
    const keyPressed = event.key;

    switch (keyPressed) {
        case '0':
            scrollToSection("intro");
            break;
        case '1':
            scrollToSection("section-1");
            break;
        case '2':
            scrollToSection("section-2");
            break;
        case '3':
            scrollToSection("section-3");
            break;
        case '4':
            scrollToSection("section-4");
            break;
        case '5':
            scrollToSection("section-5");
            break;
        case '9':
            scrollToSection('footer');
            break;
        default:
            console.log(`No action for the key ${keyPressed}`);
            break;
    }
})