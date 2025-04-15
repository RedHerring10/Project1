// Scroll back to top when the button is clicked
document.getElementById("back-to-top").onclick = function() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}


let currentIndex = 0; // Starts with the first slide

// Function to change the slide
function changeSlide(direction) {
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;

  // Hide the current slide
  slides[currentIndex].style.display = 'none';

  // Update the index based on direction (prev or next)
  currentIndex += direction;

  // If the index is out of bounds, loop it
  if (currentIndex < 0) {
    currentIndex = totalSlides - 1;
  } else if (currentIndex >= totalSlides) {
    currentIndex = 0;
  }

  // Show the new slide
  slides[currentIndex].style.display = 'block';
}

// Initialize the slider by displaying the first slide
document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slide');
  slides.forEach(slide => slide.style.display = 'none'); // Hide all slides initially
  slides[0].style.display = 'block'; // Show the first slide by default
});