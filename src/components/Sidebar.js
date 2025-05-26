import React from 'react';
import './Sidebar.css';
import { FaTachometerAlt, FaHistory, FaCalendarAlt, FaStethoscope, FaChartBar, FaVial, FaComments, FaLifeRing, FaCog } from 'react-icons/fa';

const Sidebar = () => {
  const generalItems = [
    { name: "Dashboard", icon: <FaTachometerAlt /> },
    { name: "History", icon: <FaHistory /> },
    { name: "Calendar", icon: <FaCalendarAlt /> },
    { name: "Appointments", icon: <FaStethoscope /> },
    { name: "Statistics", icon: <FaChartBar /> },
    { name: "Tests", icon: <FaVial /> },
  ];

  const toolsItems = [
    { name: "Chat", icon: <FaComments /> },
    { name: "Support", icon: <FaLifeRing /> },
  ];

  return (
    <div className="sidebar">
      <h3>General</h3>
      <ul>
        {generalItems.map((item, index) => (
          <li key={index}>
            <span className="icon">{item.icon}</span>
            {item.name}
          </li>
        ))}
      </ul>

      <h3>Tools</h3>
      <ul>
        {toolsItems.map((item, index) => (
          <li key={index}>
            <span className="icon">{item.icon}</span>
            {item.name}
          </li>
        ))}
      </ul>

      <div className="settings">
        <li>
          <span className="icon"><FaCog /></span>
          Settings
        </li>
      </div>
    </div>
  );
};

export default Sidebar;
