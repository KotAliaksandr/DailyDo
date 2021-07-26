import { modalSignInBtn, modalSignUpBtn } from "./constants/domConst";

export const showModalSignIn = () => {
    const modalWindowSignIn = document.getElementById('modalWindowSignIn');
    const closeWindowSignIn = document.getElementById('closeWindowSignIn');

    modalSignInBtn.onclick = () => {
        modalWindowSignIn.style.display = 'block';
    };

    closeWindowSignIn.onclick = () => {
        modalWindowSignIn.style.display = 'none';
    };
};

export const showModalSignUp = () => {
    const modalWindowSignUp = document.getElementById('modalWindowSignUp');
    const closeWindowSignUp = document.getElementById('closeWindowSignUp');

    modalSignUpBtn.onclick = () => {
        modalWindowSignUp.style.display = 'block';
    };

    closeWindowSignUp.onclick = () => {
        modalWindowSignUp.style.display = 'none';
    };

};

export const outModalSignIn = () => {
    const modalWindowSignIn = document.getElementById('modalWindowSignIn');
    modalWindowSignIn.style.display = 'none';
};

export const outModalSignUp = () => {
    const modalWindowSignUp = document.getElementById('modalWindowSignUp');
    modalWindowSignUp.style.display = 'none';
};
