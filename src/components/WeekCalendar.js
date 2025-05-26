import React from "react";
import "./WeekCalendar.css";
// import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

const weekDays = [
  { day: "Mon", date: 25 },
  { day: "Tues", date: 26 },
  { day: "Wed", date: 27 },
  { day: "Thurs", date: 28 },
  { day: "Fri", date: 29 },
  { day: "Sat", date: 30 },
  { day: "Sun", date: 31 }
];

const timesGrid = [
  ["10:00", "11:00", "12:00"],
  ["08:00", "09:00", "10:00"],
  ["12:00", "—", "13:00"],
  ["10:00", "11:00", "—"],
  ["—", "14:00", "16:00"],
  ["12:00", "14:00", "15:00"],
  ["09:00", "10:00", "11:00"]
];

const colorMap = {
  "1-1": "blue",
  "1-3": "grey",
  "0-5": "grey",
  "0-6": "grey"
};

const getCellStyle = (row, col) => {
  const key = `${row}-${col}`;
  if (colorMap[key] === "blue") return "calendar-cell appointment blue";
  if (colorMap[key] === "grey") return "calendar-cell appointment grey";
  return "calendar-cell empty";
};

const WeekCalendar = () => {
  const handlePrevious = () => {
    
  };

  const handleNext = () => {
    
  };

  return (
    <div className="calendar-container">
      <div className="calendar-header">
      <h2>October 2021</h2>
      <div className="nav-controls">
    <button className="nav-button" onClick={handlePrevious}>
      <FiArrowLeft />
    </button>
    <button className="nav-button" onClick={handleNext}>
      <FiArrowRight />
    </button>
  </div>

      </div>

      <div className="calendar-grid">
        <div className="calendar-row header-row">
          {weekDays.map(({ day, date }, index) => (
            <div className="calendar-cell day" key={index}>
              <div>{day}</div>
              <div className="date">{date}</div>
            </div>
          ))}
        </div>

        {[0, 1, 2].map((rowIndex) => (
          <div className="calendar-row" key={rowIndex}>
            {timesGrid.map((dayColumn, colIndex) => (
              <div
                key={`${rowIndex}-${colIndex}`}
                className={getCellStyle(rowIndex, colIndex)}
              >
                {dayColumn[rowIndex]}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeekCalendar;
