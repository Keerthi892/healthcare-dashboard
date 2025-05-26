// src/App.jsx
import React from 'react';
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
  return (
    <div className="dashboard-layout">
    <Header />
    <div className="dashboard-main">
      <Sidebar />
  
      <div className="content-area">
        {/* New wrapper to place them side by side */}
        <div className="diagram-and-cards">
          <BodyDiagram />
          <DashboardCards />
        </div>
        <ActivityChart />
        <PatientBarChart />
        <RecentHistory />
        
      </div>
  
      <div className="right-panel">
       
        <CalendarCard />
        <SchedulePanel />
        <NotificationsPanel />
        <DonutChart />
      </div>
    </div>
  </div>
  
  );
}

 export default App;
// import React from 'react';
// import './App.css';
// import BodyDiagram from './components/BodyDiagram';
// import DashboardCards from './components/DashboardCards';

// function App() {
//   return (
//     <div className="app-container">
//       {/* Sidebar */}
//       <aside className="sidebar">
//         <h2>Health<span style={{ color: '#3b82f6' }}>care.</span></h2>
//         <nav>
//           <ul>
//             <li className="active">🏠 Dashboard</li>
//             <li>📜 History</li>
//             <li>📅 Calendar</li>
//             <li>📋 Appointments</li>
//             <li>📊 Statistics</li>
//           </ul>
//           <ul className="tools">
//             <li>💬 Chat</li>
//             <li>📞 Support</li>
//           </ul>
//         </nav>
//       </aside>

//       {/* Main Area */}
//       <div className="dashboard-main">
//         <header className="topbar">
//           <input type="text" placeholder="Search..." />
//           <div className="profile-icon">🧑‍⚕️</div>
//         </header>

//         <main className="content-area">
//           <h2>Dashboard</h2>
//           <div className="main-content">
//             <div className="left-panel">
//               <BodyDiagram />
//               <DashboardCards />
//             </div>

//             <div className="right-panel">
//               <h4>October 2021</h4>
//               <div className="calendar">
//                 <p>[Calendar Component Placeholder]</p>
//               </div>
//               <div className="schedule">
//                 <h4>Upcoming Schedule</h4>
//                 <p>🦷 Dentist - 09:00 to 11:00</p>
//                 <p>🏃 Physiotherapy - 11:00 to 12:00</p>
//                 <p>📋 Health Checkup - 11:00</p>
//               </div>
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }

// export default App;
