import { signUp } from "../../api/api-handlers";
import { setToken, setUserEmail } from "../../shared/ls-service";
import { userAccountLogin } from "../../DOM/accountUser";
import { outModalSignUp } from "../../shared/modalWindow";
import { passwordLengthValidation, emailValidation, userNameValidation } from "../../shared/validation";
import {
    showMessageUserNameInValid,
    showMessagePasswordInValid,
    showMessageEmaiInValid,
    hideMessageEmaiInValid,
    hideMessagePasswordInValid,
    hideMessageUserNameInValid,
    showErrorSignUpSubmit
} from "../../shared/helpUserSignUp.js";

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

        const name = userNameInput.value;
        const email = emailInput.value;
        const password = passwordInput.value;

        signUp(email, password)
            .then(response => {
                if (response) {
                    const { za: token } = response.user;
                    const { email } = response.user;

                    setToken(token);
                    setUserEmail(email);
                };
            })
            .catch(err => err)
            .then( err => err ? showErrorSignUpSubmit(err) : outModalSignUp())
            .then( () => userAccountLogin());
    });

    passwordInput.oninput = () => {
        if (passwordLengthValidation(passwordInput.value)) {
            fieldsFormSignUp.password.isValid = true;
            hideMessagePasswordInValid();
            passwordInput.style.borderColor = 'black'
        } else {
            fieldsFormSignUp.password.isValid = false;
            passwordInput.style.borderColor = 'brown';
        };

        checkValidityFormSignUp();
    };

    passwordInput.onblur = () => {
        !passwordLengthValidation(passwordInput.value) ?
        showMessagePasswordInValid() : hideMessagePasswordInValid();
    };

    emailInput.oninput = () => {
        if (emailValidation(emailInput.value)) {
            fieldsFormSignUp.email.isValid = true;
            hideMessageEmaiInValid();
            emailInput.style.borderColor = 'black'
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
            userNameInput.style.borderColor = 'black'
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
        validityFormSignUp ? submitFormSignUp.removeAttribute('disabled') : submitFormSignUp.setAttribute('disabled', true);
    };
};