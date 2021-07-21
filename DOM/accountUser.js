import { getToken, removeToken, removeUserEmail } from "../shared/ls-service";

const functionForBtnLogOut = async () => {
    await removeToken();
    await removeUserEmail();
    await userAccountLogin();
};

export const userAccountLogin = () => {
    const divLogOut = document.querySelector('.fatherDaily__Header__btnLogOut');
    const descriptionDaily = document.getElementById('#descriptionDaily');
    const btnRegistration = document.querySelector('.fatherDaily__Header__btnRegistration');
    const token = getToken();

    if (token) {
        descriptionDaily.style.display = 'none';
        btnRegistration.style.display = 'none';
        divLogOut.style.display = 'block';
    } else {
        descriptionDaily.style.display = 'block';
        btnRegistration.style.display = 'block';
        divLogOut.style.display = 'none';
    }
};

export const logOut = () => {
    const btnLogOut = document.getElementById('btnLogOut');

    btnLogOut.onclick = () => {
        functionForBtnLogOut();
    };
};
