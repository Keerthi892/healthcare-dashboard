import React from 'react';
import './NotificationsPanel.css';

const notifications = [
  {
    icon: '✅',
    message: 'Appointment confirmed with Dr. Cameron.',
    time: '10 mins ago',
  },
  {
    icon: '🧪',
    message: 'New lab results are available.',
    time: '1 hour ago',
  },
  {
    icon: '⚠️',
    message: 'Upcoming appointment tomorrow at 9:00 AM.',
    time: '3 hours ago',
  },
];

const NotificationsPanel = () => {
  return (
    <div className="notifications-panel">
      <h3>Notifications</h3>
      <ul>
        {notifications.map((note, index) => (
          <li key={index} className="notification-item">
            <span className="icon">{note.icon}</span>
            <div className="details">
              <p className="message">{note.message}</p>
              <span className="time">{note.time}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationsPanel;
