import { removeToken } from "../shared/ls-service";
import { routes } from "../shared/constants/routes";

export const logOut = () => {
    const btnLogOut = document.getElementById('btnLogOut');

    btnLogOut.onclick = () => {
        removeToken();
        window.location.href = routes.registration;
    };
};
