
var slides = document.querySelectorAll(".reviews__sliding .reviews__sliding-field");
var currentSlide = 0;
var next = document.querySelector(".reviews__switch-arrows-next");
var previous = document.querySelector(".reviews__switch-arrows-previous");


function nextSlide() {
  goToSlide(currentSlide + 1);
}

function previousSlide() {
  goToSlide(currentSlide - 1);
}

function goToSlide(n) {
  slides[currentSlide].className = "reviews__sliding-field";
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].className = "reviews__sliding-field reviews__sliding-field--current";
}


next.onclick = function () {
  nextSlide();
};
previous.onclick = function () {
  previousSlide();
};
