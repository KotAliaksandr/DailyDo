import { inputCategoryValidation } from '../../shared/validation';
import { localStorageService } from '../../shared/ls-service';
import { workToDoCategoryListDefault } from './ToDo-Item/todo-item';
import { renderListTasksUsers, renderBtnDeleteTasks } from './ToDo-Item/render-item';
import { createListTasksUsers, getListTasksUsers } from '../../api/api-handlers';
import { arrForBtnDeleteCategories } from './deleteCategoriesUser';

export const renderListCategories = async () => {
  const containerForListСategoriesUser = document.querySelector('.containerForListСategoriesUser');
  const btnBackAccount = document.getElementById('btnBackAccount');
  const arrForTasksInCategory = [];

  let listsCategories;
  let listTasks;

  containerForListСategoriesUser.innerHTML = null;

  await getListTasksUsers('categoriesUser').then(response => listsCategories = response);
  await getListTasksUsers('todolist').then(response => listTasks = response);

  listsCategories.forEach(list => {

    if (list.userId === localStorageService.getUID()) {
      const divForListCategoryUser = document.createElement('div');
      const buttonCrossed = document.createElement('button');
      const textCategory = document.createElement('label');
      const textButtonCrossed = document.createElement('p');
      const numbersTasks = document.createElement('div');

      listTasks.forEach(listTasksItem => {

        if (listTasksItem.userId === localStorageService.getUID() && listTasksItem.nameCategory === list.category ) {
          arrForTasksInCategory.push(listTasksItem);
          numbersTasks.innerHTML = arrForTasksInCategory.length;
        }
      })

      arrForTasksInCategory.length = 0;

      buttonCrossed.id = list.category;
      textButtonCrossed.innerHTML = '';
      textCategory.htmlFor = list.category;
      textCategory.innerText = list.category;

      numbersTasks.classList.add('numbersTasks');
      divForListCategoryUser.classList.add('divForListMy');
      containerForListСategoriesUser.append(divForListCategoryUser);
      buttonCrossed.append(textButtonCrossed);
      divForListCategoryUser.append(buttonCrossed);
      divForListCategoryUser.prepend(textCategory, numbersTasks);

      buttonCrossed.onclick = () => {
        const isCklicked = buttonCrossed.getAttribute('clicked');

        if (!isCklicked) {
          buttonCrossed.setAttribute('clicked', true);
          textCategory.classList.add('crossedOut');
          arrForBtnDeleteCategories.push(list);
          textButtonCrossed.innerHTML = '&#10003;';
        } else {
          buttonCrossed.removeAttribute('clicked');
          textCategory.classList.remove('crossedOut');
          arrForBtnDeleteCategories.splice(arrForBtnDeleteCategories.indexOf(list), 1);
          textButtonCrossed.innerHTML = '';
        }
      };

      textCategory.addEventListener('click', event => {
        event.preventDefault();
        const divForCategoryList = document.querySelector('.containerForListTasks');
        const divForInputEnterNewCategory = document.querySelector('.listСategoriesForInput');
        const divToDoList = document.querySelector('.divToDoList');
        const nameListTasks = document.getElementById('nameListTasks');
        const btnBackCategories = document.getElementById('btnBackCategories');

        divToDoList.style.display = 'none';
        divForCategoryList.style.display = 'block';
        btnBackAccount.style.display = 'block';
        btnBackCategories.style.display = 'block';
        nameListTasks.innerText = textCategory.innerText;

        if (divForInputEnterNewCategory) {
          divForInputEnterNewCategory.remove();
        };

        renderListTasksUsers()
          .catch(error => error);

        workToDoCategoryListDefault();
        renderBtnDeleteTasks();
      });
    };
  });
};

export const categoriesHandler = () => {
  const btnSaveСategories = document.getElementById('btnSaveСategories');
  const divForInputEnterNewCategory = document.querySelector('.listСategoriesForInput');
  const inputEnterNewCategory = divForInputEnterNewCategory.getElementsByTagName('input')[0];
  inputEnterNewCategory.innerHTML = '';

  const listCategories = {
    category: null,
    userId: null,
  };

  btnSaveСategories.addEventListener('click', event => {
    event.preventDefault();

    if (inputCategoryValidation(inputEnterNewCategory.value)) {
      listCategories.category = inputEnterNewCategory.value;

      createListTasksUsers(listCategories, 'categoriesUser')
        .then( () => renderListCategories());

        inputEnterNewCategory.value = null;
        divForInputEnterNewCategory.remove();
    };
  });
};
