require('firebase/auth');
import axios from 'axios';
import firebase from 'firebase/app';
import { FIREBASE_CONFIG, authUrl, databaseURL } from './api-config';
import { showNotFoundUserError } from '../shared/helpUserSignIn';
import { showErrorSignUpSubmit } from '../shared/helpUserSignUp';
import { localStorageService } from '../shared/ls-service';
import { routes } from '../shared/constants/routes';

export const initApi = () => {
  firebase.initializeApp(FIREBASE_CONFIG);
};

export const createListTasksUsers = (listTasks, nameCollection) => {
  const { tasks, nameCategory, category } = listTasks;

  return axios.post(`${databaseURL}/${nameCollection}.json`, {
    tasks,
    userId: localStorageService.getUID(),
    nameCategory,
    category,
  })
    .catch(error => error);
};

export const deleteListTasksUsers = (id, nameCollection) => axios.delete(`${databaseURL}/${nameCollection}/${id}.json`);

export const getListTasksUsers = nameCollection => {

  return axios.get(`${databaseURL}/${nameCollection}.json`)
    .then(response => {

      if (response) {
        const transformedListTasksUsers  = Object.keys(response.data).map( key => ({...response.data[key], id: key}));
        return transformedListTasksUsers;
      };
    })
};

export const getUser = () => {

  return axios.get(`${databaseURL}/users.json`)
    .then(response => {
      if (response) {
        const transformedUsers =
          Object.keys(response.data).map( key => ({...response.data[key], id: key}));
        const user = transformedUsers.find( user => user.uuid === localStorageService.getUID());
        localStorageService.setPersonalData(user);
      };
    });
};

export const signIn = (email, password) => {

  return axios.post(authUrl, {
    email,
    password,
    returnSecureToken: true
  })
  .then(response => {
    if (response) {
      const { idToken: token, localId } = response.data;
      localStorageService.setToken(token);
      localStorageService.setUID(localId);
      getUser().then( () => window.location.href = routes.mainPage);
    };
  })
  .catch(err => showNotFoundUserError(err));
};

export const createAuthDataUser = (email, password) => {

  return firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(response => {
      if (response) {
        const { uid } = response.user;
        localStorageService.setUID(uid);
      };
    });
};

export const createUser = user => {
  const { userName, email } = user;

  return axios.post(`${databaseURL}/users.json`, {
    userName,
    email,
    uuid: localStorageService.getUID(),
  });
};

export const signUp = async user => {
  const { email, password } = user;

  try {
    await createAuthDataUser(email, password);
    await createUser(user).then( response =>localStorageService.setUserID(response.data.name));
    await signIn(email, password);
  } catch (err) {
    showErrorSignUpSubmit(err);
  };
};

initApi();
