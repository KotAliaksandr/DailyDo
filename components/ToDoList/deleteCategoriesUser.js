import { deleteListTasksUsers, getListTasksUsers } from '../../api/api-handlers';
import { renderListCategories } from './createCategory';
import { localStorageService } from '../../shared/ls-service';
import { renderbtnDeleteСategories } from './renderCategories';
import { confirmationRequest } from './ToDo-Item/todo-item';
import { hideMessageEnterString } from '../../shared/helpUserEnterStringCategory';
import { showSpinner, hideSpinner } from '../spinner/spinner';

export const arrForBtnDeleteCategories = [];

export const deletedivForListMy = () => {
  const btnDeleteСategories = document.getElementById('btnDeleteСategories');

  btnDeleteСategories.onclick = () => {
    confirmationRequest();
    hideMessageEnterString();

    const confirmationDeleteCategories = () => {
      const answerNo = document.getElementById('answerNo');
      const answerYes = document.getElementById('answerYes');

      answerNo.onclick = () => {
        const containerDivForMessageConfirmation = document.querySelector('.containerDivForMessageConfirmation');
        containerDivForMessageConfirmation.remove();
      };

      answerYes.onclick = () => {
        const containerDivForMessageConfirmation = document.querySelector('.containerDivForMessageConfirmation');

        showSpinner();

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
                .then( () => renderbtnDeleteСategories())
                .then( () => arrForBtnDeleteCategories <= 0 ?
                  renderListCategories()
                    .then( () => hideSpinner()).catch(error => error) : null
                );
            });
          };
          deleteCategories();
        };

        if (arrForBtnDeleteCategories.length > 0) {
          compareCollections();
          containerDivForMessageConfirmation.remove();
        };
      };
    };
    confirmationDeleteCategories();
  };
};
