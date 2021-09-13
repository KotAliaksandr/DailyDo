import { deleteListTasksUsers } from '../../../api/api-handlers';
import { renderListTasksUsers, renderInputForEnterNameTask, renderBtnDeleteTasks } from './render-item';
import { toDoHandler } from './handler-item';
import { renderCategoriesDefault, renderbtnDeleteСategories } from '../renderCategories';
import { renderListCategories } from '../createCategory';
import { localStorageService } from '../../../shared/ls-service';
import { setOwnCategories } from '../toDo';
import { deletedivForListMy } from '../deleteCategoriesUser';
import { hideMessageEnterStringForTasks } from '../../../shared/helpUserEnterStringCategory';

export const arrforListId = [];

export const workToDoCategoryListDefault = () => {
  const btnAddStringCategoryList = document.getElementById('btnAddStringCategoryList');
  const btnDeleteStringCategoryList = document.getElementById('btnDeleteStringCategoryList');

  const addNewStringListShopping = () => {

    btnAddStringCategoryList.onclick = () => {
      const divForInputEnterNewString = document.querySelector('.divForInputEnterNewString');

      if (!divForInputEnterNewString) {
        renderInputForEnterNameTask();
        toDoHandler();
      };
    };
  };

  addNewStringListShopping();

  const deleteTaskCategory = () => {

    btnDeleteStringCategoryList.onclick = () => {
      confirmationRequest();
      hideMessageEnterStringForTasks();

      const confirmationDelete = () => {
        const answerNo = document.getElementById('answerNo');
        const answerYes = document.getElementById('answerYes');

        answerNo.onclick = () => {
          const containerDivForMessageConfirmation = document.querySelector('.containerDivForMessageConfirmation');
          containerDivForMessageConfirmation.remove();
        };

        answerYes.onclick = () => {

          if (arrforListId.length > 0) {
            const containerDivForMessageConfirmation = document.querySelector('.containerDivForMessageConfirmation');

            const deleteTasks = () => {
              arrforListId.forEach(item => {
                deleteListTasksUsers(item,'todolist')
                  .then( () => arrforListId.shift())
                  .then( () => renderBtnDeleteTasks())
                  .then ( () => arrforListId <= 0 ? renderListTasksUsers().catch(error => error) : null);
              });
            };

            containerDivForMessageConfirmation.remove();

            deleteTasks();
          };
        };
      }
      confirmationDelete();
    };
  };

  deleteTaskCategory();
  backToCategories();
};

export const backToCategories = () => {
  const btnBackCategories = document.getElementById('btnBackCategories');

  btnBackCategories.onclick = () => {
    const divForCategoryList = document.querySelector('.containerForListTasks');
    const btnBackCategories = document.getElementById('btnBackCategories');
    const divForInputEnterNewString = document.querySelector('.divForInputEnterNewString');
    const divToDoList = document.querySelector('.divToDoList');
    const containerForListСategories = document.querySelector('.containerForListСategories');
    const nameDivToDoList = divToDoList.getElementsByTagName('h3')[0];

    arrforListId.length = 0;

    divForInputEnterNewString ? divForInputEnterNewString.remove() : null;

    divToDoList.style.display = 'block';
    divForCategoryList.style.display = 'none';
    btnBackCategories.style.display = 'none';
    containerForListСategories.innerHTML = null;
    localStorageService.setIdCategoriesBoard(nameDivToDoList.innerText);
    localStorageService.deleteIdListTasksBoard();

    renderCategoriesDefault();
    renderListCategories();
    hideMessageEnterStringForTasks();
  };
  deletedivForListMy();
  setOwnCategories();
  renderbtnDeleteСategories();
};

export const confirmationRequest = () => {
  const containerDivForMessageConfirmation = document.createElement('div');
  const divForMessageConfirmation = document.createElement('div');
  const request = document.createElement('div');
  const answerUserNo = document.createElement('div');
  const answerUserYes = document.createElement('div');

  document.body.append(containerDivForMessageConfirmation);
  containerDivForMessageConfirmation.classList.add('containerDivForMessageConfirmation');
  containerDivForMessageConfirmation.append(divForMessageConfirmation);
  divForMessageConfirmation.classList.add('divForMessageConfirmation');
  divForMessageConfirmation.append(answerUserNo, request, answerUserYes);

  request.id = 'deleteTsk';
  answerUserNo.id = 'answerNo';
  answerUserYes.id = 'answerYes';

  request.innerHTML = 'Delete?';
  answerUserNo.innerHTML = 'No';
  answerUserYes.innerHTML = 'Yes';
};
