const menuIcon = document.querySelector('#toggle-menu-icon');
const navbar = document.querySelector('.nav-bar');
const navList = document.querySelector('.nav-list');
const navListItem = document.querySelectorAll('.nav-list-item > a');

function expandMenu() {
  menuIcon.src = 'res-icons/ic_cross.svg';
  menuIcon.alt = 'toggle menu cross icon';
  navbar.classList.toggle('nav-bar-expand');
  navList.classList.toggle('invisible');
}
function collapseMenu() {
  menuIcon.src = 'res-icons/ic_menu.svg';
  menuIcon.alt = 'toggle menu hamburger icon';
  navbar.classList.toggle('nav-bar-expand');
  navList.classList.toggle('invisible');
}

function checkToggle() {
  if (menuIcon.dataset.toggleMenu === 'true') {
    expandMenu();
    document.body.classList.toggle('scroll-lock');
    menuIcon.dataset.toggleMenu = 'false';
  } else {
    collapseMenu();
    document.body.classList.toggle('scroll-lock');
    menuIcon.dataset.toggleMenu = 'true';
  }
}

// adding event listener to toggle menu icon
menuIcon.addEventListener('click', checkToggle);

// adding event listener to menu list items
navListItem.forEach((listItem) => {
  listItem.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
      collapseMenu();
      document.body.classList.toggle('scroll-lock');
      menuIcon.dataset.toggleMenu = 'true';
    }
  });
});
