import React from 'react';
import './DashboardCards.css';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';

const cardsData = [
  {
    title: 'Lungs',
    date: 'Date: 26 Oct 2021',
    progress: 40,
    color: '#f87171',
    icon: <i className="fi fi-sr-lungs"></i>,
  },
  {
    title: 'Teeth',
    date: 'Date: 26 Oct 2021',
    progress: 75,
    color: '#34d399',
    icon: '🦷',
  },
  {
    title: 'Bone',
    date: 'Date: 26 Oct 2021',
    progress: 20,
    color: '#f87171',
    icon: '🦴',
  },
];

function DashboardCards() {
  return (
    <div className="dashboard-section">
      { }
      <div className="dashboard-header">
        <div className="week-indicator">
          <span>This Week</span>
          <FaChevronDown />
        </div>
      </div>

      { }
      <div className="dashboard-cards">
        {cardsData.map((card, index) => (
          <div className="card" key={index}>
            <div className="card-header">
              <span className="icon">{card.icon}</span>
              <h4>{card.title}</h4>
            </div>
            <p className="dates">{card.date}</p>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${card.progress}%`, backgroundColor: card.color }}
              ></div>
            </div>
          
          </div>
        ))}
      </div>
      <div className="details-header">
              <span className="details-label">Details</span>
              <span className="details-chevron">
                <FaChevronRight />
              </span>
            </div>
    </div>
  );
}

export default DashboardCards;
