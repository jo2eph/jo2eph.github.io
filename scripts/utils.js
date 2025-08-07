// Some helpful functions

// Check if, given an id, an element is hidden
isHidden = function(id) {
    const element = document.getElementById(id);

    // Check if element exists
    if (element == null) {
        console.log("No such element with id ", id);
        return;
    }

    // Get display
    const display = window.getComputedStyle(element).display.toLowerCase();

    return display == 'none';
}