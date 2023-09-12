const daysTag = document.querySelector(".days"),
currentDate = document.querySelector(".current-date"),
prevNextIcon = document.querySelectorAll(".icons span");

// getting new date, current year and month
let date = new Date(),
currYear = date.getFullYear(),
currMonth = date.getMonth();

// storing full name of all months in array
const months = [
    "January", 
    "February", 
    "March", 
    "April", 
    "May", 
    "June", 
    "July",
    "August", 
    "September", 
    "October", 
    "November", 
    "December"
];

const days = [
    'Sun', 
    'Mon', 
    'Tue', 
    'Wed', 
    'Thu', 
    'Frid', 
    'Sat'
];

const calendar = document.querySelector('.calendar');

function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}


const renderCalendar = () => {
    const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear();

    const daysInCurrentMonth = getDaysInMonth(
        year,
        month,
    );

    if (today < daysInCurrentMonth) {
        for (let i = today.getDate(); i < daysInCurrentMonth; i++) {
            const element = document.createElement('div');
            element.classList.add('day');
            const date = new Date(year, month, i);
            const dayName = days[date.getDay()];
            element.innerHTML = `
                <p>${dayName}</p>
                <p class="numberday">${i}</p>
            `;
            calendar.appendChild(element);
        }
    }
    else {
        const todayElement = document.createElement('div');
        todayElement.classList.add('day');
        const dayName = days[today.getDay()];
        todayElement.innerHTML = `
            <p>${dayName}</p>
            <p class="numberday">${today.getDate()}</p>
        `;
        calendar.appendChild(todayElement);


        const daysInNexttMonth = getDaysInMonth(
            year,
            month + 1,
        );
        for (let i = 0; i < daysInNexttMonth; i++) {
            const element = document.createElement('div');
            element.classList.add('day');
            const date = new Date(year, month + 1, i + 1);
            const dayName = days[date.getDay()];
            element.innerHTML = `
                <p>${dayName}</p>
                <p class="numberday">${i + 1}</p>
            `;
            calendar.appendChild(element);          
        }  

    }   
    // getDate return day in the month
    // getDay return day of the week
    currentDate.innerText = `${today.getDate()}  ${months[today.getMonth()]}, ${days[today.getDay()]}`;
}
renderCalendar();

prevNextIcon.forEach(icon => { 
    icon.addEventListener("click", () => { 
       
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

        if(currMonth < 0 || currMonth > 11) { 
           
            date = new Date(currYear, currMonth, new Date().getDate());
            currYear = date.getFullYear(); 
            currMonth = date.getMonth(); 
        } else {
            date = new Date(); 
        }
        renderCalendar();
    });
});

const showMoreButton = document.querySelector('.show-more-btn');
const wrapperSections = document.querySelector('.sections');

showMoreButton.addEventListener('click', () => {
    if (wrapperSections.classList.contains('show-expanded')) {
        wrapperSections.classList.remove('show-expanded');
        showMoreButton.textContent = 'Show more';
    }
    else {
        wrapperSections.classList.add('show-expanded');
        showMoreButton.textContent = 'Show less';
    }
});
