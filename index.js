function lockScroll() {
  document.body.classList.toggle('lock-scroll');
}

document.addEventListener('DOMContentLoaded', function () {
  var currentPage = window.location.pathname;

  // Handle the case where the current page is the homepage
  if (currentPage === '/') {
    currentPage = '/index.html';
  }

  var navLinks = document.querySelectorAll('.nav__menu a');

  for (var i = 0; i < navLinks.length; i++) {
    var link = navLinks[i];

    // Check for partial match
    if (currentPage.indexOf(link.getAttribute('href')) !== -1) {
      link.parentElement.classList.add('active');
    }
  }
});

// Prevent showing animation on window resize
let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
  }, 400);
});


// Menu toogle on mobile
const navToggle = document.querySelector('.nav-toggle');
const menuToggle = document.querySelector('.menu-toggle');

navToggle.addEventListener('click', function (e) {
  this.classList.toggle('open');
  menuToggle.classList.toggle('active');
  e.stopPropagation();
});



// Dropdown toogle on mobile
const dropdown = document.querySelector('.dropdown a');

dropdown.addEventListener('click', function (e) {
  this.nextElementSibling.classList.toggle('show');
  this.parentNode.classList.toggle('active');
  e.stopPropagation();
});


// Second level dropdown toggle on mobile
const deepDropdown = document.querySelector('.second-level a');

deepDropdown.addEventListener('click', function (e) {
  this.nextElementSibling.classList.toggle('show');
  this.parentNode.classList.toggle('active');
  e.stopPropagation();
});



// js for version 2 hero section 

document.addEventListener('DOMContentLoaded', function () {
  var indicators = document.querySelectorAll('.custom-indicator');
  var carousel = new bootstrap.Carousel(document.getElementById('carouselExampleControls'));

  indicators.forEach(function (indicator, index) {
    indicator.addEventListener('click', function () {
      carousel.to(index);
    });
  });

  document.getElementById('carouselExampleControls').addEventListener('slid.bs.carousel', function (event) {
    var activeIndex = event.to;

    indicators.forEach(function (indicator, index) {
      if (index === activeIndex) {
        indicator.classList.add('active');
      } else {
        indicator.classList.remove('active');
      }
    });
  });
});
