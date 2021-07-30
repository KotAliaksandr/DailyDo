import { routes, paths } from '../shared/constants/routes';
import { showModalSignIn, showModalSignUp} from '../shared/modalWindow';
import { logOut } from '../logout/accountUser';
import { getToken } from '../shared/ls-service';
import { workCalendar } from '../components/calendar/calendar';
import { workToDo } from '../components/ToDoList/toDo';
import './styles/styles.scss';

window.onload = () => {

    const pathname = Object.values(paths).find( path => path === window.location.pathname );;

    switch(pathname) {
        case (paths.mainPage):
            const token = getToken();
            if (!token) {
                window.location.href = routes.registration;
            } else {
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
