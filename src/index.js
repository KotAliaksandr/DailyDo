import './styles/styles.scss';

const modalSignInBtn = document.getElementById('modalSignInBtn');
const modalWindowSignIn = document.getElementById('modalWindowSignIn');
const closeWindowSignIn = document.getElementById('closeWindowSignIn');

modalSignInBtn.onclick = () => {
    modalWindowSignIn.style.display = 'block';
};

closeWindowSignIn.onclick = () => {
    modalWindowSignIn.style.display = 'none';
};
