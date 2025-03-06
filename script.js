// Mendapatkan semua elemen slide
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

// Fungsi untuk menampilkan slide berdasarkan index
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = (i === index) ? 'block' : 'none'; // Menampilkan slide yang sesuai
    });
}

// Fungsi untuk mengganti gambar setiap detik
function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length; // Ganti ke slide berikutnya
    showSlide(currentIndex); // Tampilkan slide yang baru
}

// Tampilkan slide pertama
showSlide(currentIndex);

// Ganti gambar setiap 1 detik
setInterval(nextSlide, 1000);

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;  // Cycle backward
    showSlide(currentIndex);
}

function startSlideShow() {
    showSlide(currentIndex);
    setInterval(nextSlide, 3000);
}

// Menu Toggle Function
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            console.log('Menu toggled');
        });
    }

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.nav-menu') && !event.target.closest('.menu-toggle')) {
            navMenu.classList.remove('active');
        }
    });

    // Handle dropdowns
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', function(e) {
            if (e.target.closest('.dropdown > a')) {
                e.preventDefault();
                this.classList.toggle('active');
            }
        });
    });

    // Toggle complaint form visibility
    const complaintFormToggle = document.getElementById("complaintFormToggle");
    if (complaintFormToggle) {
        complaintFormToggle.addEventListener('click', toggleComplaintForm);
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

    // Menu toggle untuk nav
    const navToggle = document.querySelector('.nav-toggle');
    const primaryMenu = document.getElementById('primary-menu');

    if (navToggle && primaryMenu) {
        navToggle.addEventListener('click', function() {
            const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
            navToggle.setAttribute('aria-expanded', !isExpanded);
            primaryMenu.classList.toggle('active');
        });
    }
});

// Toggle complaint form visibility function
function toggleComplaintForm() {
    const form = document.getElementById("complaintForm");
    form.style.display = form.style.display === "block" ? "none" : "block";
}

// Global toggle menu function (called from HTML)
function toggleMenu() {
    console.log('toggleMenu called'); // Debug log
    const navMenu = document.querySelector('.nav-menu');
    if (navMenu) {
        navMenu.classList.toggle('active');
    }
}

function exampleFunction() {
    if (condition) {
        console.log("Condition met");
    }
}

function anotherFunction() {
    console.log("Another function");
}