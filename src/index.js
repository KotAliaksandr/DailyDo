import { routes, paths } from '../shared/constants/routes';
import { showModalSignIn, showModalSignUp} from '../shared/modalWindow';
import { logOut } from '../logout/accountUser';
import { localStorageService } from '../shared/ls-service';
import { workCalendar } from '../components/calendar/calendar';
import { workToDo } from '../components/ToDoList/toDo';
import { setUserName } from '../components/profile/profile';
import './styles/styles.scss';

window.onload = () => {

    const pathname = Object.values(paths).find( path => path === window.location.pathname );;

    switch(pathname) {
        case (paths.mainPage):
            const token = localStorageService.getToken();
            if (!token) {
                window.location.href = routes.registration;
            } else {
                setUserName();
                workToDo();
                workCalendar();
                logOut();
            };
            break;
        case (paths.registration):
            showModalSignIn();
            showModalSignUp();
            break;
        default:
            break;
    };
};
