function createMobilePopup(proj) {
  console.log(proj.name);
  let popup = document.createElement('div');
  popup.classList.add('popup-container');
  let header = document.createElement('h3');
  header.classList.add('popup-header');
  header.textContent = proj.name;
  let newDiv = document.createElement('div');
  let newPar = document.createElement('p');
  newPar.textContent =proj.description;
  let btn1 = document.createElement('button');
  let btn2 = document.createElement('button');
  
  popup.appendChild(header);
  popup.appendChild(newDiv);
  popup.appendChild(newPar);
  popup.appendChild(btn1);
  popup.appendChild(btn2);

  popup.style.height= '100vh';
  popup.style.width = '100%';
  let container = document.querySelector('.main-container');
  document.body.insertBefore(popup ,container);
}
 
