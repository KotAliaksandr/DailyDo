export const workCalendar = () => {
  const nowDate = new Date();
  const nowMonth = nowDate.getMonth();
  const nowYear = nowDate.getFullYear();
  const monthContainer = document.querySelector('.month-name');
  const yearContainer = document.querySelector('.year-name');
  const daysContainer = document.querySelector('.days');
  const prev = document.querySelector('.prev');
  const next = document.querySelector('.next');
  const monthName = [
    'January','February','March','April','May','June',
    'July','August','September','October','November','December'
  ];

  const setMonthCalendar = (year, month) => {
    const monthDays = new Date(year, month + 1, 0).getDate();
    const monthPrefix = new Date(year, month, 0).getDay();
    const arrForDays = [ ...Array(monthDays).keys() ];
    const arrForEmptyCell = [ ...Array(monthPrefix + 1).keys() ];

    monthContainer.textContent = monthName[month];
    yearContainer.textContent = year;
    daysContainer.innerHTML = '';

    arrForEmptyCell.forEach((item) => {
      const dateLi = document.createElement('li');
      item > 0 ?  daysContainer.append(dateLi) : null;
    });

    arrForDays.forEach((item) => {
      const dateLiValue = document.createElement('li');

      daysContainer.append(dateLiValue)
      dateLiValue.innerHTML = item + 1;

      if (month == nowMonth && year == nowYear){
        nowDate.getDate() == dateLiValue.innerHTML ? dateLiValue.classList.add('dateNow') : null;
      };
    });
  };

  setMonthCalendar(nowYear,nowMonth);

  const getCurMonth = monthPut => {
    const curDate = new Date(yearContainer.textContent, monthName.indexOf(monthContainer.textContent));
    const getCurDate = () => {
      curDate.setMonth(curDate.getMonth() - monthPut);
    };

    const getCurMonthPut = () => {
      const curYear = curDate.getFullYear();
      const curMonth = curDate.getMonth();
      setMonthCalendar(curYear,curMonth);
    };
    getCurDate();
    getCurMonthPut();
  };

  prev.onclick = () => {
    getCurMonth(1);
  };

  next.onclick = () => {
    getCurMonth(-1);
  };
};
