// javascript for toggle

document.addEventListener("DOMContentLoaded", function () {
  // Get the menu toggle button and menu
  var menuToggle = document.querySelector('.menu-toggle');
  var menu = document.querySelector('.menu');

  // Toggle the 'active' class on click
  menuToggle.addEventListener('click', function () {
    menu.classList.toggle('active');
  });

  // Get all menu items
  var menuItems = document.querySelectorAll('.menu li');

  // Add click event listener to each menu item
  menuItems.forEach(function (menuItem) {
    menuItem.addEventListener('click', function (event) {
      // Remove "active" class from all menu items
      menuItems.forEach(function (item) {
        item.classList.remove('active');
      });

      // Add "active" class to the clicked menu item
      menuItem.classList.add('active');

      // If the menu is open (on small screens), close it
      if (menu.classList.contains('active')) {
        menu.classList.remove('active');
      }
    });
  });

  // Get all submenu items
  var submenuItems = document.querySelectorAll('.submenu a');

  // Add click event listener to each submenu item
  submenuItems.forEach(function (submenuItem) {
    submenuItem.addEventListener('click', function (event) {
      event.stopPropagation();
    });
  });
});


document.querySelector('.menu').addEventListener('click', function (event) {
  event.stopPropagation();
});

