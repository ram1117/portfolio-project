function createMobilePopup(proj) {

  let popup = document.createElement('div');
  popup.classList.add('popup-container');
  let closeIcon = document.createElement('img');
  closeIcon.src='res-icons/ic_cross-1.svg';
  closeIcon.alt='close popup icon';
  closeIcon.style.float='right';
  closeIcon.style.margin='3vw 5vw';
  closeIcon.onclick = function(){ dismissPopup()};

  let header = document.createElement('h1');
  header.classList.add('popup-header');
  header.textContent = proj.name;

  let techlist = proj.technology;
  let techContainer = document.createElement('ul');
  techContainer.classList.add('pop-tech-cntnr');
  techlist.forEach(element => {
    let techItem = document.createElement('li');
    techItem.classList.add('pop-tech-item');
    techItem.textContent=element;
    techContainer.appendChild(techItem);
  });

  let newDiv = document.createElement('div');
  newDiv.classList.add('scroll-container');
  newDiv.style.background=`url('${proj.image}') 0 0 no-repeat`
  newDiv.style.backgroundSize='cover';
  let leftButton = document.createElement('button');
  leftButton.classList.add('left-button');
  let rightButton = document.createElement('button');
  rightButton.classList.add('right-button');

  newDiv.appendChild(leftButton);
  newDiv.appendChild(rightButton);

  let newPar = document.createElement('p');
  newPar.textContent =proj.description;
  newPar.classList.add('popup-description');

  let popBtnCntnr = document.createElement('div');
  popBtnCntnr.classList.add('pop-btn-contnr');
  let btn1 = document.createElement('button');
  btn1.classList.add('popup-button','live-button');
  btn1.textContent='See Live';
  let btn2 = document.createElement('button');
  btn2.classList.add('popup-button','src-button');
  btn2.textContent='See Source';
  popBtnCntnr.appendChild(btn1);
  popBtnCntnr.appendChild(btn2);
  
  popup.appendChild(closeIcon);
  popup.appendChild(header);
  popup.appendChild(techContainer);
  popup.appendChild(newDiv);
  popup.appendChild(newPar);
  popup.appendChild(popBtnCntnr);

  let container = document.querySelector('.projects-container');
  container.appendChild(popup);
  document.body.style.overflow='hidden';

  function dismissPopup(){
    popup.style.display='none';
    document.body.style.overflow='auto';
  }
}

 
