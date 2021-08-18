import { deleteListTasksUsers, getListTasksUsers } from '../../api/api-handlers';
import { renderListCategories } from './createCategory';
import { localStorageService } from '../../shared/ls-service';

export const arrForBtnDeleteCategories = [];

export const deletedivForListMy = () => {
  const btnDeleteСategories = document.getElementById('btnDeleteСategories');

  btnDeleteСategories.onclick = () => {
    const divForInputEnterNewCategory = document.querySelector('.listСategoriesForInput');

    const compareCollections = async () => {
      const arrForIdDelete = [];
      const arrNameCategoryListsTasksUser = arrForBtnDeleteCategories.map(item => item.category)
      let listsTasks;

      await getListTasksUsers('todolist').then(response => listsTasks = response);

      const deleteTasksFromCategory = () => {
        const listsTasksUser = listsTasks.filter(item => item.userId === localStorageService.getUID() ? item : null);

        listsTasksUser.map(itemTask =>  {
          arrNameCategoryListsTasksUser.map(itemDelete => {
            itemTask.nameCategory === itemDelete ? arrForIdDelete.push(itemTask) : null;
          });
          arrForIdDelete.forEach(item => {
            deleteListTasksUsers(item.id, 'todolist');
          });
        });
      };

      deleteTasksFromCategory();

      const deleteCategories = () => {
        const containerForListСategoriesUser = document.querySelector('.containerForListСategoriesUser');


        arrForBtnDeleteCategories.forEach(item => {
          containerForListСategoriesUser.innerHTML = null;
          console.log(containerForListСategoriesUser.innerHTML);
          deleteListTasksUsers(item.id,'categoriesUser')
            .then( () => arrForBtnDeleteCategories.shift())
        });
      };

      deleteCategories();
    };

    if (arrForBtnDeleteCategories.length > 0) {
      compareCollections();
      setTimeout( () =>  renderListCategories().catch(error => error), 1000);
    };

    if (divForInputEnterNewCategory) {
      divForInputEnterNewCategory.remove();
    };
  };
};
