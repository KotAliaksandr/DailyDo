import { REGEXP } from './constants/regexp';
import { PASSWORD_STRENGTHS } from './constants/mesages-errors';

const validationStatus = document.querySelector('.statusCurrentSignIn');
const validationLowercase = document.querySelector('.passwordStatusLowercaseSignIn');
const validationUppercase = document.querySelector('.passwordStatusUppercaseSignIn');
const validationNumbers = document.querySelector('.passwordStatusNumbersSignIn');
const passwordStatusCharacters = document.querySelector('.passwordStatusCharactersSignIn');

const lowerCaseCheck = password => {
  const result = REGEXP.LOWER_CASE.test(password);
  result ? validationLowercase.style.color = 'blue' : validationLowercase.style.color = 'grey';

  return REGEXP.LOWER_CASE.test(password);
};

const upperCaseCheck = password => {
  const result = REGEXP.UPPER_CASE.test(password);
  result ? validationUppercase.style.color = 'blue' : validationUppercase.style.color = 'grey';

  return result;
};

const numberCheck = password => {
  const result = REGEXP.NUMBERS.test(password);
  result ? validationNumbers.style.color = 'blue' : validationNumbers.style.color = 'grey';

  return result;
};

const eightCharactersCheck = password => {
  const result = REGEXP.EIGHT_CHARACTERS.test(password);
  result ? passwordStatusCharacters.style.color = 'blue' : passwordStatusCharacters.style.color = 'grey';

  return result;
};

export const passwordStrengthControllerSignIn = password => {
  const password_strength_block = document.querySelector('.helpForEnterPasswordSignIn');
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
      break;
    case 2:
      validationStatus.innerText = 'Moderate password';
      break;
    case 3:
      validationStatus.innerText = 'Strong password';
      break;
    case 4:
      validationStatus.innerText = 'Complete password';
      break;
    default:
      break;
  };

  return passwordStrengthNum === 4;
};
