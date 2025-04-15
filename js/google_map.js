// Scroll back to top when the button is clicked
document.getElementById("back-to-top").onclick = function() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}


// Function to change the slide for a specific slider
function changeSlide(direction, sliderId) {
    const slides = document.querySelectorAll(`#${sliderId} .slide`);
    const totalSlides = slides.length;
    let currentIndex = parseInt(localStorage.getItem(sliderId)) || 0; // Get the current index from localStorage or default to 0
  
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
  
    // Save the current index to localStorage
    localStorage.setItem(sliderId, currentIndex);
  }
  
  // Initialize the sliders by displaying the first slide
  document.addEventListener('DOMContentLoaded', () => {
    // Initialize the first slider (slider1)
    const slides1 = document.querySelectorAll('#slider1 .slide');
    slides1.forEach(slide => slide.style.display = 'none'); // Hide all slides initially
    slides1[0].style.display = 'block'; // Show the first slide by default
  
    // Initialize the second slider (slider2)
    const slides2 = document.querySelectorAll('#slider2 .slide');
    slides2.forEach(slide => slide.style.display = 'none'); // Hide all slides initially
    slides2[0].style.display = 'block'; // Show the first slide by default
  });