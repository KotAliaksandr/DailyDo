import { getListTasksUsers } from '../../../api/api-handlers';
import { localStorageService } from '../../../shared/ls-service';
import { arrforListId, workToDoCategoryListDefault } from './todo-item';
import { hideMessageEnterStringForTasks } from '../../../shared/helpUserEnterStringCategory';

export const renderListTasksUsers = async () => {
  const containerForStringListСategory = document.querySelector('.containerForStringListСategory');
  const nameListTasks = document.getElementById('nameListTasks');
  let listsTasks;

  containerForStringListСategory.innerHTML = null;

  await getListTasksUsers('todolist').then(response => listsTasks = response);

  listsTasks.forEach(listItem => {
    if (listItem.userId === localStorageService.getUID() && listItem.nameCategory === nameListTasks.innerText) {
      const divListTasks = document.createElement('div');
      const buttonCheck = document.createElement('button');
      const nameTaskText = document.createElement('label');
      const textButtonCheck = document.createElement('p');

      buttonCheck.id = listItem.tasks;
      textButtonCheck.innerHTML = '';
      nameTaskText.htmlFor = listItem.tasks;
      nameTaskText.innerText = listItem.tasks;
      divListTasks.classList.add('listTasks');
      containerForStringListСategory.append(divListTasks);
      buttonCheck.append(textButtonCheck);
      divListTasks.append(buttonCheck);
      divListTasks.prepend(nameTaskText);

      buttonCheck.onclick = () => {
        const isCklickedTask = buttonCheck.getAttribute('clicked');

        if (!isCklickedTask) {
          buttonCheck.setAttribute('clicked', true);
          textButtonCheck.innerHTML = '&#10003;';
          arrforListId.push(listItem.id);
          renderBtnDeleteTasks();
        } else {
          buttonCheck.removeAttribute('clicked');
          textButtonCheck.innerHTML = '';
          arrforListId.splice(arrforListId.indexOf(listItem.id), 1);
          renderBtnDeleteTasks();
        };

        hideMessageEnterStringForTasks();
      };
    };
  });
};

export const renderBtnDeleteTasks = () => {
  const btnDeleteStringCategoryList = document.getElementById('btnDeleteStringCategoryList');

  (arrforListId.length <= 0) ?
  btnDeleteStringCategoryList.style.display = 'none' : btnDeleteStringCategoryList.style.display = 'flex';
};

export const renderInputForEnterNameTask = () => {
  const containerForStringListСategory = document.querySelector('.containerForListTasks');
  const divForInputEnterNewString = document.createElement('div');
  const inputEnterNewString = document.createElement('input');

  inputEnterNewString.innerHTML = '';
  divForInputEnterNewString.classList.add('divForInputEnterNewString');
  inputEnterNewString.classList.add('form-control');
  divForInputEnterNewString.prepend(inputEnterNewString);
  containerForStringListСategory.prepend(divForInputEnterNewString);
};

export const forReloadPageListTasks = () => {
  const IdListTasksBoard = localStorageService.getIdListTasksBoard();
  const btnBackAccount = document.getElementById('btnBackAccount');
  const contentForUser = document.querySelector('.contentForUser');
  const btnBackCategories = document.getElementById('btnBackCategories');
  const divForCategoryList = document.querySelector('.containerForListTasks');
  const nameListTasks = document.getElementById('nameListTasks');

  nameListTasks.innerText = IdListTasksBoard;

  if (IdListTasksBoard) {
    btnBackAccount.style.display = 'block';
    btnBackCategories.style.display = 'block';
    divForCategoryList.style.display = 'block';
    contentForUser.style.display = 'none';

    renderListTasksUsers()
      .catch(error => error);

    workToDoCategoryListDefault();
    renderBtnDeleteTasks();
  };
};
