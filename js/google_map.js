// Scroll back to top when the button is clicked
document.getElementById("back-to-top").onclick = function() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

let currentIndex = 0;

function changeSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    } else if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }

    const slider = document.querySelector('.slider');
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

initializeSlider();

function initializeSlider(){
    slides[slideIndex].classList.add("displaySlider");
    intervalId = setInterval(nextSLider, 5000);
}

function showSlider(index){

    if(index >= slides.length){
        slideIndex = 0;
    }
    else if(index < 0){
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");
}

function prevSlider(){
    slideIndex--;
    showSlider(slideIndex)

}

function nextSLider(){
    slideIndex++;
    showSlider(slideIndex);
}