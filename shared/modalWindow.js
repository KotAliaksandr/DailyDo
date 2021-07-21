export const showModalSignIn = () => {

    const modalSignInBtn = document.getElementById('modalSignInBtn');
    const modalWindowSignIn = document.getElementById('modalWindowSignIn');
    const closeWindowSignIn = document.getElementById('closeWindowSignIn');

    modalSignInBtn.onclick = () => {
        modalWindowSignIn.style.display = 'block';
    };

    closeWindowSignIn.onclick = () => {
        modalWindowSignIn.style.display = 'none';
    };
};

export const outModalSignIn = () => {
    const modalWindowSignIn = document.getElementById('modalWindowSignIn');
    modalWindowSignIn.style.display = 'none';
};

export const outModalSignUp = () => {
    const modalWindowSignUp = document.getElementById('staticBackdrop');
    const divBackDrop = document.querySelector('.modal-backdrop');
    modalWindowSignUp.style.display = 'none';
    divBackDrop.classList.remove('modal-backdrop');
};
