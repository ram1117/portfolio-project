function createMobilePopup(proj) {

  let popup = document.createElement('div');
  popup.classList.add('popup-container');
  let closeIcon = document.createElement('img');
  closeIcon.src = 'res-icons/ic_cross-1.svg';
  closeIcon.alt = 'close popup icon';
  closeIcon.style.float = 'right';
  closeIcon.style.margin = '3vw 5vw';
  closeIcon.onclick = function () { dismissPopup() };

  let header = document.createElement('h1');
  header.classList.add('popup-header');
  let techContainer = document.createElement('ul');
  techContainer.classList.add('pop-tech-cntnr');
  let newDiv = document.createElement('div');
  newDiv.classList.add('scroll-container');
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
  let btn1 = document.createElement('button');
  btn1.classList.add('popup-button', 'live-button');
  btn1.textContent = 'See Live';
  let btn2 = document.createElement('button');
  btn2.classList.add('popup-button', 'src-button');
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
    
    popup.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
  return popup;
}

function createDesktopPopup(proj){
let desktopPop = createMobilePopup(proj);
desktopPop.style.border='solid 3px #1a2236';
return desktopPop;
}

function createPopup(project) {

  let popupwindow;
  if (window.innerWidth <= 768) {
    popupwindow = createMobilePopup(project);
  }
  if(window.innerWidth > 768){
    popupwindow = createDesktopPopup(project);
  }
  let container = document.querySelector('.projects-container');
  container.appendChild(popupwindow);
  loadNewProj(project);
  document.body.style.overflow = 'hidden';
}


function loadNewProj(projectObj){
let pheader = document.querySelector('.popup-header');
let ptechCntnr =document.querySelector('.pop-tech-cntnr');
let pscrollCntnr = document.querySelector('.scroll-container');
let lButton = document.querySelector('.left-button');
let rButton = document.querySelector('.right-button');
let pdescription = document.querySelector('.popup-description');

pheader.textContent = projectObj.name;

while(ptechCntnr.firstChild){
  ptechCntnr.removeChild(ptechCntnr.firstChild);
}
projectObj.technology.forEach(element => {
  let techItem = document.createElement('li');
  techItem.classList.add('pop-tech-item');
  techItem.textContent = element;
  ptechCntnr.appendChild(techItem);
});

pscrollCntnr.style.background = `url('${projectObj.image}') 0 0 no-repeat`;
pscrollCntnr.style.backgroundSize='cover';
let projIndex = projectArray.indexOf(projectObj);
if(projIndex==0){
  lButton.setAttribute('disabled','');
}

lButton.onclick = function() {
  loadNewProj(projectArray[projIndex-1]);
  rButton.removeAttribute('disabled');
}

if(projIndex>=projectArray.length-1){
  rButton.setAttribute('disabled','');
}
rButton.onclick = function(){
  loadNewProj(projectArray[projIndex+1]);
  lButton.removeAttribute('disabled');
}
pdescription.textContent = projectObj.description;

}

