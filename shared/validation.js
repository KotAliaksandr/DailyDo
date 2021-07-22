import { REGEXP } from "./constants/regexp";

export const passwordLengthValidation = password => password.match(REGEXP.PASSWORD_LENGTH);
export const emailValidation = email => email.match(REGEXP.EMAIL);
