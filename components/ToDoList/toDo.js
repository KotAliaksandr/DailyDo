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
    };

    btnBack.onclick = () => {
        contentForUser.classList.remove('animate__animated', 'animate__backOutUp');
        btnLogOut.style.display = 'block';
        btnBack.style.display = 'none';
        divToDoList.style.display = 'none';
    };
};
