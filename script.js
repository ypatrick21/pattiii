
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

//activate background color for navbar on scroll
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 10) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

//back to top button functionality
const backToTopButton = document.getElementById("backToTop");

//activate navbar item if scrolled to specific section
const sections = document.querySelectorAll('section');
  const navLinksa = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    let currentSection = null;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (pageYOffset >= sectionTop - 80) {
        currentSection = section.getAttribute('id');
      }
    });

    navLinksa.forEach(link => {
      link.classList.remove('active');
      if (currentSection && link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  });

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