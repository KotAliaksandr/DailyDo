require('firebase/auth');
import axios from 'axios';
import firebase from 'firebase/app';
import { FIREBASE_CONFIG, authUrl } from './api-config';
import { showNotFoundUserError } from '../shared/helpUserSignIn';
import { showErrorSignUpSubmit } from '../shared/helpUserSignUp';

export const initApi = () => {
    firebase.initializeApp(FIREBASE_CONFIG);
};

export const signIn = (email, password) => {
    return axios.post(authUrl, {
        email,
        password,
        returnSecureToken: true
    })
        .then(response => response)
        .catch(err => showNotFoundUserError(err));
};

export const signUp = async (email, password) => {
    return firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(response => response)
        .catch(err => showErrorSignUpSubmit(err));
};

initApi();
