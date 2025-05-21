// const sections = document.querySelectorAll('section');
// const navItems = document.querySelectorAll('.nav-item');

// const observer = new IntersectionObserver(entries => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       const id = entry.target.id;
//       navItems.forEach(link => {
//         link.classList.remove('active');
//         if (link.getAttribute('href') === `#${id}`) {
//           link.classList.add('active');
//         }
//       });
//     }
//   });
// }, {
//   threshold: 0.6 // adjust to trigger earlier/later
// });

// sections.forEach(section => observer.observe(section));

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