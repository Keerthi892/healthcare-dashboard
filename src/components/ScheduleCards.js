import React from 'react';
import './ScheduleCards.css';

export default function ScheduleCards() {
  return (
    <div className="schedule-section">
      <h3>Upcoming Schedule</h3>
      <div className="schedule-card">
        <p>👨‍⚕️ Health checkup complete</p>
        <span>11:00 AM</span>
      </div>
      <div className="schedule-card">
        <p>🧑‍⚕️ Ophthalmologist</p>
        <span>14:00 PM</span>
      </div>
    </div>
  );
}
