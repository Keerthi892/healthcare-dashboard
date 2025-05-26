import React from 'react';
import './BodyDiagram.css';
import HumanBody from '../assets/human-body.jpg'; // Ensure correct path

function BodyDiagram() {
  return (
    <div className="body-diagram">
        
        <h3>Dashboard</h3>
      
      <div className="label heart-label">❤️ Healthly Heart</div>
      <img src={HumanBody} alt="Human Body Diagram" className="body-image" />
      <div className="label leg-label">🦿 Healthly Leg</div>
    </div>
  );
}

export default BodyDiagram;
