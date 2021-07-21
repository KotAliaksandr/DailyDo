import { getToken, removeToken, removeUserEmail } from "../shared/ls-service";

export const userAccountLogin = () => {
    const divLogOut = document.querySelector('.fatherDaily__Header__btnLogOut');
    const descriptionDaily = document.getElementById('#descriptionDaily');
    const btnRegistration = document.querySelector('.fatherDaily__Header__btnRegistration');
    const token = getToken();

    if (token) {
        descriptionDaily.style.display = 'none';
        btnRegistration.style.display = 'none';
        divLogOut.style.display = 'block';
    };
};

export const logOut = () => {
    const btnLogOut = document.getElementById('btnLogOut');

    btnLogOut.onclick = () => {
        removeToken();
        removeUserEmail();
        window.location.reload();
    };
};
