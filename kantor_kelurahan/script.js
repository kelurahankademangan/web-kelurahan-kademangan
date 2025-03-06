let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? "block" : "none";
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;  // Cycle through slides
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;  // Cycle backward
    showSlide(currentSlide);
}

function startSlideShow() {
    showSlide(currentSlide);  // Show the current slide
    setInterval(nextSlide, 3000);  // Auto switch slides every 3 seconds
}

document.addEventListener("DOMContentLoaded", () => {
    startSlideShow();  // Start slideshow after DOM is loaded

    // Manually navigating slides
    document.querySelector(".prev").addEventListener("click", prevSlide);
    document.querySelector(".next").addEventListener("click", nextSlide);
});

// Toggle complaint form visibility
function toggleComplaintForm() {
    const form = document.getElementById("complaintForm");
    form.style.display = form.style.display === "block" ? "none" : "block";
}
// Mengambil elemen header
const header = document.querySelector('header');

// Menambahkan event listener untuk scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {  // Jika halaman di-scroll lebih dari 0
        header.classList.add('scrolled');  // Menambahkan kelas 'scrolled'
    } else {
        header.classList.remove('scrolled');  // Menghapus kelas 'scrolled' jika di posisi atas
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    // Untuk dropdown menu
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    });
});

document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('nav').classList.toggle('active');
});

function toggleMenu() {
    var menu = document.getElementById("navMenu");
    var dropdowns = document.querySelectorAll('.dropdown');
    
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }

    // Tambahkan event listener untuk dropdown
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', function(e) {
            e.preventDefault();
            this.classList.toggle('active');
        });
    });
}
