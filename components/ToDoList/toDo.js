import { arrforListId } from './ToDo-Item/todo-item';
import { renderCategoriesDefault } from './renderCategories';
import { renderListCategories, categoriesHandler } from './createCategory';
import { deletedivForListMy } from './deleteCategoriesUser';

export const workToDo = async () => {
  const contentForUser = document.querySelector('.contentForUser');
  const BtnForShowToDoList = document.getElementById('BtnForShowToDoList');
  const divToDoList = document.querySelector('.divToDoList');
  const btnLogOut = document.getElementById('btnLogOut');
  const btnBackAccount = document.getElementById('btnBackAccount');

  BtnForShowToDoList.onclick = () => {
    const containerForListСategories = document.querySelector('.containerForListСategories');

    containerForListСategories.innerHTML = null;

    contentForUser.classList.add('animate__animated', 'animate__backOutUp');
    btnLogOut.style.display = 'none';
    btnBackAccount.style.display = 'block';

    setTimeout( () => divToDoList.style.display = 'block', 300);
    renderCategoriesDefault();
    renderListCategories();
    setOwnCategories();
    deletedivForListMy();
  };

  btnBackAccount.onclick = () => {
    const divForInputEnterNewCategory = document.querySelector('.listСategoriesForInput');
    const divForCategoryList = document.querySelector('.containerForListTasks');
    const btnBackCategories = document.getElementById('btnBackCategories');
    const divForInputEnterNewString = document.querySelector('.divForInputEnterNewString');

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
