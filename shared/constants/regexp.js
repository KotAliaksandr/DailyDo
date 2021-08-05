export const REGEXP = {
    PASSWORD_LENGTH: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
    EMAIL: /^[A-Z0-9]{2,}@[A-Z0-9]{2,}\.[A-Z]{2,6}$/i,
    USERNAME:/^[A-Z0-9\S]{1,20}$|^[A-Z0-9\S]{,1}[A-Z0-9\S\s]{1,19}$/,
    INPUT_CATEGORY: /^[A-Z0-9\S]{1,20}$|^[A-Z0-9\S]{,1}[A-Z0-9\S\s]{1,19}$/i
};
