import { deleteListTasksUsers, getListTasksUsers } from '../../api/api-handlers';
import { renderListCategories } from './createCategory';
import { localStorageService } from '../../shared/ls-service';
import { renderbtnDeleteСategories } from './renderCategories';
import { confirmationRequest } from './ToDo-Item/todo-item';

export const arrForBtnDeleteCategories = [];

export const deletedivForListMy = () => {
  const btnDeleteСategories = document.getElementById('btnDeleteСategories');

  btnDeleteСategories.onclick = () => {
    confirmationRequest();

    const confirmationDeleteCategories = () => {
      const answerNo = document.getElementById('answerNo');
      const answerYes = document.getElementById('answerYes');

      answerNo.onclick = () => {
        const containerDivForMessageConfirmation = document.querySelector('.containerDivForMessageConfirmation');
        containerDivForMessageConfirmation.remove();
      };

      answerYes.onclick = () => {
        const containerDivForMessageConfirmation = document.querySelector('.containerDivForMessageConfirmation');

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
              deleteListTasksUsers(item.id,'categoriesUser')
                .then( () => arrForBtnDeleteCategories.shift())
                .then( () => renderbtnDeleteСategories());
            });
          };
          deleteCategories();
        };

        if (arrForBtnDeleteCategories.length > 0) {
          compareCollections();
          setTimeout( () =>  renderListCategories().catch(error => error), 1000);
          containerDivForMessageConfirmation.remove();
        };
      };
    };
    confirmationDeleteCategories();
  };
};
