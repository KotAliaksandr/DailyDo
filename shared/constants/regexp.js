export const REGEXP = {
    PASSWORD_LENGTH: /^[A-Za-z\d@$#!%?&*^()-=+_]{8,}$/,
    UPPER_CASE: /(?=.*[A-Z])/,
    LOWER_CASE: /(?=.*[a-z])/,
    NUMBERS: /(?=.*\d)/,
    EIGHT_CHARACTERS: /^[a-zA-Z\d@$#!%?&*^()-=+_]{8,}$/,
    EMAIL: /^[A-Z0-9]{2,}@[A-Z0-9]{2,}\.[A-Z]{2,6}$/i,
    USERNAME:/^[A-Z0-9\S]{1,20}$|^[A-Z0-9\S][A-Z0-9\S\s]{1,19}$/,
    INPUT_CATEGORY: /^[A-Z0-9\S]{1,20}$|^[A-Z0-9\S][A-Z0-9\S\s]{1,19}$/i
};
