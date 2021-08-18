import { renderListTasksUsers, renderInputForEnterNameTask } from "./render-item";
import { createListTasksUsers } from "../../../api/api-handlers";
import { inputCategoryValidation } from "../../../shared/validation";

export const toDoHandler = () => {
  const btnSaveStringCategoryList = document.getElementById('btnSaveStringCategoryList');
  const divForInputEnterNewString = document.querySelector('.divForInputEnterNewString');
  const inputEnterNewString = divForInputEnterNewString.getElementsByTagName('input')[0];

  inputEnterNewString.innerHTML = '';

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

      inputEnterNewString.value = null;
    };
  });
};
