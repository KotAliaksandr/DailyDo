import { signIn } from "../../api/api-handlers";

export const signInHandlers = () => {
    const formSignIn = document.querySelector('.formSignIn');

    formSignIn.addEventListener('submit', event => {
        event.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        signIn(email,password)
            .then(result => console.log(result))
    });
};
