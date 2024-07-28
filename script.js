document.addEventListener('DOMContentLoaded', () => {
    const calendarDates = document.getElementById('calendarDates');
    const monthYear = document.getElementById('monthYear');
    const prevMonth = document.getElementById('prevMonth');
    const nextMonth = document.getElementById('nextMonth');

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

    renderCalendar(currentMonth, currentYear);
});
