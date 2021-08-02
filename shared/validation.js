import { REGEXP } from "./constants/regexp";

export const passwordLengthValidation = password => password.match(REGEXP.PASSWORD_LENGTH);
export const emailValidation = email => email.match(REGEXP.EMAIL);
export const userNameValidation = userName => userName.match(REGEXP.USERNAME);
export const inputCategoryValidation = inputCategoryValue => inputCategoryValue.match(REGEXP.INPUT_CATEGORY);
