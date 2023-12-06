var currentPageClass = document.body.className;

var navLinks = document.querySelectorAll('.navbar-nav .nav-link');

navLinks.forEach(function (navLink) {
  if (navLink.getAttribute('href') === currentPageClass) {
    navLink.parentNode.classList.add('active');
  }
});
