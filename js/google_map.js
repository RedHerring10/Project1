// Scroll back to top when the button is clicked
document.getElementById("back-to-top").onclick = function() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}


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