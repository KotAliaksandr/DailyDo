import { workToDoCategoryListDefault } from './ToDo-Item/todo-item';
import { renderListTasksUsers, renderBtnDeleteTasks } from './ToDo-Item/render-item';
import { arrforListId } from './ToDo-Item/todo-item';
import {
  renderListCategories,
  categoriesHandler,
  deletedivForListMy
} from './createCategory';


const arrForCategoriesList = ['Shopping', 'Holidays', 'Family', 'Business'];

export const workToDo = () => {
  const containerForListСategories = document.querySelector('.containerForListСategories');
  const contentForUser = document.querySelector('.contentForUser');
  const BtnForShowToDoList = document.getElementById('BtnForShowToDoList');
  const divToDoList = document.querySelector('.divToDoList');
  const btnLogOut = document.getElementById('btnLogOut');
  const btnBackAccount = document.getElementById('btnBackAccount');
  const btnBackCategories = document.getElementById('btnBackCategories');

  BtnForShowToDoList.onclick = () => {
    const divForCategoryList = document.querySelector('.containerForListTasks');

    contentForUser.classList.add('animate__animated', 'animate__backOutUp');
    btnLogOut.style.display = 'none';
    btnBackAccount.style.display = 'block';

    setTimeout( () => divToDoList.style.display = 'block', 300);


    arrForCategoriesList.forEach(category => {
      const divCategory = document.createElement('div');

      divCategory.classList.add('listСategories');
      divCategory.innerHTML = category;
      containerForListСategories.append(divCategory);

      divCategory.onclick = () => {
        const divForInputEnterNewCategory = document.querySelector('.listСategoriesForInput');
        const nameListTasks = document.getElementById('nameListTasks');

        nameListTasks.innerText = category;

        if (divForInputEnterNewCategory) {
          divForInputEnterNewCategory.remove();
        };

        renderListTasksUsers()
          .catch(error => error);

        divToDoList.style.display = 'none';
        divForCategoryList.style.display = 'block';
        btnBackCategories.style.display = 'block';

        workToDoCategoryListDefault();
        renderBtnDeleteTasks();
      };
    });
    renderListCategories();
    setOwnCategories();
    deletedivForListMy();
  };

  btnBackAccount.onclick = () => {
    const divForInputEnterNewCategory = document.querySelector('.listСategoriesForInput');
    const divForCategoryList = document.querySelector('.containerForListTasks');
    const btnBackCategories = document.getElementById('btnBackCategories');
    const divForInputEnterNewString = document.querySelector('.divForInputEnterNewString');

    arrForCategoriesList.length = 0;
    arrforListId.length = 0;

    if (divForInputEnterNewCategory) {
      divForInputEnterNewCategory.remove();
    };

    if (divForInputEnterNewString) {
      divForInputEnterNewString.remove();
    };

    contentForUser.classList.remove('animate__animated', 'animate__backOutUp');
    contentForUser.style.display = 'block';
    btnLogOut.style.display = 'block';
    btnBackAccount.style.display = 'none';
    divToDoList.style.display = 'none';
    divForCategoryList.style.display = 'none';
    btnBackCategories.style.display = 'none';
  };
};

const setOwnCategories = () => {
  const btnSetOwnСategories = document.getElementById('btnSetOwnСategories');

  btnSetOwnСategories.onclick = () => {
    const divForInputEnterNewCategory = document.querySelector('.listСategoriesForInput');
    const divToDoList = document.querySelector('.divToDoList');

    if (!divForInputEnterNewCategory) {
      const divForInputEnterNewCategory = document.createElement('div');
      const inputEnterNewCategory = document.createElement('input');

      inputEnterNewCategory.innerHTML = '';
      divForInputEnterNewCategory.classList.add('listСategoriesForInput');
      inputEnterNewCategory.classList.add('form-control');
      divForInputEnterNewCategory.prepend(inputEnterNewCategory);
      divToDoList.prepend(divForInputEnterNewCategory);

      categoriesHandler();
    };
  };
};
