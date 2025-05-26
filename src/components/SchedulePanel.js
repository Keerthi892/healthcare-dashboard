import React from 'react';
import './SchedulePanel.css';

const appointments = [
  {
    title: 'Dentist - Dr. Cameron Williamson',
    time: '09:00 - 11:00',
    type: 'dentist',
    emoji: '🦷',
    image: 'https://via.placeholder.com/40',
    day: 'Monday',
  },
  {
    title: 'Physiotherapy - Dr. Jenny Wilson',
    time: '11:30 - 12:30',
    type: 'physio',
    emoji: '🏃',
    image: 'https://via.placeholder.com/40',
    day: 'Monday',
  },
  {
    title: 'Health Checkup Complete',
    time: '11:00 AM',
    type: 'checkup',
    emoji: '🩺',
    image: 'https://via.placeholder.com/40',
    day: 'Thursday',
  },
  {
    title: 'Opthalmologist',
    time: '14:00 PM',
    type: 'checkup',
    emoji: '👁️',
    image: 'https://via.placeholder.com/40',
    day: 'Thursday',
  },
  {
    title: 'Cardiologist',
    time: '12:00 AM',
    type: 'physio',
    emoji: '❤️',
    image: 'https://via.placeholder.com/40',
    day: 'Saturday',
  },
  {
    title: 'Neurologist',
    time: '16:00 PM',
    type: 'neurologist',
    emoji: '🧠',
    image: 'https://via.placeholder.com/40',
    day: 'Saturday',
  },
];

// Group appointments by day (max 2 per day)
const groupByDay = (appointments) => {
  return appointments.reduce((acc, appt) => {
    if (!acc[appt.day]) acc[appt.day] = [];
    if (acc[appt.day].length < 2) acc[appt.day].push(appt);
    return acc;
  }, {});
};

const SchedulePanel = () => {
  const grouped = groupByDay(appointments);

  return (
    <div className="schedule-panel">
      <h3 className="panel-title">Upcoming Schedule</h3>
      {Object.entries(grouped).map(([day, appts]) => (
        <div key={day} className="day-section">
          <h4 className="day-title">{day}</h4>
          <div className={`schedule-row ${appts.length === 1 ? 'single' : ''}`}>
            {appts.map((appt, index) => (
              <div
                className={`schedule-card ${appt.type} ${appts.length === 1 ? 'full-width' : ''}`}
                key={index}
              >
                <div className="emoji-corner">{appt.emoji}</div>

                <div className="card-header">
                  {/* <img src={appt.image} alt="Doctor" className="doctor-image" /> */}
                  <div className="card-content">
                    <div className="title">{appt.title}</div>
                  </div>
                </div>

                <div className="time">{appt.time}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SchedulePanel;
