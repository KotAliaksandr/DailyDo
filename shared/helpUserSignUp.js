import { ERROR_MESAGES } from "./constants/mesages-errors";

export const showMessagePasswordInValid = () => {
    const stringPaswordLengthError = document.getElementById('passwordSignUpInValid');
    stringPaswordLengthError.style.display = 'block';
    stringPaswordLengthError.innerText = ERROR_MESAGES.password_length;
};

export const hideMessagePasswordInValid = () => {
    const stringPaswordLengthError = document.getElementById('passwordSignUpInValid');
    stringPaswordLengthError.style.display = 'none';
};

export const showMessageEmaiInValid = () => {
    const stringEmailError = document.getElementById('emailSignUpInValid');
    stringEmailError.style.display = 'block';
    stringEmailError.innerText = ERROR_MESAGES.email;
};

export const hideMessageEmaiInValid = () => {
    const stringEmailError = document.getElementById('emailSignUpInValid');
    stringEmailError.style.display = 'none';
};

export const showMessageUserNameInValid = () => {
    const stringEmailError = document.getElementById('userNameInValid');
    stringEmailError.style.display = 'block';
    stringEmailError.innerText = ERROR_MESAGES.name;
};

export const hideMessageUserNameInValid = () => {
    const stringEmailError = document.getElementById('userNameInValid');
    stringEmailError.style.display = 'none';
};


export const showErrorSignUpSubmit = error => {
    const errorSignUpSubmit = document.getElementById('errorSignUpSubmit');
    errorSignUpSubmit.style.display = 'block';
    errorSignUpSubmit.innerText = error.message;
};
