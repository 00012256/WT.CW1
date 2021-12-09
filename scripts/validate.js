// form validation
const userName = document.getElementById('inputName');
const userNumber = document.getElementById('inputTelNumber');
const form = document.getElementById('form');

form.addEventListener('submit', e => {
    e.preventDefault();
  
    validateInputs();
  })
  
  const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
  }
  
  const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
  }
  
  const validateInputs = () => {
    const userNameValue = userName.value.trim();
    const userNumberValue = userNumber.value.trim();
  
    if (userNameValue === '') {
      setError(userName, 'Name is required');
    } else {
        setSuccess(userName);
    }
  
    if (userNumberValue === '') {
      setError(userNumber, 'Phone number is required');
    } else {
        setSuccess(userNumber);
    }
}
