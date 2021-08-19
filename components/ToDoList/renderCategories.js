import { getListTasksUsers } from '../../api/api-handlers';
import { localStorageService } from '../../shared/ls-service';
import { renderListTasksUsers, renderBtnDeleteTasks } from './ToDo-Item/render-item';
import { workToDoCategoryListDefault } from './ToDo-Item/todo-item';
import { arrForBtnDeleteCategories } from './deleteCategoriesUser';

export const arrForCategoriesList = ['Shopping', 'Holidays', 'Family', 'Business'];

export const renderCategoriesDefault = async () => {
  const divForCategoryList = document.querySelector('.containerForListTasks');
  const btnBackCategories = document.getElementById('btnBackCategories');
  const containerForListСategories = document.querySelector('.containerForListСategories');
  const divToDoList = document.querySelector('.divToDoList');

  const listTasks = [];
  const arrForTasksInCategory = [];

  renderbtnDeleteСategories();

  await getListTasksUsers('todolist')
    .then(response => {
      response.forEach(item => {

        if (item.userId === localStorageService.getUID()) {
          listTasks.push(item);
        };
      });
    });

  arrForCategoriesList.forEach(category => {
    const divCategory = document.createElement('div');
    const numberOfTasksInCategory = document.createElement('div');

    listTasks.map(listItem => {

      if (listItem.nameCategory === category) {
        arrForTasksInCategory.push(listItem);
        numberOfTasksInCategory.innerHTML = arrForTasksInCategory.length;
      };
    });

    arrForTasksInCategory.length = 0;

    divCategory.classList.add('listСategories');
    numberOfTasksInCategory.classList.add('numberOfTasksInCategory');
    divCategory.innerHTML = category;
    divCategory.append(numberOfTasksInCategory);
    containerForListСategories.append(divCategory);

    divCategory.onclick = () => {
      const divForInputEnterNewCategory = document.querySelector('.listСategoriesForInput');
      const nameListTasks = document.getElementById('nameListTasks');

      nameListTasks.innerText = category;
      arrForBtnDeleteCategories.length = 0;

      divForInputEnterNewCategory ? divForInputEnterNewCategory.remove() : null;
      localStorageService.deleteIdCategoriesBoard();
      localStorageService.setIdListTasksBoard(category);

      renderListTasksUsers()
        .catch(error => error);

      divToDoList.style.display = 'none';
      divForCategoryList.style.display = 'block';
      btnBackCategories.style.display = 'block';

      workToDoCategoryListDefault();
      renderBtnDeleteTasks();

      containerForListСategories.innerHTML = null;
    };
  });
};

export const renderbtnDeleteСategories = () => {
  const btnDeleteСategories = document.getElementById('btnDeleteСategories');

  (arrForBtnDeleteCategories.length <= 0) ?
  btnDeleteСategories.style.display = 'none' : btnDeleteСategories.style.display = 'flex';
};
