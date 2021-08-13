import { inputCategoryValidation } from '../../../shared/validation';
import { createListTasksUsers, getListTasksUsers, deleteListTasksUsers } from '../../../api/api-handlers';
import { localStorageService } from '../../../shared/ls-service';

const arrforListId = [];

export const workToDoCategoryListDefault = () => {
  const fatherDaily = document.querySelector('.fatherDaily');
  const divToDoList = document.querySelector('.divToDoList');
  const containerForStringListСategory = document.querySelector('.containerForStringListСategory');
  const divForCategoryList = document.querySelector('.shopping');
  const btnAddStringCategoryList = document.getElementById('btnAddStringCategoryList');
  const btnCloseDivForCategoryList = document.getElementById('btnCloseDivForCategoryList');
  const btnDeleteStringCategoryList = document.getElementById('btnDeleteStringCategoryList');

  const addNewStringListShopping = () => {

    btnAddStringCategoryList.onclick = () => {
      const divForInputEnterNewString = document.querySelector('.divForInputEnterNewString');

      if (!divForInputEnterNewString) {
        const divForInputEnterNewString = document.createElement('div');
        const inputEnterNewString = document.createElement('input');

        inputEnterNewString.innerHTML = '';
        divForInputEnterNewString.classList.add('divForInputEnterNewString');
        inputEnterNewString.classList.add('form-control');
        divForInputEnterNewString.prepend(inputEnterNewString);
        containerForStringListСategory.prepend(divForInputEnterNewString);

        toDoHandler();
      };
    };
  };

  addNewStringListShopping();

  const hideListShopping = () => {
    btnCloseDivForCategoryList.onclick = () => {
      const divForInputEnterNewString = document.querySelector('.divForInputEnterNewString');
      const contentForUser = document.querySelector('.contentForUser');

      divForCategoryList.style.display = 'none';
      divToDoList.style.display = 'block';
      fatherDaily.style.display = 'block';
      contentForUser.style.display = 'none';

      if (divForInputEnterNewString) {
        divForInputEnterNewString.remove();
      };
    };
  };

  hideListShopping();

  const deleteTaskShopping = () => {

    btnDeleteStringCategoryList.onclick = () => {
      const divForInputEnterNewString = document.querySelector('.divForInputEnterNewString');

      if (arrforListId.length > 0) {

        const deleteTasks = () => {
          arrforListId.forEach(item => {
            deleteListTasksUsers(item,'todolist')
              .then( () => arrforListId.shift())
          });
        };

        deleteTasks();
        setTimeout( () => renderListTasksUsers().catch(error => error), 600);
      };

      divForInputEnterNewString ? divForInputEnterNewString.remove() : null;
    };
  };

  deleteTaskShopping();
};

export const renderListTasksUsers = async () => {
  const containerForStringListСategory = document.querySelector('.containerForStringListСategory');
  const nameListTasks = document.getElementById('nameListTasks');
  let listsTasks;

  containerForStringListСategory.innerHTML = null;

  await getListTasksUsers('todolist').then(response => listsTasks = response);

  listsTasks.forEach(list => {
    if (list.userId === localStorageService.getUID() && list.nameCategory === nameListTasks.innerText) {
      const divListTasks = document.createElement('div');

      divListTasks.classList.add('listTasks');
      divListTasks.innerHTML = list.tasks;
      containerForStringListСategory.append(divListTasks);

      divListTasks.onclick = () => {
        const isCklicked = divListTasks.getAttribute('clicked');
        if (!isCklicked) {
          divListTasks.setAttribute('clicked', true);
          divListTasks.classList.add('crossedOut');
          arrforListId.push(list.id);
        } else {
          divListTasks.removeAttribute('clicked');
          divListTasks.classList.remove('crossedOut');
          arrforListId.splice(arrforListId.indexOf(list.id), 1);
        };
      };
    };
  });
};

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
        .then( () => renderListTasksUsers());

      inputEnterNewString.value = null;
    };
  });
};
