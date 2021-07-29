export const workToDo = () => {
    const contentForUser = document.querySelector('.contentForUser');
    const BtnForShowToDoList = document.getElementById('BtnForShowToDoList');
    const divToDoList = document.querySelector('.divToDoList');
    const btnLogOut = document.getElementById('btnLogOut');
    const btnBack = document.getElementById('btnBack');

    BtnForShowToDoList.onclick = () => {
        contentForUser.style.display = 'none';
        btnLogOut.style.display = 'none';
        btnBack.style.display = 'block';
        divToDoList.style.display = 'block';
    };

    btnBack.onclick = () => {
        contentForUser.style.display = 'block';
        btnLogOut.style.display = 'block';
        btnBack.style.display = 'none';
        divToDoList.style.display = 'none';
    };
};
