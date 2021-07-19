require('firebase/auth');
import axios from 'axios';
import firebase from 'firebase/app';
import { FIREBASE_CONFIG, authUrl } from './api-config';

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
        .catch(err => console.log(err))
};