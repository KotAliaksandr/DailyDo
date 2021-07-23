import { showModalSignIn, showModalSignUp} from '../shared/modalWindow';
import { signInHandlers } from '../components/sign-in/sign-in';
import { signUpHandlers } from '../components/sign-up/sign-up';
import { logOut } from '../DOM/accountUser';
import { initApi } from '../api/api-handlers';
import { getToken } from '../shared/ls-service';
import { workCalendar } from '../components/calendar/calendar'
import './styles/styles.scss';

window.onload = () => {
    const modalSignInBtn = document.getElementById('modalSignInBtn');
    const modalSignUpBtn = document.getElementById('modalSignUpBtn');
    const btnLogOut = document.getElementById('btnLogOut');
    const tokenUsers = getToken();

    initApi();

    modalSignInBtn.onfocus = () => {
        showModalSignIn();
        signInHandlers();
    };

    modalSignUpBtn.onfocus = () => {
        showModalSignUp();
        signUpHandlers();
    };

    workCalendar();

    btnLogOut.onfocus = () => logOut();
};
