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

// projects object sets
const project1 = {
  name: 'Project 1',
  image: 'res-images/Rectangle 21.png',
  imageAlt: 'Open lap top top view',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
  technology: ['Ruby on Rails', 'HTML/CSS', 'Javascript'],
  livedemo: 'https://ram1117.github.io',
  source: 'https://github.com',
  projectno: 1,
};
const project2 = {
  name: 'Project 2',
  image: 'res-images/Rectangle 22.png',
  imageAlt: 'open laptop and a mobile',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
  technology: ['Ruby on Rails', 'HTML/CSS', 'Javascript'],
  livedemo: 'https://ram1117.github.io',
  source: 'https://github.com',
  projectno: 2,
};
const project3 = {
  name: 'Project 3',
  image: 'res-images/Rectangle 26.png',
  imageAlt: 'open laptop tilted to right',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
  technology: ['Ruby on Rails', 'HTML/CSS', 'Javascript'],
  livedemo: 'https://ram1117.github.io',
  source: 'https://github.com',
  projectno: 3,
};
const project4 = {
  name: 'Project 4',
  image: 'res-images/Rectangle 27.png',
  imageAlt: 'open laptop front view',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
  technology: ['Ruby on Rails', 'HTML/CSS', 'Javascript'],
  livedemo: 'https://ram1117.github.io',
  source: 'https://github.com',
  projectno: 4,
};
const project5 = {
  name: 'Project 5',
  image: 'res-images/Rectangle 46.png',
  imageAlt: 'open laptop front view 2',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
  technology: ['Ruby on Rails', 'HTML/CSS', 'Javascript'],
  livedemo: 'https://ram1117.github.io',
  source: 'https://github.com',
  projectno: 5,
};
const project6 = {
  name: 'Project 6',
  image: 'res-images/Rectangle 47.png',
  imageAlt: 'open laptop left side view',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
  technology: ['Ruby on Rails', 'HTML/CSS', 'Javascript'],
  livedemo: 'https://ram1117.github.io',
  source: 'https://github.com',
  projectno: 6,
};

const projectArray = [project1, project2, project3, project4, project5, project6];

// create project detail popup window -mobile and desktop

const projectThumbnails = [];
projectArray.forEach((project) => {
  projectThumbnails.push(project.image);
});

// function to load project details into popup
function loadNewProj(projectObj) {
  const pheader = document.querySelector('.popup-header');
  const ptechCntnr = document.querySelector('.pop-tech-cntnr');
  const pscrollCntnr = document.querySelector('.project-scroll-container');
  const thmbScroll = document.querySelector('.thumbnail-scroll');
  const lButton = document.querySelector('.left-button');
  const rButton = document.querySelector('.right-button');
  const pdescription = document.querySelector('.popup-description');
  const demoLink = document.querySelector('.live-button');
  const srcLink = document.querySelector('.src-button');

  pheader.textContent = projectObj.name;

  while (ptechCntnr.firstChild) {
    ptechCntnr.removeChild(ptechCntnr.firstChild);
  }
  while (thmbScroll.firstChild) {
    thmbScroll.removeChild(thmbScroll.firstChild);
  }
  projectObj.technology.forEach((element) => {
    const techItem = document.createElement('li');
    techItem.classList.add('pop-tech-item');
    techItem.textContent = element;
    ptechCntnr.appendChild(techItem);
  });

  pscrollCntnr.style.background = `url('${projectObj.image}') 0 0 no-repeat`;
  pscrollCntnr.style.backgroundSize = 'cover';
  const projIndex = projectArray.indexOf(projectObj);
  const thumbArray = [...projectThumbnails];

  thumbArray.splice(projIndex, 4).forEach((img) => {
    const imgElement = document.createElement('img');
    imgElement.src = img;
    imgElement.classList.add('thumb-scroll-img');
    thmbScroll.appendChild(imgElement);
  });

  thmbScroll.firstChild.style.border = 'solid 3px #1a2236';

  if (projIndex === 0) {
    lButton.setAttribute('disabled', '');
  }

  lButton.onclick = function () {
    loadNewProj(projectArray[projIndex - 1]);
    rButton.removeAttribute('disabled');
  };

  if (projIndex >= projectArray.length - 1) {
    rButton.setAttribute('disabled', '');
  }
  rButton.onclick = function () {
    loadNewProj(projectArray[projIndex + 1]);
    lButton.removeAttribute('disabled');
  };
  pdescription.textContent = projectObj.description;

  demoLink.href = projectObj.livedemo;
  srcLink.href = projectObj.source;

  if (window.innerWidth > 768) {
    const leftNavBtn = document.querySelector('.proj-nav-left');
    const rightNavBtn = document.querySelector('.proj-nav-right');
    if (projIndex === 0) {
      leftNavBtn.setAttribute('disabled', '');
    }
    if (projIndex >= projectArray.length - 1) {
      rightNavBtn.setAttribute('disabled', '');
    }
    leftNavBtn.onclick = function () {
      loadNewProj(projectArray[projIndex - 1]);
      rightNavBtn.removeAttribute('disabled');
    };
    rightNavBtn.onclick = function () {
      loadNewProj(projectArray[projIndex + 1]);
      leftNavBtn.removeAttribute('disabled');
    };
  }
}

// function to create popup for project details
function createPopupWindow() {
  function dismissPopup() {
    const container = document.querySelector('.projects-container');
    const pop = document.querySelector('.popup-modal');
    container.removeChild(pop);
    document.body.style.overflow = 'auto';
  }
  const popupModal = document.createElement('div');
  popupModal.classList.add('popup-modal');
  const popup = document.createElement('div');
  popup.classList.add('popup-container');
  const closeIcon = document.createElement('img');
  closeIcon.classList.add('popup-close-btn');
  closeIcon.src = 'res-icons/ic_cross-1.svg';
  closeIcon.alt = 'close popup icon';
  closeIcon.onclick = function () { dismissPopup(); };

  const headerContainer = document.createElement('div');
  headerContainer.classList.add('popup-header-container');
  const header = document.createElement('h1');
  header.classList.add('popup-header');
  headerContainer.appendChild(header);
  headerContainer.appendChild(closeIcon);
  const techContainer = document.createElement('ul');
  techContainer.classList.add('pop-tech-cntnr');
  const newDiv = document.createElement('div');
  newDiv.classList.add('project-scroll-container');
  const leftButton = document.createElement('button');
  leftButton.classList.add('left-button');
  const rightButton = document.createElement('button');
  rightButton.classList.add('right-button');
  newDiv.appendChild(leftButton);
  newDiv.appendChild(rightButton);

  const thumbnailScroll = document.createElement('div');
  thumbnailScroll.classList.add('thumbnail-scroll');
  const newPar = document.createElement('p');
  newPar.classList.add('popup-description');

  const popBtnCntnr = document.createElement('div');
  popBtnCntnr.classList.add('pop-btn-contnr');
  const btn1 = document.createElement('a');
  btn1.classList.add('popup-button', 'live-button');
  btn1.textContent = 'See Live';
  btn1.target = '_blank';
  const btn2 = document.createElement('a');
  btn2.classList.add('popup-button', 'src-button');
  btn2.target = '_blank';
  btn2.textContent = 'See Source';
  popBtnCntnr.appendChild(btn1);
  popBtnCntnr.appendChild(btn2);

  const projNav = document.createElement('div');
  projNav.classList.add('proj-nav');
  const leftProjBtn = document.createElement('button');
  leftProjBtn.classList.add('proj-nav-left');
  leftProjBtn.textContent = 'Prevoius project';
  const rightProjBtn = document.createElement('button');
  rightProjBtn.classList.add('proj-nav-right');
  rightProjBtn.textContent = 'Next project';
  projNav.append(leftProjBtn);
  projNav.append(rightProjBtn);

  popup.appendChild(headerContainer);
  popup.appendChild(techContainer);
  popup.appendChild(newDiv);
  popup.appendChild(thumbnailScroll);
  popup.appendChild(newPar);
  popup.appendChild(popBtnCntnr);
  popup.appendChild(projNav);

  popupModal.appendChild(popup);
  return popupModal;
}

function createPopup(project) {
  const popupwindow = createPopupWindow();
  const container = document.querySelector('.projects-container');
  container.appendChild(popupwindow);
  loadNewProj(project);
  document.body.style.overflow = 'hidden';
}

// create layout in mobile and desktop version

const projectsContainer = document.querySelector('.projects-container');
function createProjectTile(projectObj) {
  const tile = document.createElement('div');
  tile.classList.add('project-tile');
  tile.id = `project-tile-${projectObj.projectno}`;
  const thumbNail = document.createElement('img');
  thumbNail.src = projectObj.image;
  thumbNail.alt = projectObj.imageAlt;
  thumbNail.classList.add('project-thumbnail');
  tile.appendChild(thumbNail);

  const details = document.createElement('div');
  details.classList.add('project-details');

  const projTitle = document.createElement('h3');
  projTitle.classList.add('project-title');
  projTitle.textContent = projectObj.name;

  const techContainer = document.createElement('ul');
  techContainer.classList.add('tech-item-list');

  projectObj.technology.forEach((tech) => {
    const techItem = document.createElement('li');
    techItem.classList.add('tech-item');
    techItem.textContent = tech;
    techContainer.appendChild(techItem);
  });
  const projectButton = document.createElement('button');
  projectButton.classList.add('button-generic', 'button-project');
  projectButton.textContent = 'See this Project';
  projectButton.onclick = function () { createPopup(projectObj); };

  details.appendChild(projTitle);
  details.appendChild(techContainer);
  details.appendChild(projectButton);

  tile.appendChild(details);

  function displayDetails() {
    if (window.innerWidth > 768) {
      details.classList.add('project-details-hover');
      details.style.display = 'block';
    }
  }
  function hideDetails() {
    if (window.innerWidth > 768) {
      details.style.display = 'none';
      thumbNail.style.display = 'block';
    }
  }
  tile.onmouseover = function () { displayDetails(); };
  tile.onmouseleave = function () { hideDetails(); };

  return tile;
}
function createMobileLayout() {
  projectArray.forEach((obj) => {
    const projectTile = createProjectTile(obj);
    projectsContainer.appendChild(projectTile);
  });
}
function createDesktopLayout() {
  let i = 1;
  projectArray.forEach((obj) => {
    const projectTile = createProjectTile(obj);
    projectTile.classList.add(`project-tile-${i}`);
    projectsContainer.appendChild(projectTile);
    i += 1;
  });
}

function removeProjects(container) {
  const children = document.querySelectorAll('.project-tile');
  for (let i = 0; i < children.length; i += 1) {
    container.removeChild(children[i]);
  }
}

function createLayout() {
  if (window.innerWidth <= 768) createMobileLayout();
  else createDesktopLayout();
}

createLayout();

window.onresize = function () {
  removeProjects(projectsContainer);
  createLayout();
};
