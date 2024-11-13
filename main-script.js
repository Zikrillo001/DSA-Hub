// main-script.js

// Function to smoothly scroll to a section when a link is clicked
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function(e) {
        if (this.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// Function to handle "Download Presentation" button click
// document.querySelectorAll('.download-presentation').forEach(button => {
//     button.addEventListener('click', function() {
//         alert("Downloading presentation...");
//         // You can add the download functionality here, e.g., redirecting to a file download
//     });
// });

// Button hover effect to change color
document.querySelectorAll('.read-more, .visual-test, .download-presentation').forEach(button => {
    button.addEventListener('mouseover', function() {
        this.style.backgroundColor = '#388E3C';
    });
    button.addEventListener('mouseout', function() {
        this.style.backgroundColor = '#4CAF50';
    });
});

// Dynamic content loading (Placeholder function)
function loadContent(topic) {
    // alert("Loading content for: " + topic);
    // This function can dynamically load content if you plan to expand the site
}

// Example usage for dynamic content loading
document.querySelectorAll('.topic-card').forEach(card => {
    card.addEventListener('click', function() {
        const topic = this.querySelector('h2').innerText;
        loadContent(topic);
    });
});

console.log("Main script loaded successfully.");
