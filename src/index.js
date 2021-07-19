import { showModalSignIn } from '../shared/modalSignIn';
import { signInHandlers } from '../components/sign-in/sign-in';
import { initApi } from '../api/api-handlers';
import './styles/styles.scss';

showModalSignIn();

initApi();

signInHandlers();
