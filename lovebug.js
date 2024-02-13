// Get the button elements
var yesButton = document.getElementById('valentine-button');
var noButton = document.getElementById('no-button');

// Add event listener to the "No" button
noButton.addEventListener('click', function() {
    // Enlarge the "Yes" button text
    var currentFontSize = window.getComputedStyle(yesButton, null).getPropertyValue('font-size');
    var newSize = parseInt(currentFontSize) + 20 + 'px';
    yesButton.style.fontSize = newSize;
});

// Add event listener to the "Yes" button
yesButton.addEventListener('click', function() {
    // Display a sweet message
    alert('DUH! , I already knew that dummy  I love you 💖');
});
