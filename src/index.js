import { showModalSignIn } from '../shared/modalWindow';
import { signInHandlers } from '../components/sign-in/sign-in';
import { signUpHandlers } from '../components/sign-up/sign-up';
import { logOut } from '../DOM/accountUser';
import { initApi } from '../api/api-handlers';
import './styles/styles.scss';

showModalSignIn();

initApi();

signInHandlers();

signUpHandlers();

logOut();
