let currentIndex = 0;
const slides = document.querySelectorAll(".slider a");
const dots = document.querySelectorAll(".scroll-btn");

function changeSlide(index) {
    currentIndex = index;
    const offset = -index * 100 + "%";
    document.querySelector(".slider").style.transform = `translateX(${offset})`;
    
    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");
}

// Auto slide every 5 seconds
setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    changeSlide(currentIndex);
}, 5000);