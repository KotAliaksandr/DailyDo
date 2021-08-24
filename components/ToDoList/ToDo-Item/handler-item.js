import { renderListTasksUsers, renderBtnDeleteTasks } from './render-item';
import { createListTasksUsers } from '../../../api/api-handlers';
import { inputCategoryValidation } from '../../../shared/validation';
import { arrforListId } from './todo-item';
import { showMessageEnterStringForTasks, hideMessageEnterStringForTasks } from '../../../shared/helpUserEnterStringCategory';

export const toDoHandler = () => {
  const btnSaveStringCategoryList = document.getElementById('btnSaveStringCategoryList');
  const divForInputEnterNewString = document.querySelector('.divForInputEnterNewString');
  const inputEnterNewString = divForInputEnterNewString.getElementsByTagName('input')[0];

  inputEnterNewString.innerHTML = '';

  inputEnterNewString.oninput = () => {
    inputCategoryValidation(inputEnterNewString.value) ? hideMessageEnterStringForTasks() : showMessageEnterStringForTasks();
  };

  const listTasks = {
    tasks: null,
    userId: null,
    nameCategory: null
  };

  btnSaveStringCategoryList.addEventListener('click', event => {
    event.preventDefault();
    const nameListTasks = document.getElementById('nameListTasks');

    if (inputCategoryValidation(inputEnterNewString.value)) {
      listTasks.tasks = inputEnterNewString.value;
      listTasks.nameCategory = nameListTasks.innerText;

      createListTasksUsers(listTasks, 'todolist')
        .then( () => renderListTasksUsers())
        .then( () => arrforListId.length = 0)
        .then( () => renderBtnDeleteTasks());

      inputEnterNewString.value = null;
    };
  });
};
