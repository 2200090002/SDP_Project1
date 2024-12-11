import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './PlatformPage.css';

const PlatformPage = () => {
  const [workshops, setWorkshops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  return (
    <div className="platform-page">
      <h1>Platform Overview</h1>
      
      {/* Navigation Buttons */}
      <div className="top-buttons">
        <Link to="/workshops" className="nav-button">Workshop List</Link>
        <Link to="/calendar" className="nav-button">Workshop Calendar</Link>
        <Link to="/notifications" className="nav-button">Notifications</Link>
        <Link to="/myworkshop" className="nav-button">My Workshop</Link>
      </div>

      {/* Display fetched workshops */}
      <div className="workshop-list">
        <ul>
          {workshops.map((workshop) => (
            <li key={workshop.id}>
              <h3>{workshop.title}</h3>
              <p>{workshop.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PlatformPage;
