const pageForm = document.querySelector('.visitor-form');
const emailInput = document.getElementById('form-email');
const errorField = document.querySelector('.errmsg-container');

function isValidEmail() {
  const regex = /[A-Z]/g;
  return !regex.test(emailInput.value);
}

function showMessage(message, isvalid) {
  if (isvalid) {
    errorField.textContent = message;
    errorField.classList.remove('error-msg-color');
    emailInput.classList.remove('errmsg-highlight');
  } else {
    errorField.textContent = message;
    errorField.classList.add('error-msg-color');
    emailInput.classList.add('errmsg-highlight');
  }
}

pageForm.addEventListener('submit', (event) => {
  event.preventDefault();
  if (isValidEmail()) {
    showMessage('', true);
    pageForm.submit();
  } else {
    showMessage('Please enter email id without capital letters', false);
  }
});