// Function to scroll to a specific section
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  const offsetTop = section.offsetTop;
  window.scrollTo({
    top: offsetTop,
    behavior: 'smooth',
  });
}

// Get all the navigation links
const navLinks = document.querySelectorAll('.menu a');

// Attach click event listener to each link
navLinks.forEach(link => {
  link.addEventListener('click', function (event) {
    event.preventDefault();
    const targetSectionId = this.getAttribute('href').slice(1); // Remove the '#' from the href
    scrollToSection(targetSectionId);
  });
});

// Function to toggle the mobile navigation
function toggleMobileNav() {
  const navMenu = document.querySelector('.menu');
  navMenu.classList.toggle('show');
}

// Get the hamburger element
const hamburger = document.querySelector('.hamburger');

// Attach click event listener to the hamburger
hamburger.addEventListener('click', function () {
  toggleMobileNav();
});


document.addEventListener("DOMContentLoaded", function() {
  var buttons = document.querySelectorAll(".read-more");

  buttons.forEach(function(button) {
    button.addEventListener("click", function() {
      var parentLi = this.parentNode;
      var toggleContent = parentLi.querySelector(".toggle-content");

      parentLi.classList.toggle("expand");
      toggleContent.classList.toggle("visible");

      if (parentLi.classList.contains("expand")) {
        this.innerText = "Read Less";
      } else {
        this.innerText = "Read More";
      }
    });
  });
});



