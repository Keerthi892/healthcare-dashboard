// App.jsx
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import DashboardCards from './components/DashboardCards';
import RecentHistory from './components/RecentHistory';
import PatientBarChart from './components/PatientBarChart';
import ActivityChart from './components/ActivityChart';
import SchedulePanel from './components/SchedulePanel';
import NotificationsPanel from './components/NotificationsPanel';
import CalendarCard from './components/WeekCalendar';
import DonutChart from './components/DonutChart';
import BodyDiagram from './components/BodyDiagram';

import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('Dashboard');


  const highlightNotifications = activeSection === 'Chat';

  return (
    <div className="dashboard-layout">
      <Header />
      <div className="dashboard-main">
        <Sidebar activeItem={activeSection} setActiveItem={setActiveSection} />

        <div className="content-area">
          <div className={`diagram-and-cards ${activeSection === 'Dashboard' ? 'highlight' : ''}`}>
            <BodyDiagram />
            <DashboardCards />
          </div>

          <div className={`${activeSection === 'Statistics' ? 'highlight' : ''}`}>
            <ActivityChart />
            <PatientBarChart />
          </div>

          <div className={`${activeSection === 'History' ? 'highlight' : ''}`}>
            <RecentHistory />
          </div>

        </div>

        <div className="right-panel">
        <div className={`${activeSection === 'Calendar' ? 'highlight' : ''}`}>
            <CalendarCard />
          </div>
          
          <div className={`${activeSection === 'Appointments' ? 'highlight' : ''}`}>
          <SchedulePanel />
          </div>
          <div className={`${activeSection === 'Chat' ? 'highlight' : ''}`}>
          <NotificationsPanel />
          </div>
          

          <div className={highlightNotifications ? 'highlight' : ''}>
            
          </div>

          {/* <ChatPanel /> */}
          <DonutChart />
        </div>
      </div>
    </div>
  );
}

export default App;
