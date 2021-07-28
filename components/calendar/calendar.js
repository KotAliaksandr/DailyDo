export const workCalendar = () => {
    const nowDate = new Date();
    const nowDateNumber = nowDate.getDate();
    const nowMonth = nowDate.getMonth();
    const nowYear = nowDate.getFullYear();
    const container = document.getElementById('month-calendar');
    const monthContainer = container.getElementsByClassName('month-name')[0];
    const yearContainer = container.getElementsByClassName('year-name')[0];
    const daysContainer = container.getElementsByClassName('days')[0];
    const prev = container.getElementsByClassName('prev')[0];
    const next = container.getElementsByClassName('next')[0];
    const monthName = [
        'January','February','March','April','May','June',
        'July','August','September','October','November','December'
    ];

    const setMonthCalendar = (year, month) => {
        const monthDays = new Date(year, month + 1, 0).getDate();//дата последнего дня текущего месяца
        const monthPrefix = new Date(year, month, 0).getDay();//номер дня недели, которым заканчивается прошлый месяц
        let monthDaysText = '';

        monthContainer.textContent = monthName[month];
        console.log(monthName[3]);
        yearContainer.textContent = year;
        daysContainer.innerHTML = '';

        if (monthPrefix > 0){
            for (let i = 1  ; i <= monthPrefix; i++){
                monthDaysText += '<li></li>';
            };
        };
        // console.log(monthDaysText);
        for (let i = 1; i <= monthDays; i++){
            monthDaysText += '<li>' + i + '</li>';
        };

        daysContainer.innerHTML = monthDaysText;

        if (month == nowMonth && year == nowYear){
            const days = daysContainer.getElementsByTagName('li');
            days[monthPrefix + nowDateNumber - 1].classList.add('date-now');
        };
    };

    setMonthCalendar(nowYear,nowMonth);

    prev.onclick = () => {
        let curDate = new Date(yearContainer.textContent,monthName.indexOf(monthContainer.textContent));
        curDate.setMonth(curDate.getMonth() - 1);
        const curYear = curDate.getFullYear();
        const curMonth = curDate.getMonth();
        setMonthCalendar(curYear,curMonth);
    };

    next.onclick = () => {
        let curDate = new Date(yearContainer.textContent,monthName.indexOf(monthContainer.textContent));
        curDate.setMonth(curDate.getMonth() + 1);
        const curYear = curDate.getFullYear();
        const curMonth = curDate.getMonth();
        setMonthCalendar(curYear,curMonth);
    };
};
