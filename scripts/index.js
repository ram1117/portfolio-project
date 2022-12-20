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

// let project1 = {
//   name: 'Project 1',
//   image: 'res-images/Rectangle 21.png',
//   imageAlt: 'Open lap top top view',
//   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
//   technology: ['Ruby on Rails', 'HTML', 'CSS'],
//   buttontxt: 'See this Project',
//   livedemo: 'https://ram1117.github.io',
//   source: 'https://github.com',
// };
// let project2 = {
//   name: 'Project 2',
//   image: 'res-images/Rectangle 22.png',
//   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
//   technology: ['Ruby on Rails', 'HTML', 'CSS'],
//   livedemo: '',
//   source: '',
// };
// let project3 = {
//   name: 'Project 3',
//   image: 'res-images/Rectangle 26.png',
//   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
//   technology: ['Ruby on Rails', 'HTML', 'CSS'],
//   livedemo: '',
//   source: '',
// };
// let project4 = {
//   name: 'Project 4',
//   image: 'res-images/Rectangle 27.png',
//   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
//   technology: ['Ruby on Rails', 'HTML', 'CSS'],
//   livedemo: '',
//   source: '',
// };
// let project5 = {
//   name: 'Project 5',
//   image: 'res-images/Rectangle 46.png',
//   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
//   technology: ['Ruby on Rails', 'HTML', 'CSS'],
//   livedemo: '',
//   source: '',
// };
// let project6 = {
//   name: 'Project 6',
//   image: 'res-images/Rectangle 47.png',
//   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
//   technology: ['Ruby on Rails', 'HTML', 'CSS'],
//   livedemo: '',
//   source: '',
// };

// function createProjectTile(projectObj) {
//   let tile = document.createElement('div');
//   tile.classList.add('project-tile');

//   let thumbNail = document.createElement('img');
//   thumbNail.src = projectObj.image;
//   thumbNail.alt = projectObj.imageAlt;
//   thumbNail.classList.add('project-thumbnail');
//   tile.appendChild(thumbNail);

//   let details = document.createElement('div');
//   details.classList.add('project-details');


//   let projTitle = document.createElement('h3');
//   projTitle.classList.add('project-title');
//   projTitle.textContent = projectObj.name;

//   let techContainer = document.createElement('ul');
//   techContainer.classList.add('tech-item-list');
  
//   projectObj.technology.forEach((tech)=>
//   {
//     let techItem = document.createElement('li');
//     techItem.classList.add('tech-item');
//     techItem.textContent = tech;
//     techContainer.appendChild(techItem);
//   });
//   let projectButton = document.createElement('button');
//   projectButton.classList.add('button-generic', 'button-project');
//   projectButton.textContent = projectObj.buttontxt;
//   projectButton.onclick = function () { createPopup() };

//   details.appendChild(projTitle);
//   details.appendChild(techContainer);
//   details.appendChild(projectButton);

//   tile.appendChild(details);

//   return tile;
// }

// function createPopup() {
//   console.log('popup');
// }

// let projectArray = [project1, project2, project3, project4, project5, project6];

// let projectTile = createProjectTile(project1);
// let projectsContainer = document.querySelector('.projects-container');
// projectsContainer.appendChild(projectTile);


