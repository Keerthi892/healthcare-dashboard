import React from 'react';
import './RecentHistory.css';

const historyData = [
  { name: 'Cameron D.', action: 'Checked In', date: '24-May-25', time: '10:15 AM' },
  { name: 'Priya K.', action: 'Cancelled Visit', date: '24-May-25', time: '9:30 AM' },
  { name: 'Andrea M.', action: 'Booked Appointment', date: '23-May-25', time: '4:00 PM' },
  { name: 'Sara P.', action: 'Checked Out', date: '22-May-25', time: '1:10 PM' },
];

const RecentHistory = () => {
  return (
    <div className="history-container">
      <h2>Recent Activity</h2>
      <table className="history-table">
        <thead>
          <tr>
            <th>Patient</th>
            <th>Action</th>
            <th>Date</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {historyData.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.action}</td>
              <td>{item.date}</td>
              <td>{item.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentHistory;
