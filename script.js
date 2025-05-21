
const hamburger = document.querySelector('.hamburger');
const burgerIcon = document.querySelector('.hamburger .burgermenu');
const navLinks = document.getElementById('navLinks');
const navItems = document.querySelectorAll('.nav-item');

// Toggle menu and icon active state
hamburger.addEventListener('click', function () {
  navLinks.classList.toggle('show');
  burgerIcon.classList.toggle('active');
});

// Close menu when nav-item is clicked and reset hamburger icon
navItems.forEach(function (item) {
  item.addEventListener('click', function () {
    navLinks.classList.remove('show');
    burgerIcon.classList.remove('active');
  });
});


const backToTopButton = document.getElementById("backToTop");

// Show/hide the button on scroll
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
});

// Scroll to top when button clicked
backToTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});