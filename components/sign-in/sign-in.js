import { signIn } from "../../api/api-handlers";
import { setToken } from "../../shared/ls-service";

export const signInHandlers = () => {
    const formSignIn = document.querySelector('.formSignIn');

    formSignIn.addEventListener('submit', event => {
        event.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        signIn(email,password)
            .then(response => {
                if (response) {
                    const { idToken: token } = response.data;
                    setToken(token);
                }
            })
            .then( () => window.location.reload());
    });
};
