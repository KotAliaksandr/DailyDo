import { signIn } from '../../api/api-handlers';
import { passwordStrengthControllerSignIn } from '../../shared/validation-passwordSignIn';
import { emailValidation } from '../../shared/validation';
import { showEmailErrorMesage, hideEmailErrorMesage } from '../../shared/helpUserSignIn';

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
    const password_strength_block = document.querySelector('.helpForEnterPasswordSignIn');
    const email = emailInput.value;
    const password = passwordInput.value;

    password_strength_block.style.display = 'none';

    signIn(email,password)
  });

  passwordInput.oninput = () => {
    fieldsForm.password.isValid = passwordStrengthControllerSignIn(passwordInput.value);
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
