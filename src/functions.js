
document.addEventListener("DOMContentLoaded", function () {
    const titleElement = document.getElementById("color-changing-title");
    const titleText = titleElement.innerText;
    const colors = ["#ffc0cb", "#7a5980", "#3b3b58"];

    // Split the title text into an array of characters
    const letters = titleText.split('');

    // Create an array of spans, each containing a letter
    const coloredLetters = letters.map((letter, index) => {
        const span = document.createElement('span');
        span.textContent = letter;
        span.style.color = colors[index % colors.length];
        return span;
    });

    // Replace the original title with the array of colored spans
    titleElement.innerHTML = '';
    coloredLetters.forEach(span => titleElement.appendChild(span));

    // Function to change colors every second
    // Function to change colors every second
function changeColors() {
    coloredLetters.forEach((span, index) => {
        span.style.color = colors[(index + 1) % colors.length];
    });
    colors.unshift(colors.pop()); // Rotate the colors array
}


    // Change colors every second
    setInterval(changeColors, 1000);
});

