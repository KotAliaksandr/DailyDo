import { REGEXP } from './constants/regexp';
import { PASSWORD_STRENGTHS } from './constants/mesages-errors';

export const passwordLengthValidation = password => password.match(REGEXP.PASSWORD_LENGTH);
export const emailValidation = email => email.match(REGEXP.EMAIL);
export const userNameValidation = userName => userName.match(REGEXP.USERNAME);
export const inputCategoryValidation = inputCategoryValue => inputCategoryValue.match(REGEXP.INPUT_CATEGORY);

const validationStatus = document.querySelector('.statusCurrent');
const validationLowercase = document.querySelector('.passwordStatusLowercase');
const validationUppercase = document.querySelector('.passwordStatusUppercase');
const validationNumbers = document.querySelector('.passwordStatusNumbers');
const passwordStatusCharacters = document.querySelector('.passwordStatusCharacters');

const lowerCaseCheck = password => {
  const result = REGEXP.LOWER_CASE.test(password);
  result ? validationLowercase.style.color = '#4D5352' : validationLowercase.style.color = '#9fa9c3';

  return REGEXP.LOWER_CASE.test(password);
};

const upperCaseCheck = password => {
  const result = REGEXP.UPPER_CASE.test(password);
  result ? validationUppercase.style.color = '#4D5352' : validationUppercase.style.color = '#9fa9c3';

  return result;
};

const numberCheck = password => {
  const result = REGEXP.NUMBERS.test(password);
  result ? validationNumbers.style.color = '#4D5352' : validationNumbers.style.color = '#9fa9c3';

  return result;
};

const eightCharactersCheck = password => {
  const result = REGEXP.EIGHT_CHARACTERS.test(password);
  result ? passwordStatusCharacters.style.color = '#4D5352' : passwordStatusCharacters.style.color = '#9fa9c3';

  return result;
};

export const passwordStrengthController = password => {
  const password_strength_block = document.querySelector('.helpForEnterPassword');
  let passwordStrength;

  password_strength_block.style.display = 'block';

  const passwordStrengthNum =
    lowerCaseCheck(password) +
    upperCaseCheck(password) +
    numberCheck(password) +
    eightCharactersCheck(password);

  Object.keys(PASSWORD_STRENGTHS).forEach( item => {

    if (PASSWORD_STRENGTHS[item] === passwordStrengthNum) {
      passwordStrength = item;
    };
  });

  switch (passwordStrengthNum) {
    case 1:
      validationStatus.innerText = 'Weak password';
      validationStatus.style.color = '#9fa9c3';
      break;
    case 2:
      validationStatus.innerText = 'Moderate password';
      validationStatus.style.color = '#9fa9c3';
      break;
    case 3:
      validationStatus.innerText = 'Strong password';
      validationStatus.style.color = '#9fa9c3';
      break;
    case 4:
      validationStatus.innerText = 'Complete password';
      validationStatus.style.color = '#4D5352';
      break;
    default:
      break;
  };

  return passwordStrengthNum === 4;
};
