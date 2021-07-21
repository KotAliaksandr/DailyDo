import { signUp } from "../../api/api-handlers";
import { setToken, setUserEmail } from "../../shared/ls-service";
import { userAccountLogin } from "../../DOM/accountUser";
import { outModalSignUp } from "../../shared/modalWindow";

export const signUpHandlers = () => {
    const formSignUp = document.querySelector('.formSignUp');

    formSignUp.addEventListener('submit', event => {
        event.preventDefault();

        const userName = document.getElementById('userName').value;
        const surname = document.getElementById('surname').value;
        const birth = document.getElementById('birth').value;
        const email = document.getElementById('emailSignUp').value;
        const password = document.getElementById('passwordSignUp').value;

        signUp(email, password)
            .then(response => {
                if (response) {
                    const { za: token } = response.user;
                    const { email } = response.user;

                    setToken(token);
                    setUserEmail(email);
                };
            })
            .then( () => userAccountLogin())
            .then( () => outModalSignUp());
    });
};
