import { ERROR_MESAGES } from "./constants/mesages-errors";

export const showErrorMesagePasswordLength = () => {
    const stringPaswordLengthError = document.getElementById('passwordLengthError');
    stringPaswordLengthError.style.display = 'block';
    stringPaswordLengthError.innerText = ERROR_MESAGES.password_length;
};

export const hideErrorMesagePasswordLength = () => {
    const stringPaswordLengthError = document.getElementById('passwordLengthError');
    stringPaswordLengthError.style.display = 'none';
};

export const showEmailErrorMesage = () => {
    const stringEmailError = document.getElementById('emailError');
    stringEmailError.style.display = 'block';
    stringEmailError.innerText = ERROR_MESAGES.email;
};

export const hideEmailErrorMesage = () => {
    const stringEmailError = document.getElementById('emailError');
    stringEmailError.style.display = 'none';
};

export const showNotFoundUserError = error => {
    const stringNotFoundUserError = document.getElementById('notFoundUserError');
    stringNotFoundUserError.style.display = 'block';
    stringNotFoundUserError.innerText = error.response.data.error.message;
};
