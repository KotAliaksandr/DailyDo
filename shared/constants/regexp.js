export const REGEXP = {
    PASSWORD_LENGTH: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
    EMAIL: /^([\w.\-+!]{1}[a-z0-9]|[a-z0-9]{1}[\w.\-+!])[\w.\-+!]*@[\w.+]{2,}\.[a-zA-Z]{2,6}$/i,
    USERNAME:/[A-Za-z0-9]{3,}/
};
