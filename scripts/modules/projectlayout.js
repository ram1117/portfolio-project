function createProjectTile(projectObj) {
  let tile = document.createElement('div');
  tile.classList.add('project-tile');

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
  projectButton.onclick = function () { createPopup() };

  details.appendChild(projTitle);
  details.appendChild(techContainer);
  details.appendChild(projectButton);

  tile.appendChild(details);
  function createPopup() {
    console.log(projectObj.name);
  }
  return tile;
}
let projectsContainer = document.querySelector('.projects-container');
let projectArray = [project1, project2, project3, project4, project5, project6];
if (window.innerWidth <= 768) {
  projectArray.forEach(obj => {
    let projectTile = createProjectTile(obj);
    projectsContainer.appendChild(projectTile);
  });}
  else {
    let i = 1;
    projectArray.forEach(obj => {
      let projectTile = createProjectTile(obj);
      projectTile.classList.add('project-tile-' + i);
      projectsContainer.appendChild(projectTile);
      i++;
    });
  }

