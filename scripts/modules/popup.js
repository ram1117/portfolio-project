function createMobilePopup() {

  let popup = document.createElement('div');
  popup.classList.add('popup-container');
  let closeIcon = document.createElement('img');
  closeIcon.src = 'res-icons/ic_cross-1.svg';
  closeIcon.alt = 'close popup icon';
  closeIcon.style.float = 'right';
  closeIcon.style.margin = '3vh 5vw';
  closeIcon.onclick = function () { dismissPopup() };

  let header = document.createElement('h1');
  header.classList.add('popup-header');
  let techContainer = document.createElement('ul');
  techContainer.classList.add('pop-tech-cntnr');
  let newDiv = document.createElement('div');
  newDiv.classList.add('project-scroll-container');
  let leftButton = document.createElement('button');
  leftButton.classList.add('left-button');
  let rightButton = document.createElement('button');
  rightButton.classList.add('right-button');
  newDiv.appendChild(leftButton);
  newDiv.appendChild(rightButton);

  let newPar = document.createElement('p');
  newPar.classList.add('popup-description');

  let popBtnCntnr = document.createElement('div');
  popBtnCntnr.classList.add('pop-btn-contnr');
  let btn1 = document.createElement('a');
  btn1.classList.add('popup-button', 'live-button');
  btn1.textContent = 'See Live';
  btn1.target='_blank';
  let btn2 = document.createElement('a');
  btn2.classList.add('popup-button', 'src-button');
  btn2.target='_blank';
  btn2.textContent = 'See Source';
  popBtnCntnr.appendChild(btn1);
  popBtnCntnr.appendChild(btn2);

  popup.appendChild(closeIcon);
  popup.appendChild(header);
  popup.appendChild(techContainer);
  popup.appendChild(newDiv);
  popup.appendChild(newPar);
  popup.appendChild(popBtnCntnr);

  function dismissPopup() {
    let container = document.querySelector('.projects-container');
    let pop = document.querySelector('.popup-container');
    container.removeChild(pop);
    document.body.style.overflow = 'auto';
  }
  return popup;
}

function createDesktopPopup() {
  let desktopPop = createMobilePopup();
  desktopPop.classList.add('popup-desktop');
  let dtheader = desktopPop.querySelector('.popup-header');
  dtheader.classList.add('dt-pop-header');
  let dtdescr = desktopPop.querySelector('.popup-description');
  dtdescr.classList.add('dt-pop-descr');
  let btnCntnr = desktopPop.querySelector('.pop-btn-contnr');
  btnCntnr.classList.add('dt-btn-cntnr');
  let dtliveBtn = desktopPop.querySelector('.live-button');
  dtliveBtn.classList.add('dt-live-button');
  let dtSrcBtn = desktopPop.querySelector('.src-button');
  dtSrcBtn.classList.add('dt-src-button');

  let projNav = document.createElement('div');
  projNav.classList.add('proj-nav');
  let leftProjBtn = document.createElement('button');
  leftProjBtn.classList.add('proj-nav-left');
  leftProjBtn.textContent = 'Prevoius project';
  let rightProjBtn = document.createElement('button');
  rightProjBtn.classList.add('proj-nav-right');
  rightProjBtn.textContent = 'Next project';
  projNav.append(leftProjBtn);
  projNav.append(rightProjBtn);
  desktopPop.append(projNav);
  return desktopPop;
}

function createPopup(project) {
  let popupwindow;
  if (window.innerWidth <= 768) {
    popupwindow = createMobilePopup();
  }
  if (window.innerWidth > 768) {
    popupwindow = createDesktopPopup();
  }
  let container = document.querySelector('.projects-container');
  container.appendChild(popupwindow);
  loadNewProj(project);
  document.body.style.overflow = 'hidden';
}

function loadNewProj(projectObj) {
  let pheader = document.querySelector('.popup-header');
  let ptechCntnr = document.querySelector('.pop-tech-cntnr');
  let pscrollCntnr = document.querySelector('.project-scroll-container');
  let lButton = document.querySelector('.left-button');
  let rButton = document.querySelector('.right-button');
  let pdescription = document.querySelector('.popup-description');
  let demoLink = document.querySelector('.live-button');
  let srcLink = document.querySelector('.src-button');

  pheader.textContent = projectObj.name;

  while (ptechCntnr.firstChild) {
    ptechCntnr.removeChild(ptechCntnr.firstChild);
  }
  projectObj.technology.forEach(element => {
    let techItem = document.createElement('li');
    techItem.classList.add('pop-tech-item');
    techItem.textContent = element;
    ptechCntnr.appendChild(techItem);
  });

  pscrollCntnr.style.background = `url('${projectObj.image}') 0 0 no-repeat`;
  pscrollCntnr.style.backgroundSize = 'cover';
  let projIndex = projectArray.indexOf(projectObj);
  if (projIndex == 0) {
    lButton.setAttribute('disabled', '');
  }

  lButton.onclick = function () {
    loadNewProj(projectArray[projIndex - 1]);
    rButton.removeAttribute('disabled');
  }

  if (projIndex >= projectArray.length - 1) {
    rButton.setAttribute('disabled', '');
  }
  rButton.onclick = function () {
    loadNewProj(projectArray[projIndex + 1]);
    lButton.removeAttribute('disabled');
  }
  pdescription.textContent = projectObj.description;

  demoLink.href = projectObj.livedemo;
  srcLink.href = projectObj.source;

  if (window.innerWidth > 768) {

    let leftNavBtn = document.querySelector('.proj-nav-left');
    let rightNavBtn = document.querySelector('.proj-nav-right');
    if (projIndex == 0) {
      leftNavBtn.setAttribute('disabled', '');
    }
    if (projIndex >= projectArray.length - 1) {
      rightNavBtn.setAttribute('disabled', '')
    }
    leftNavBtn.onclick = function () {
      loadNewProj(projectArray[projIndex - 1]);
      rightNavBtn.removeAttribute('disabled');
    };
    rightNavBtn.onclick =function(){
      loadNewProj(projectArray[projIndex + 1]);
      leftNavBtn.removeAttribute('disabled');
    }

  }

}

