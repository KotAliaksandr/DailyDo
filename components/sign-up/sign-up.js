import { signUp } from '../../api/api-handlers';
import { emailValidation, userNameValidation, passwordStrengthController } from '../../shared/validation';
import {
  showMessageUserNameInValid,
  showMessageEmaiInValid,
  hideMessageEmaiInValid,
  hideMessageUserNameInValid,
} from '../../shared/helpUserSignUp.js';

export const signUpHandlers = () => {
  const formSignUp = document.querySelector('.formSignUp');
  const userNameInput = document.getElementById('userName');
  const emailInput = document.getElementById('emailSignUp');
  const passwordInput = document.getElementById('passwordSignUp');
  const submitFormSignUp = document.getElementById('submitFormSignUp');

  const fieldsFormSignUp = {
    email: {
      isValid: false
    },
    password: {
      isValid: false
    },
    userName: {
      isValid: false
    }
  };

  submitFormSignUp.setAttribute('disabled', true);

  formSignUp.addEventListener('submit', event => {
    event.preventDefault();
    const password_strength_block = document.querySelector('.helpForEnterPassword');
    const user = {
      userName: userNameInput.value,
      email: emailInput.value,
      password: passwordInput.value
    };

    console.log(user.password);

    password_strength_block.style.display = 'none';

    signUp(user);
  });

  passwordInput.oninput = () => {
    fieldsFormSignUp.password.isValid = passwordStrengthController(passwordInput.value);
    checkValidityFormSignUp();
  };

  emailInput.oninput = () => {

    if (emailValidation(emailInput.value)) {
      fieldsFormSignUp.email.isValid = true;
      hideMessageEmaiInValid();
      emailInput.style.borderColor = 'white'
    } else {
      fieldsFormSignUp.email.isValid = false;
      emailInput.style.borderColor = 'brown';
    };

    checkValidityFormSignUp();
  };

  emailInput.onblur = () => {
    !emailValidation(emailInput.value) ? showMessageEmaiInValid() : hideMessageEmaiInValid();
  };

  userNameInput.oninput = () => {

    if (userNameValidation(userNameInput.value)) {
      fieldsFormSignUp.userName.isValid = true;
      hideMessageUserNameInValid();
      userNameInput.style.borderColor = 'white'
    } else {
      fieldsFormSignUp.userName.isValid = false;
      userNameInput.style.borderColor = 'brown';
    };

    checkValidityFormSignUp();
  };

  userNameInput.onblur = () => {
    !userNameValidation(userNameInput.value) ? showMessageUserNameInValid() : hideMessageUserNameInValid();
  };

  const checkValidityFormSignUp = () => {
    const validityFormSignUp = Object.values(fieldsFormSignUp).every(value => value.isValid);
    validityFormSignUp ?
      submitFormSignUp.removeAttribute('disabled') :
      submitFormSignUp.setAttribute('disabled', true);
    };
};
