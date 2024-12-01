// Get all the star elements
const stars = document.querySelectorAll('.star');
let rating = 0; // To store the rating value

// Function to handle star clicks
stars.forEach(star => {
    star.addEventListener('click', () => {
        // Get the value of the clicked star
        rating = star.getAttribute('data-value');
        
        // Highlight the stars up to the clicked one
        updateStars(rating);
    });
});

// Function to update the star ratings visually
function updateStars(rating) {
    const stars = document.querySelectorAll('.star-rating input');
    stars.forEach((star, index) => {
        if (index < rating) {
            star.parentElement.style.color = '#ff9800'; // Gold color for selected stars
        } else {
            star.parentElement.style.color = ''; // Reset color
        }
    });
}

// Function to handle feedback submission
function submitFeedback() {
    // Get the feedback message
    const feedbackMessage = document.getElementById('feedbackMessage').value.trim();

    // Get the selected star rating
    const rating = document.querySelector('input[name="rating"]:checked');

    // Validate input
    if (!rating) {
        alert('Please select a star rating.');
        return;
    }

    if (!feedbackMessage) {
        alert('Please provide feedback in the text area.');
        return;
    }

    // Success alert
    alert('Thank you for your feedback!');

    // Clear the form
    document.getElementById('feedbackMessage').value = '';
    document.querySelectorAll('input[name="rating"]').forEach(input => (input.checked = false));
}


