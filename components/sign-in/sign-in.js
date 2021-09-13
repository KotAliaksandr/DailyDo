import { signIn } from '../../api/api-handlers';
import { emailValidation, passwordLengthValidation } from '../../shared/validation';
import {
  showEmailErrorMesage,
  hideEmailErrorMesage,
  showErrorMesagePasswordLength,
  hideErrorMesagePasswordLength
  } from '../../shared/helpUserSignIn';

export const signInHandlers = () => {
  const formSignIn = document.querySelector('.formSignIn');
  const btnForLogin = document.getElementById('btnForLogin');
  const passwordInput = document.getElementById('password');
  const emailInput = document.getElementById('email');

  const fieldsForm = {
    email: {
      isValid: false
    },
    password: {
      isValid: false
    }
  };

  btnForLogin.setAttribute('disabled', true);

  formSignIn.addEventListener('submit', event => {
    event.preventDefault();
    const email = emailInput.value;
    const password = passwordInput.value;

    signIn(email,password)
  });

  passwordInput.onblur = () => {
    !passwordLengthValidation(passwordInput.value) ? showErrorMesagePasswordLength() : hideErrorMesagePasswordLength();
  };

  passwordInput.oninput = () => {

    if (passwordLengthValidation(passwordInput.value)) {
      fieldsForm.password.isValid = true;
      hideErrorMesagePasswordLength();
    } else {
      fieldsForm.password.isValid = false;
    };

    checkValidityForm();
  };

  emailInput.oninput = () => {

    if (emailValidation(emailInput.value)) {
      fieldsForm.email.isValid = true;
      hideEmailErrorMesage();
      emailInput.style.borderColor = 'white'
    } else {
      fieldsForm.email.isValid = false;
      emailInput.style.borderColor = 'brown';
    };

    checkValidityForm();
  };

  emailInput.onblur = () => {
    !emailValidation(emailInput.value) ? showEmailErrorMesage() : hideEmailErrorMesage();
  };

  const checkValidityForm = () => {
    const validityForm = Object.values(fieldsForm).every(value => value.isValid);
    validityForm ? btnForLogin.removeAttribute('disabled') : btnForLogin.setAttribute('disabled', true);
  };
};
