export class localStorageService {
  static getToken() {
    return localStorage.getItem('token');
  };

  static setToken(token) {
    localStorage.setItem('token', token);
  };

  static setPersonalData(user) {
    localStorage.setItem('personalData', JSON.stringify(user));
  };

  static getPersonalData() {
    return JSON.parse(localStorage.getItem('personalData'));
  };

  static getUID() {
    return localStorage.getItem('uid')
  };

  static setUID(uid) {
    localStorage.setItem('uid', uid);
  };

  static getUserID() {
    return localStorage.getItem('UserID')
  };

  static setUserID(id) {
    localStorage.setItem('UserID', id);
  };

  static clearLocalStorage() {
    localStorage.clear();
  };
};
