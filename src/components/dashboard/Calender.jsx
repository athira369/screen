import React, { useState, useEffect } from 'react';
import "../../styles/Calendar.css";

const Calendar = () => {
  const [date, setDate] = useState(new Date());
  const [currYear, setCurrYear] = useState(date.getFullYear());
  const [currMonth, setCurrMonth] = useState(date.getMonth());
  const months = ["January", "February", "March", "April", "May", "June", "July", 
                  "August", "September", "October", "November", "December"];
  
  const getDaysInMonth = (year, month) => {
    const firstDayofMonth = new Date(year, month, 1).getDay();
    const lastDateofMonth = new Date(year, month + 1, 0).getDate();
    const lastDayofMonth = new Date(year, month, lastDateofMonth).getDay();
    const lastDateofLastMonth = new Date(year, month, 0).getDate();

    let days = [];

    // Previous month's last days
    for (let i = firstDayofMonth; i > 0; i--) {
      days.push({ day: lastDateofLastMonth - i + 1, isActive: false, isInactive: true });
    }

    // Current month's days
    for (let i = 1; i <= lastDateofMonth; i++) {
      const isToday = i === date.getDate() && month === new Date().getMonth() && year === new Date().getFullYear();
      days.push({ day: i, isActive: isToday, isInactive: false });
    }

    // Next month's first days
    for (let i = lastDayofMonth; i < 6; i++) {
      days.push({ day: i - lastDayofMonth + 1, isActive: false, isInactive: true });
    }

    return days;
  };

  const [days, setDays] = useState(getDaysInMonth(currYear, currMonth));

  useEffect(() => {
    setDays(getDaysInMonth(currYear, currMonth));
  }, [currYear, currMonth]);

  const handlePrevNext = (direction) => {
    let newMonth = direction === 'prev' ? currMonth - 1 : currMonth + 1;
    let newYear = currYear;

    if (newMonth < 0) {
      newMonth = 11;
      newYear -= 1;
    } else if (newMonth > 11) {
      newMonth = 0;
      newYear += 1;
    }

    setCurrMonth(newMonth);
    setCurrYear(newYear);
  };

  return (
    <div className="wrapper">
      <header>
        <p className="current-date">{months[currMonth]} {currYear}</p>
        <div className="icons">
          <span id="prev" className="material-symbols-outlined" onClick={() => handlePrevNext('prev')}>
            chevron_left
          </span>
          <span id="next" className="material-symbols-outlined" onClick={() => handlePrevNext('next')}>
            chevron_right
          </span>
        </div>
      </header>
      <div className="calendar">
        <ul className="weeks">
          <li>Sun</li>
          <li>Mon</li>
          <li>Tue</li>
          <li>Wed</li>
          <li>Thu</li>
          <li>Fri</li>
          <li>Sat</li>
        </ul>
        <ul className="days">
          {days.map((day, index) => (
            <li 
              key={index} 
              className={`${day.isActive ? 'active' : ''} ${day.isInactive ? 'inactive' : ''}`}
            >
              {day.day}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Calendar;
