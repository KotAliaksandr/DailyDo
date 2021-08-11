import { localStorageService } from "../../shared/ls-service";

export const setUserName = () => {
  const userNameForAccount = document.getElementById('userNameForAccount');
  const userFullName = localStorageService.getPersonalData().userName;

  userNameForAccount.innerText = userFullName;
};
