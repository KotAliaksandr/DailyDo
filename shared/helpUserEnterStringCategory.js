import { ERROR_MESAGES } from './constants/mesages-errors';

export const showMessageEnterString = () => {
    const stringEmailError = document.getElementById('nameCategoryInValid');
    stringEmailError.style.display = 'flex';
    stringEmailError.innerText = ERROR_MESAGES.name;
  };

  export const hideMessageEnterString = () => {
    const stringEmailError = document.getElementById('nameCategoryInValid');
    stringEmailError.style.display = 'none';
  };

  export const showMessageEnterStringForTasks = () => {
    const stringEmailError = document.getElementById('nameTaskInValid');
    stringEmailError.style.display = 'flex';
    stringEmailError.innerText = ERROR_MESAGES.name;
  };

  export const hideMessageEnterStringForTasks = () => {
    const stringEmailError = document.getElementById('nameTaskInValid');
    stringEmailError.style.display = 'none';
  };
