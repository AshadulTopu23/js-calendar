// function topuDatePicker(options = {}) {
//     const {
//         inputSelector = '.dateInput',
//         prevIcon = '&lt;',
//         nextIcon = '&gt;',
//         classes = {
//             calendarContainer: '',
//             calendarHeader: '',
//             calendarBody: '',
//             calendarWeekdays: '',
//             calendarDates: ''
//         },
//         controlPosition = true,
//         closeOnOutsideClick = true
//     } = options;

//     document.addEventListener('DOMContentLoaded', () => {
//         const dateInputs = document.querySelectorAll(inputSelector);

//         dateInputs.forEach((dateInput) => {
//             // Create input container
//             const inputContainer = document.createElement('div');
//             inputContainer.classList.add('topu-input-container');
//             dateInput.parentNode.insertBefore(inputContainer, dateInput);
//             inputContainer.appendChild(dateInput);

//             // Create calendar container
//             const calendarContainer = document.createElement('div');
//             calendarContainer.classList.add('topu-calendar-container', classes.calendarContainer);
//             inputContainer.appendChild(calendarContainer);

//             // Create calendar header
//             const calendarHeader = document.createElement('div');
//             calendarHeader.classList.add('topu-calendar-header', classes.calendarHeader);
//             calendarContainer.appendChild(calendarHeader);

//             const prevMonth = document.createElement('button');
//             prevMonth.innerHTML = prevIcon;
//             calendarHeader.appendChild(prevMonth);

//             const monthYear = document.createElement('div');
//             monthYear.classList.add('month-year');
//             calendarHeader.appendChild(monthYear);

//             const nextMonth = document.createElement('button');
//             nextMonth.innerHTML = nextIcon;
//             calendarHeader.appendChild(nextMonth);

//             // Create calendar body
//             const calendarBody = document.createElement('div');
//             calendarBody.classList.add('topu-calendar-body', classes.calendarBody);
//             calendarContainer.appendChild(calendarBody);

//             // Create calendar weekdays
//             const calendarWeekdays = document.createElement('div');
//             calendarWeekdays.classList.add('topu-calendar-weekdays', classes.calendarWeekdays);
//             calendarBody.appendChild(calendarWeekdays);

//             ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].forEach(day => {
//                 const dayDiv = document.createElement('div');
//                 dayDiv.textContent = day;
//                 calendarWeekdays.appendChild(dayDiv);
//             });

//             // Create calendar dates
//             const calendarDates = document.createElement('div');
//             calendarDates.classList.add('topu-calendar-dates', classes.calendarDates);
//             calendarBody.appendChild(calendarDates);

//             let currentMonth = new Date().getMonth();
//             let currentYear = new Date().getFullYear();

//             const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

//             function renderCalendar(month, year) {
//                 const firstDay = new Date(year, month, 1).getDay();
//                 const lastDate = new Date(year, month + 1, 0).getDate();

//                 calendarDates.innerHTML = '';
//                 monthYear.textContent = `${months[month]} ${year}`;

//                 // Adjust for starting the week on Monday
//                 const adjustedFirstDay = (firstDay === 0 ? 6 : firstDay - 1);

//                 for (let i = 0; i < adjustedFirstDay; i++) {
//                     const emptyDiv = document.createElement('div');
//                     calendarDates.appendChild(emptyDiv);
//                 }

//                 for (let date = 1; date <= lastDate; date++) {
//                     const dateDiv = document.createElement('div');
//                     dateDiv.textContent = date;
//                     dateDiv.addEventListener('click', () => {
//                         document.querySelectorAll('.topu-calendar-dates div').forEach(d => d.classList.remove('selected'));
//                         dateDiv.classList.add('selected');
//                         dateInput.value = `${date} ${months[month]} ${year}`;
//                         calendarContainer.style.display = 'none';
//                     });
//                     calendarDates.appendChild(dateDiv);
//                 }
//             }

//             prevMonth.addEventListener('click', () => {
//                 currentMonth--;
//                 if (currentMonth < 0) {
//                     currentMonth = 11;
//                     currentYear--;
//                 }
//                 renderCalendar(currentMonth, currentYear);
//             });

//             nextMonth.addEventListener('click', () => {
//                 currentMonth++;
//                 if (currentMonth > 11) {
//                     currentMonth = 0;
//                     currentYear++;
//                 }
//                 renderCalendar(currentMonth, currentYear);
//             });
//             if (!controlPosition) {
//                 calendarContainer.classList.add('topu-calendar-container-not-positioned');
//             }

//             dateInput.addEventListener('focus', () => {
//                 if (controlPosition) {
//                     calendarContainer.style.display = 'block';
//                     calendarContainer.classList.add('topu-calendar-container-positioned');
//                 }
//             });

//             if (closeOnOutsideClick) {
//                 document.addEventListener('click', (event) => {
//                     if (!calendarContainer.contains(event.target) && event.target !== dateInput) {
//                         calendarContainer.style.display = 'none';
//                     }
//                 });
//             }

//             renderCalendar(currentMonth, currentYear);
//         });
//     });
// }
// export { topuDatePicker };



// // Initialize date picker with custom options
// topuDatePicker({
//     inputSelector: '.dateInput',
//     // prevIcon: '<<',
//     // nextIcon: '>>',
//     classes: {
//         calendarContainer: 'custom-container',
//         calendarHeader: 'custom-header',
//         calendarBody: 'custom-body',
//         calendarWeekdays: 'custom-weekdays',
//         calendarDates: 'custom-dates'
//     },
//     controlPosition: true,
//     closeOnOutsideClick: true
// });

// topuDatePicker({
//     inputSelector: '.dateInput2',
//     // prevIcon: '<<',
//     // nextIcon: '>>',
//     // classes: {
//     //     calendarContainer: '',
//     //     calendarHeader: '',
//     //     calendarBody: '',
//     //     calendarWeekdays: '',
//     //     calendarDates: ''
//     // },
//     classes: {
//         // calendarContainer: 'custom-container',
//         // calendarHeader: 'custom-header',
//         // calendarBody: 'custom-body',
//         // calendarWeekdays: '',
//         // calendarDates: 'custom-dates'
//     },
//     controlPosition: false,
//     closeOnOutsideClick: false
// });



// 'use strict';
// function topuDatePicker(options = {}) {
//     const {
//         inputSelector = '.dateInput',
//         prevIcon = '&lt;',
//         nextIcon = '&gt;',
//         classes: {
//             calendarContainerClass = '',
//             calendarHeaderClass = '',
//             calendarBodyClass = '',
//             calendarWeekdaysClass = '',
//             calendarDatesClass = ''
//         } = {}, // Default value for the classes object
//         controlPosition = true,
//         closeOnOutsideClick = true
//     } = options;

//     const dateInputs = document.querySelectorAll(inputSelector);

//     dateInputs.forEach((dateInput) => {
//         // Create input container
//         const inputContainer = document.createElement('div');
//         inputContainer.classList.add('topu-input-container');
//         dateInput.parentNode.insertBefore(inputContainer, dateInput);
//         inputContainer.appendChild(dateInput);

//         // Create calendar container
//         const calendarContainerEl = document.createElement('div');
//         if (calendarContainerClass) calendarContainerEl.classList.add('topu-calendar-container', calendarContainerClass);
//         else calendarContainerEl.classList.add('topu-calendar-container');
//         inputContainer.appendChild(calendarContainerEl);

//         // Create calendar header
//         const calendarHeaderEl = document.createElement('div');
//         if (calendarHeaderClass) calendarHeaderEl.classList.add('topu-calendar-header', calendarHeaderClass);
//         else calendarHeaderEl.classList.add('topu-calendar-header');
//         calendarContainerEl.appendChild(calendarHeaderEl);

//         const prevMonth = document.createElement('button');
//         prevMonth.type = 'button';
//         prevMonth.innerHTML = prevIcon;
//         calendarHeaderEl.appendChild(prevMonth);

//         const monthYear = document.createElement('div');
//         monthYear.classList.add('month-year');
//         calendarHeaderEl.appendChild(monthYear);

//         const nextMonth = document.createElement('button');
//         prevMonth.type = 'button';
//         nextMonth.innerHTML = nextIcon;
//         calendarHeaderEl.appendChild(nextMonth);

//         // Create calendar body
//         const calendarBodyEl = document.createElement('div');
//         if (calendarBodyClass) calendarBodyEl.classList.add('topu-calendar-body', calendarBodyClass);
//         else calendarBodyEl.classList.add('topu-calendar-body');
//         calendarContainerEl.appendChild(calendarBodyEl);

//         // Create calendar weekdays
//         const calendarWeekdaysEl = document.createElement('div');
//         if (calendarWeekdaysClass) calendarWeekdaysEl.classList.add('topu-calendar-weekdays', calendarWeekdaysClass);
//         else calendarWeekdaysEl.classList.add('topu-calendar-weekdays');
//         calendarBodyEl.appendChild(calendarWeekdaysEl);

//         ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].forEach(day => {
//             const dayDiv = document.createElement('div');
//             dayDiv.textContent = day;
//             calendarWeekdaysEl.appendChild(dayDiv);
//         });

//         // Create calendar dates
//         const calendarDatesEl = document.createElement('div');
//         if (calendarDatesClass) calendarDatesEl.classList.add('topu-calendar-dates', calendarDatesClass);
//         else calendarDatesEl.classList.add('topu-calendar-dates');
//         calendarBodyEl.appendChild(calendarDatesEl);

//         let currentMonth = new Date().getMonth();
//         let currentYear = new Date().getFullYear();

//         const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

//         function renderCalendar(month, year) {
//             const firstDay = new Date(year, month, 1).getDay();
//             const lastDate = new Date(year, month + 1, 0).getDate();

//             calendarDatesEl.innerHTML = '';
//             monthYear.textContent = `${months[month]} ${year}`;

//             // Adjust for starting the week on Monday
//             const adjustedFirstDay = (firstDay === 0 ? 6 : firstDay - 1);

//             for (let i = 0; i < adjustedFirstDay; i++) {
//                 const emptyDiv = document.createElement('div');
//                 calendarDatesEl.appendChild(emptyDiv);
//             }

//             for (let date = 1; date <= lastDate; date++) {
//                 const dateDiv = document.createElement('div');
//                 dateDiv.textContent = date;
//                 dateDiv.addEventListener('click', () => {
//                     document.querySelectorAll('.topu-calendar-dates div').forEach(d => d.classList.remove('selected'));
//                     dateDiv.classList.add('selected');
//                     dateInput.value = `${date} ${months[month]} ${year}`;
//                     if (controlPosition) {
//                         calendarContainerEl.style.display = 'none';
//                     }
//                 });
//                 calendarDatesEl.appendChild(dateDiv);
//             }
//         }

//         prevMonth.addEventListener('click', (e) => {
//             e.preventDefault();
//             currentMonth--;
//             if (currentMonth < 0) {
//                 currentMonth = 11;
//                 currentYear--;
//             }
//             renderCalendar(currentMonth, currentYear);
//         });

//         nextMonth.addEventListener('click', (e) => {
//             e.preventDefault();
//             currentMonth++;
//             if (currentMonth > 11) {
//                 currentMonth = 0;
//                 currentYear++;
//             }
//             renderCalendar(currentMonth, currentYear);
//         });

//         if (!controlPosition) {
//             calendarContainerEl.classList.add('topu-calendar-container-not-positioned');
//         }

//         dateInput.addEventListener('focus', () => {
//             if (controlPosition) {
//                 calendarContainerEl.style.display = 'block';
//                 calendarContainerEl.classList.add('topu-calendar-container-positioned');
//             }
//         });

//         if (closeOnOutsideClick) {
//             document.addEventListener('click', (event) => {
//                 if (!calendarContainerEl.contains(event.target) && event.target !== dateInput) {
//                     calendarContainerEl.style.display = 'none';
//                 }
//             });
//         }

//         renderCalendar(currentMonth, currentYear);
//     });
// }

// export default topuDatePicker;



'use strict';
function topuDatePicker(options = {}) {
    const {
        inputSelector = '.dateInput',
        prevIcon = '&lt;',
        nextIcon = '&gt;',
        classes: {
            inputContainerClass = '',
            calendarContainerClass = '',
            calendarHeaderClass = '',
            calendarBodyClass = '',
            calendarWeekdaysClass = '',
            calendarDatesClass = ''
        } = {}, // Default value for the classes object
        controlPosition = true,
        closeOnOutsideClick = true
    } = options;

    const dateInputs = document.querySelectorAll(inputSelector);

    dateInputs.forEach((dateInput) => {
        // Create input container
        const inputContainer = document.createElement('div');
        if (inputContainerClass) inputContainer.classList.add('topu-input-container', inputContainerClass);
        else inputContainer.classList.add('topu-input-container');
        dateInput.parentNode.insertBefore(inputContainer, dateInput);
        inputContainer.appendChild(dateInput);


        // Create calendar container
        const calendarContainerEl = document.createElement('div');
        if (calendarContainerClass) calendarContainerEl.classList.add('topu-calendar-container', calendarContainerClass);
        else calendarContainerEl.classList.add('topu-calendar-container');
        inputContainer.appendChild(calendarContainerEl);

        // Create calendar header
        const calendarHeaderEl = document.createElement('div');
        if (calendarHeaderClass) calendarHeaderEl.classList.add('topu-calendar-header', calendarHeaderClass);
        else calendarHeaderEl.classList.add('topu-calendar-header');
        calendarContainerEl.appendChild(calendarHeaderEl);

        const prevMonth = document.createElement('button');
        prevMonth.type = 'button';
        prevMonth.innerHTML = prevIcon;
        calendarHeaderEl.appendChild(prevMonth);

        const monthYear = document.createElement('div');
        monthYear.classList.add('month-year');
        calendarHeaderEl.appendChild(monthYear);

        const nextMonth = document.createElement('button');
        nextMonth.type = 'button';
        nextMonth.innerHTML = nextIcon;
        calendarHeaderEl.appendChild(nextMonth);

        // Create calendar body
        const calendarBodyEl = document.createElement('div');
        if (calendarBodyClass) calendarBodyEl.classList.add('topu-calendar-body', calendarBodyClass);
        else calendarBodyEl.classList.add('topu-calendar-body');
        calendarContainerEl.appendChild(calendarBodyEl);

        // Create calendar weekdays
        const calendarWeekdaysEl = document.createElement('div');
        if (calendarWeekdaysClass) calendarWeekdaysEl.classList.add('topu-calendar-weekdays', calendarWeekdaysClass);
        else calendarWeekdaysEl.classList.add('topu-calendar-weekdays');
        calendarBodyEl.appendChild(calendarWeekdaysEl);

        ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].forEach(day => {
            const dayDiv = document.createElement('div');
            dayDiv.textContent = day;
            calendarWeekdaysEl.appendChild(dayDiv);
        });

        // Create calendar dates
        const calendarDatesEl = document.createElement('div');
        if (calendarDatesClass) calendarDatesEl.classList.add('topu-calendar-dates', calendarDatesClass);
        else calendarDatesEl.classList.add('topu-calendar-dates');
        calendarBodyEl.appendChild(calendarDatesEl);

        let currentMonth = new Date().getMonth();
        let currentYear = new Date().getFullYear();

        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        function renderCalendar(month, year) {
            const today = new Date();
            const firstDay = new Date(year, month, 1).getDay();
            const lastDate = new Date(year, month + 1, 0).getDate();

            calendarDatesEl.innerHTML = '';
            monthYear.textContent = `${months[month]} ${year}`;

            // Adjust for starting the week on Monday
            const adjustedFirstDay = (firstDay === 0 ? 6 : firstDay - 1);

            for (let i = 0; i < adjustedFirstDay; i++) {
                const emptyDiv = document.createElement('div');
                calendarDatesEl.appendChild(emptyDiv);
            }

            for (let date = 1; date <= lastDate; date++) {
                const dateDiv = document.createElement('div');
                dateDiv.textContent = date;

                if (date === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
                    dateDiv.classList.add('selected');
                }

                dateDiv.addEventListener('click', () => {
                    document.querySelectorAll('.topu-calendar-dates div').forEach(d => d.classList.remove('selected'));
                    dateDiv.classList.add('selected');
                    dateInput.value = `${date} ${months[month]} ${year}`;
                    if (controlPosition) {
                        calendarContainerEl.style.display = 'none';
                    }
                });
                calendarDatesEl.appendChild(dateDiv);
            }
        }

        prevMonth.addEventListener('click', (e) => {
            e.preventDefault();
            currentMonth--;
            if (currentMonth < 0) {
                currentMonth = 11;
                currentYear--;
            }
            renderCalendar(currentMonth, currentYear);
        });

        nextMonth.addEventListener('click', (e) => {
            e.preventDefault();
            currentMonth++;
            if (currentMonth > 11) {
                currentMonth = 0;
                currentYear++;
            }
            renderCalendar(currentMonth, currentYear);
        });

        if (!controlPosition) {
            calendarContainerEl.classList.add('topu-calendar-container-not-positioned');
        }

        dateInput.addEventListener('focus', () => {
            if (controlPosition) {
                calendarContainerEl.style.display = 'block';
                calendarContainerEl.classList.add('topu-calendar-container-positioned');
            }
        });

        if (closeOnOutsideClick) {
            document.addEventListener('click', (event) => {
                if (!calendarContainerEl.contains(event.target) && event.target !== dateInput) {
                    calendarContainerEl.style.display = 'none';
                }
            });
        }

        renderCalendar(currentMonth, currentYear);
    });
}

export default topuDatePicker;
