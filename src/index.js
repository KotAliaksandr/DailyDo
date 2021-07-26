import { modalSignInBtn, modalSignUpBtn } from '../shared/constants/domConst';
import { routes, paths } from '../shared/constants/routes';
import { showModalSignIn, showModalSignUp} from '../shared/modalWindow';
import { signInHandlers } from '../components/sign-in/sign-in';
import { signUpHandlers } from '../components/sign-up/sign-up';
import { logOut } from '../DOM/accountUser';
import { getToken } from '../shared/ls-service';
import { workCalendar } from '../components/calendar/calendar';
import './styles/styles.scss';

window.onload = () => {

    const pathname = Object.values(paths).find( path => path === window.location.pathname );;

    switch(pathname) {
        case (paths.mainPage):
            const token = getToken();
            if (!token) {
                window.location.href = routes.registration;
            } else {
                workCalendar();
                logOut();
            };
            break;
        case (paths.registration):
            modalSignInBtn.onfocus = () => {
                showModalSignIn();
                signInHandlers();
            };
            modalSignUpBtn.onfocus = () => {
                showModalSignUp();
                signUpHandlers();
            };
            break;
        default:
            break;
    };

    console.log(window.location);
};
