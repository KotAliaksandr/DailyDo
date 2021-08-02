import { inputCategoryValidation } from "../../shared/validation";

export const workToDo = () => {
    const contentForUser = document.querySelector('.contentForUser');
    const BtnForShowToDoList = document.getElementById('BtnForShowToDoList');
    const divToDoList = document.querySelector('.divToDoList');
    const btnLogOut = document.getElementById('btnLogOut');
    const btnBack = document.getElementById('btnBack');

    BtnForShowToDoList.onclick = () => {
        contentForUser.classList.add('animate__animated', 'animate__backOutUp')
        btnLogOut.style.display = 'none';
        btnBack.style.display = 'block';
        setTimeout(() => {
            divToDoList.style.display = 'block';
        },300)
        setOwnCategories();
        deletedivForListMy();
    };

    btnBack.onclick = () => {
        contentForUser.classList.remove('animate__animated', 'animate__backOutUp');
        btnLogOut.style.display = 'block';
        btnBack.style.display = 'none';
        divToDoList.style.display = 'none';
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

                if (!inputCategoryValidation(inputEnterNewCategory.value)) {
                    null
                } else {
                    const divForListMy = document.createElement('div');

                    divForListMy.classList.add('divForListMy')
                    divForListMy.innerHTML = inputEnterNewCategory.value;
                    containerForListСategories.append(divForListMy);
                    inputEnterNewCategory.value = '';
                    divForInputEnterNewCategory.remove();
                }
            }
        } null;
    };
};

const deletedivForListMy = () => {
    const btnDeleteСategories = document.getElementById('btnDeleteСategories');
    btnDeleteСategories.onclick = () => {
        const divForListMy = document.querySelector('.divForListMy');
        divForListMy ? divForListMy.remove() : null;
    };
};
