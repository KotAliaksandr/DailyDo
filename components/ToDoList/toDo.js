import { inputCategoryValidation } from "../../shared/validation";
import {
  renderListTasksUsers,
  workToDoCategoryListShopping,
} from "./ToDo-Item/todo-item";

const arrForCategoriesList = ['Shopping', 'Holidays', 'Family', 'Business'];

export const workToDo = () => {
  const containerForListСategories = document.querySelector('.containerForListСategories');
  const contentForUser = document.querySelector('.contentForUser');
  const BtnForShowToDoList = document.getElementById('BtnForShowToDoList');
  const divToDoList = document.querySelector('.divToDoList');
  const btnLogOut = document.getElementById('btnLogOut');
  const btnBack = document.getElementById('btnBack');

  BtnForShowToDoList.onclick = () => {
    const fatherDaily = document.querySelector('.fatherDaily');
    const divForCategoryList = document.querySelector('.shopping');
    contentForUser.classList.add('animate__animated', 'animate__backOutUp');
    btnLogOut.style.display = 'none';
    btnBack.style.display = 'block';
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

        fatherDaily.style.display = 'none';
        divToDoList.style.display = 'none';
        divForCategoryList.style.display = 'block';

        workToDoCategoryListShopping();
      };
    });

    setOwnCategories();
    deletedivForListMy();
  };

  btnBack.onclick = () => {
    const divForInputEnterNewCategory = document.querySelector('.listСategoriesForInput');
    arrForCategoriesList.length = 0;

    if (divForInputEnterNewCategory) {
        divForInputEnterNewCategory.remove();
    };

    contentForUser.classList.remove('animate__animated', 'animate__backOutUp');
    btnLogOut.style.display = 'block';
    btnBack.style.display = 'none';
    divToDoList.style.display = 'none';
    contentForUser.style.display = 'block';
  };
};

const setOwnCategories = () => {
  const btnSetOwnСategories = document.getElementById('btnSetOwnСategories');

  btnSetOwnСategories.onclick = () => {
    const btnSaveСategories = document.getElementById('btnSaveСategories');
    const containerForListСategories = document.querySelector('.containerForListСategories');
    const divForInputEnterNewCategory = document.querySelector('.listСategoriesForInput')

    if (!divForInputEnterNewCategory) {
      const divForInputEnterNewCategory = document.createElement('div');
      const inputEnterNewCategory = document.createElement('input');

      inputEnterNewCategory.innerHTML = '';
      divForInputEnterNewCategory.classList.add('listСategoriesForInput');
      inputEnterNewCategory.classList.add('form-control');
      divForInputEnterNewCategory.prepend(inputEnterNewCategory);
      containerForListСategories.append(divForInputEnterNewCategory);

      btnSaveСategories.onclick =() => {

        if (inputCategoryValidation(inputEnterNewCategory.value)) {
          const divForListMy = document.createElement('div');

          divForListMy.classList.add('divForListMy')
          divForListMy.innerHTML = inputEnterNewCategory.value;
          containerForListСategories.append(divForListMy);
          inputEnterNewCategory.value = '';
          divForInputEnterNewCategory.remove();
        };
      };
    };
  };
};

const deletedivForListMy = () => {
  const btnDeleteСategories = document.getElementById('btnDeleteСategories');

  btnDeleteСategories.onclick = () => {
    const divForInputEnterNewCategory = document.querySelector('.listСategoriesForInput');

    if (!divForInputEnterNewCategory) {
      const divForListMy = document.querySelector('.divForListMy');
      divForListMy ? divForListMy.remove() : null;
    };

    if (divForInputEnterNewCategory) {
      divForInputEnterNewCategory.remove();
    };
  };
};
