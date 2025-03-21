// Disable right-click context menu
document.addEventListener('contextmenu', function(event) {
    event.preventDefault(); // Disable right-click
});

// Disable F12, Ctrl+Shift+I, and Ctrl+Shift+J (Developer Tools shortcuts)
document.addEventListener('keydown', function(event) {
    // Disable F12 (Developer Tools)
    if (event.keyCode === 123) {
        event.preventDefault();
    }
    // Disable Ctrl+Shift+I (Inspect Element)
    if (event.ctrlKey && event.shiftKey && event.keyCode === 73) {
        event.preventDefault();
    }
    // Disable Ctrl+Shift+J (Console)
    if (event.ctrlKey && event.shiftKey && event.keyCode === 74) {
        event.preventDefault();
    }
});

// Detect Developer Tools opening by checking window size
(function() {
    var threshold = 160;  // Minimum width for developer tools to be opened
    setInterval(function() {
        var width = window.outerWidth - window.innerWidth;
        if (width > threshold) {
            alert("Developer tools detected!");
            // Optionally, redirect or disable functionality (e.g., location.href = 'https://example.com';)
        }
    }, 1000);
})();

// Prevent viewing source code using right-click and keyboard shortcuts
document.oncontextmenu = function() {
    return false; // Disable right-click context menu
};

document.onkeydown = function(e) {
    if (e.keyCode === 123) { // F12
        return false; // Disable F12 (Developer Tools)
    } else if (e.ctrlKey && e.shiftKey && e.keyCode === 73) { // Ctrl+Shift+I (Inspect)
        return false; // Disable Ctrl+Shift+I (Developer Tools)
    }
};
