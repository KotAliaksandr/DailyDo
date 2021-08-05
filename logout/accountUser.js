import { localStorageService } from "../shared/ls-service";
import { routes } from "../shared/constants/routes";

export const logOut = () => {
    const btnLogOut = document.getElementById('btnLogOut');

    btnLogOut.onclick = () => {
        localStorageService.clearLocalStorage();
        window.location.href = routes.registration;
    };
};
