const slides = document.querySelector('.carousel-slides');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let slideIndex = 0;

prevButton.addEventListener('click', () => {
    slideIndex = (slideIndex - 1 + slides.children.length) % slides.children.length;
    updateCarousel();
});

nextButton.addEventListener('click', () => {
    slideIndex = (slideIndex + 1) % slides.children.length;
    updateCarousel();
});

function updateCarousel() {
    slides.style.transform = translateX(-${slideIndex * 100}%);
}