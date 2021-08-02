export const REGEXP = {
    PASSWORD_LENGTH: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
    EMAIL: /[A-za-z0-9]{2,}@[a-z0-9]{2,}\.[a-zA-Z]{2,6}/i,
    USERNAME:/[A-Za-z0-9]{3,}/,
    INPUT_CATEGORY: /^[A-Za-z0-9\S]{1,}$/i
};
