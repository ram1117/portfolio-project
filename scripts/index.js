let menuIcon = document.querySelector('.toggle-menu-icon');
let navbar = document.querySelector('.nav-bar');
let navList = document.querySelector('.nav-list');


menuIcon.addEventListener('click',addMenuItems);

function addMenuItems(){
  navbar.classList.replace('nav-bar','nav-bar-expand')
  navList.classList.replace('nav-list','nav-list-visible'); 
}