const slides = document.querySelectorAll('.slide');
const buttons = document.querySelectorAll('.scroll-btn');
const carousel = document.querySelector('.carousel');
let currentSlide = 0;
let slideInterval;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
    buttons.forEach((btn, i) => {
        btn.classList.toggle('active', i === index);
    });
    currentSlide = index;
}

function nextSlide() {
    let next = (currentSlide + 1) % slides.length;
    showSlide(next);
}

function startAutoSlide() {
    slideInterval = setInterval(nextSlide, 5000); // Change every 5 seconds
}

function stopAutoSlide() {
    clearInterval(slideInterval);
}

// Button click events
buttons[0].addEventListener('click', () => {
    showSlide(0);
    stopAutoSlide();
    startAutoSlide();
});
buttons[1].addEventListener('click', () => {
    showSlide(1);
    stopAutoSlide();
    startAutoSlide();
});
buttons[2].addEventListener('click', () => {
    showSlide(2);
    stopAutoSlide();
    startAutoSlide();
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    showSlide(0);
    startAutoSlide();
});

// Pause on hover
carousel.addEventListener('mouseenter', stopAutoSlide);
carousel.addEventListener('mouseleave', startAutoSlide);

//dropdown

function dropdown() {
    console.log("I Changed!!!")
    document.getElementsByClassName('below999px-dropdown-items')[0].style.display = 'none' ? 'flex':'none'
}


function dropdownforcontent() {
    console.log("I Changed!!!")
}

//carousel

//const firstImg= document.getElementById("scroll-container")

//firstImg.for

//for mobile

let touchStartX = 0;
let touchEndX = 0;

carousel.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
}, { passive: true });

carousel.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
}, { passive: true });

function handleSwipe() {
    const swipeDistance = touchEndX - touchStartX;
    if (Math.abs(swipeDistance) > 50) { // only trigger on real swipes
        if (swipeDistance < 0) {
            // Swipe Left
            showSlide((currentSlide + 1) % slides.length);
        } else {
            // Swipe Right
            showSlide((currentSlide - 1 + slides.length) % slides.length);
        }
        stopAutoSlide();
        startAutoSlide();
    }
}



