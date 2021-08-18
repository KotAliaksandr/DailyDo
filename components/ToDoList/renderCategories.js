import { getListTasksUsers } from '../../api/api-handlers';
import { localStorageService } from '../../shared/ls-service';
import { renderListTasksUsers, renderBtnDeleteTasks } from './ToDo-Item/render-item';
import { workToDoCategoryListDefault } from './ToDo-Item/todo-item';

export const arrForCategoriesList = ['Shopping', 'Holidays', 'Family', 'Business'];

export const renderCategoriesDefault = async () => {
  const divForCategoryList = document.querySelector('.containerForListTasks');
  const btnBackCategories = document.getElementById('btnBackCategories');
  const containerForListСategories = document.querySelector('.containerForListСategories');
  const divToDoList = document.querySelector('.divToDoList');

  const listTasks = [];
  const arrForTasksInCategory = [];

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

      containerForListСategories.innerHTML = null;
    };
  });
};
