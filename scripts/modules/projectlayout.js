
function createProjectTile(projectObj) {
  let tile = document.createElement('div');
  tile.classList.add('project-tile');
  tile.id='project-tile-'+projectObj.projectno;
  let thumbNail = document.createElement('img');
  thumbNail.src = projectObj.image;
  thumbNail.alt = projectObj.imageAlt;
  thumbNail.classList.add('project-thumbnail');
  tile.appendChild(thumbNail);
  
  let details = document.createElement('div');
  details.classList.add('project-details');

  let projTitle = document.createElement('h3');
  projTitle.classList.add('project-title');
  projTitle.textContent = projectObj.name;

  let techContainer = document.createElement('ul');
  techContainer.classList.add('tech-item-list');

  projectObj.technology.forEach((tech) => {
    let techItem = document.createElement('li');
    techItem.classList.add('tech-item');
    techItem.textContent = tech;
    techContainer.appendChild(techItem);
  });
  let projectButton = document.createElement('button');
  projectButton.classList.add('button-generic', 'button-project');
  projectButton.textContent = 'See this Project';
  projectButton.onclick = function () { createMobilePopup(projectObj) };

  details.appendChild(projTitle);
  details.appendChild(techContainer);
  details.appendChild(projectButton);

  tile.appendChild(details);

  function displayDetails(){
    if(window.innerWidth>768){
      details.classList.add('project-details-hover');
      details.style.display='block';
    }
    
  }
  function hideDetails(){
    if(window.innerWidth>768){
      details.style.display='none';
      thumbNail.style.display='block';
    }
  }
  tile.onmouseover = function(){displayDetails()};
  tile.onmouseleave = function(){hideDetails()};
  
  
  return tile;
}
function createMobileLayout() {
  projectArray.forEach(obj => {
    let projectTile = createProjectTile(obj);
    projectsContainer.appendChild(projectTile);
  });
}
function createDesktopLayout() {
  let i = 1;
  projectArray.forEach(obj => {
    let projectTile = createProjectTile(obj);
    projectTile.classList.add('project-tile-' + i);
    projectsContainer.appendChild(projectTile);
    i++;
  });
}

function removeProjects(container) {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

let projectsContainer = document.querySelector('.projects-container');
let projectArray = [project1, project2, project3, project4, project5, project6];
function createLayout() {
  if (window.innerWidth <= 768)
    createMobileLayout();
  else
    createDesktopLayout();
}
createLayout();

window.onresize = function () {
  if (window.innerWidth > 768) {
    removeProjects(projectsContainer);
    createDesktopLayout();
  }
};

