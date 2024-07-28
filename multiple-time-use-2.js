document.addEventListener('DOMContentLoaded', () => {
    // const dateInputs = document.querySelectorAll('.date-input');
    const dateInput = document.querySelector('.date-input');

    // dateInputs.forEach(dateInput => {
    // Create input container
    const inputContainer = document.createElement('div');
    inputContainer.classList.add('input-container');
    dateInput.parentNode.insertBefore(inputContainer, dateInput);
    inputContainer.appendChild(dateInput);

    // Create calendar container
    const calendarContainer = document.createElement('div');
    calendarContainer.classList.add('calendar-container');
    inputContainer.appendChild(calendarContainer);

    // Create calendar header
    const calendarHeader = document.createElement('div');
    calendarHeader.classList.add('calendar-header');
    calendarContainer.appendChild(calendarHeader);

    const prevMonth = document.createElement('button');
    prevMonth.innerHTML = '&lt;';
    calendarHeader.appendChild(prevMonth);

    const monthYear = document.createElement('div');
    monthYear.classList.add('month-year');
    calendarHeader.appendChild(monthYear);

    const nextMonth = document.createElement('button');
    nextMonth.innerHTML = '&gt;';
    calendarHeader.appendChild(nextMonth);

    // Create calendar body
    const calendarBody = document.createElement('div');
    calendarBody.classList.add('calendar-body');
    calendarContainer.appendChild(calendarBody);

    // Create calendar weekdays
    const calendarWeekdays = document.createElement('div');
    calendarWeekdays.classList.add('calendar-weekdays');
    calendarBody.appendChild(calendarWeekdays);

    ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].forEach(day => {
        const dayDiv = document.createElement('div');
        dayDiv.textContent = day;
        calendarWeekdays.appendChild(dayDiv);
    });

    // Create calendar dates
    const calendarDates = document.createElement('div');
    calendarDates.classList.add('calendar-dates');
    calendarBody.appendChild(calendarDates);

    let currentMonth = new Date().getMonth();
    let currentYear = new Date().getFullYear();

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    function renderCalendar(month, year) {
        const firstDay = new Date(year, month, 1).getDay();
        const lastDate = new Date(year, month + 1, 0).getDate();

        calendarDates.innerHTML = '';
        monthYear.textContent = `${months[month]} ${year}`;

        // Adjust for starting the week on Monday
        const adjustedFirstDay = (firstDay === 0 ? 6 : firstDay - 1);

        for (let i = 0; i < adjustedFirstDay; i++) {
            const emptyDiv = document.createElement('div');
            calendarDates.appendChild(emptyDiv);
        }

        for (let date = 1; date <= lastDate; date++) {
            const dateDiv = document.createElement('div');
            dateDiv.textContent = date;
            dateDiv.addEventListener('click', () => {
                document.querySelectorAll('.calendar-dates div').forEach(d => d.classList.remove('selected'));
                dateDiv.classList.add('selected');
                dateInput.value = `${date} ${months[month]} ${year}`;
                calendarContainer.style.display = 'none';
            });
            calendarDates.appendChild(dateDiv);
        }
    }

    prevMonth.addEventListener('click', () => {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        renderCalendar(currentMonth, currentYear);
    });

    nextMonth.addEventListener('click', () => {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        renderCalendar(currentMonth, currentYear);
    });

    dateInput.addEventListener('focus', () => {
        document.querySelectorAll('.calendar-container').forEach(container => {
            container.style.display = 'none';
        });
        calendarContainer.style.display = 'block';
    });

    document.addEventListener('click', (event) => {
        if (!calendarContainer.contains(event.target) && event.target !== dateInput) {
            calendarContainer.style.display = 'none';
        }
    });

    renderCalendar(currentMonth, currentYear);
    // });
});

// document.addEventListener('DOMContentLoaded', () => {
//     const dateInputs = document.querySelectorAll('.date-input');

//     dateInputs.forEach(dateInput => {
//         // Create input container
//         const inputContainer = document.createElement('div');
//         inputContainer.classList.add('input-container');
//         dateInput.parentNode.insertBefore(inputContainer, dateInput);
//         inputContainer.appendChild(dateInput);

//         // Create calendar container
//         const calendarContainer = document.createElement('div');
//         calendarContainer.classList.add('calendar-container');
//         inputContainer.appendChild(calendarContainer);

//         // Create calendar header
//         const calendarHeader = document.createElement('div');
//         calendarHeader.classList.add('calendar-header');
//         calendarContainer.appendChild(calendarHeader);

//         const prevMonth = document.createElement('button');
//         prevMonth.innerHTML = '&lt;';
//         calendarHeader.appendChild(prevMonth);

//         const monthYear = document.createElement('div');
//         monthYear.classList.add('month-year');
//         calendarHeader.appendChild(monthYear);

//         const nextMonth = document.createElement('button');
//         nextMonth.innerHTML = '&gt;';
//         calendarHeader.appendChild(nextMonth);

//         // Create calendar body
//         const calendarBody = document.createElement('div');
//         calendarBody.classList.add('calendar-body');
//         calendarContainer.appendChild(calendarBody);

//         // Create calendar weekdays
//         const calendarWeekdays = document.createElement('div');
//         calendarWeekdays.classList.add('calendar-weekdays');
//         calendarBody.appendChild(calendarWeekdays);

//         ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].forEach(day => {
//             const dayDiv = document.createElement('div');
//             dayDiv.textContent = day;
//             calendarWeekdays.appendChild(dayDiv);
//         });

//         // Create calendar dates
//         const calendarDates = document.createElement('div');
//         calendarDates.classList.add('calendar-dates');
//         calendarBody.appendChild(calendarDates);

//         let currentMonth = new Date().getMonth();
//         let currentYear = new Date().getFullYear();

//         const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

//         function renderCalendar(month, year) {
//             const firstDay = new Date(year, month, 1).getDay();
//             const lastDate = new Date(year, month + 1, 0).getDate();

//             calendarDates.innerHTML = '';
//             monthYear.textContent = `${months[month]} ${year}`;

//             // Adjust for starting the week on Monday
//             const adjustedFirstDay = (firstDay === 0 ? 6 : firstDay - 1);

//             for (let i = 0; i < adjustedFirstDay; i++) {
//                 const emptyDiv = document.createElement('div');
//                 calendarDates.appendChild(emptyDiv);
//             }

//             for (let date = 1; date <= lastDate; date++) {
//                 const dateDiv = document.createElement('div');
//                 dateDiv.textContent = date;
//                 dateDiv.addEventListener('click', () => {
//                     document.querySelectorAll('.calendar-dates div').forEach(d => d.classList.remove('selected'));
//                     dateDiv.classList.add('selected');
//                     dateInput.value = `${date} ${months[month]} ${year}`;
//                     calendarContainer.style.display = 'none';
//                 });
//                 calendarDates.appendChild(dateDiv);
//             }
//         }

//         prevMonth.addEventListener('click', () => {
//             currentMonth--;
//             if (currentMonth < 0) {
//                 currentMonth = 11;
//                 currentYear--;
//             }
//             renderCalendar(currentMonth, currentYear);
//         });

//         nextMonth.addEventListener('click', () => {
//             currentMonth++;
//             if (currentMonth > 11) {
//                 currentMonth = 0;
//                 currentYear++;
//             }
//             renderCalendar(currentMonth, currentYear);
//         });

//         dateInput.addEventListener('focus', () => {
//             document.querySelectorAll('.calendar-container').forEach(container => {
//                 container.style.display = 'none';
//             });
//             calendarContainer.style.display = 'block';
//         });

//         document.addEventListener('click', (event) => {
//             if (!calendarContainer.contains(event.target) && event.target !== dateInput) {
//                 calendarContainer.style.display = 'none';
//             }
//         });

//         renderCalendar(currentMonth, currentYear);
//     });
// });
