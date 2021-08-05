import { inputCategoryValidation } from '../../../shared/validation';

export const workToDoCategoryListShopping = () => {
    const contentForUser = document.querySelector('.contentForUser');
    const fatherDaily = document.querySelector('.fatherDaily');
    const shoppingCategory = document.querySelector('.listСategories');
    const divToDoList = document.querySelector('.divToDoList');
    const containerForStringListСategory = document.querySelector('.containerForStringListСategory');
    const divForCategoryList = document.querySelector('.shopping');
    const btnAddStringCategoryList = document.getElementById('btnAddStringCategoryList');
    const btnSaveStringCategoryList = document.getElementById('btnSaveStringCategoryList');
    const btnCloseDivForCategoryList = document.getElementById('btnCloseDivForCategoryList');
    const btnDeleteStringCategoryList = document.getElementById('btnDeleteStringCategoryList');

    shoppingCategory.onclick = () => {
        fatherDaily.style.display = 'none';
        divToDoList.style.display = 'none';
        divForCategoryList.style.display = 'block';
        hideListShopping();
        addNewStringListShopping();
        deleteTaskShopping();
    };

    const addNewStringListShopping = () => {

        btnAddStringCategoryList.onclick = () => {
            const divForInputEnterNewString = document.querySelector('.divForInputEnterNewString');

            if (!divForInputEnterNewString) {
                const divForInputEnterNewString = document.createElement('div');
                const inputEnterNewString = document.createElement('input');

                inputEnterNewString.innerHTML = '';
                divForInputEnterNewString.classList.add('divForInputEnterNewString');
                inputEnterNewString.classList.add('form-control');
                divForInputEnterNewString.prepend(inputEnterNewString);
                containerForStringListСategory.prepend(divForInputEnterNewString);

                btnSaveStringCategoryList.onclick =() => {

                    if (inputCategoryValidation(inputEnterNewString.value)) {
                        const divListTasks = document.createElement('div');

                        divListTasks.classList.add('listTasks')
                        divListTasks.innerHTML = inputEnterNewString.value;
                        containerForStringListСategory.append(divListTasks);
                        inputEnterNewString.value = '';
                        divForInputEnterNewString.remove();
                    };
                };
            };
        };
    };

    const hideListShopping = () => {
        btnCloseDivForCategoryList.onclick = () => {
            const divForInputEnterNewString = document.querySelector('.divForInputEnterNewString');

            divForCategoryList.style.display = 'none';
            divToDoList.style.display = 'block';
            fatherDaily.style.display = 'block';
            contentForUser.style.display = 'none';

            if (divForInputEnterNewString) {
                divForInputEnterNewString.remove();
            };
        };
    };

    const deleteTaskShopping = () => {
        btnDeleteStringCategoryList.onclick = () => {
            const divForInputEnterNewString = document.querySelector('.divForInputEnterNewString');

            if (!divForInputEnterNewString) {
                const divListTasks = document.querySelector('.listTasks');
                divListTasks ? divListTasks.remove() : null;
            };

            if (divForInputEnterNewString) {
                divForInputEnterNewString.remove();
            };
        };
    };
};
