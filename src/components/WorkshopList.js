import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './WorkshopList.css';

const WorkshopList = ({ workshops }) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter workshops based on search term
  const filteredWorkshops = workshops.filter((workshop) =>
    workshop.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    workshop.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="workshop-list-container">
      <input
        type="text"
        placeholder="Search workshops..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />

      <div className="workshop-list">
        {filteredWorkshops.length > 0 ? (
          filteredWorkshops.map((workshop) => (
            <div key={workshop.id} className="workshop-card">
              <h3 className="workshop-title">{workshop.title}</h3>
              <p className="workshop-description">{workshop.description}</p>
              <div className="workshop-date-location">
                <span>{workshop.date}</span> | <span>{workshop.location}</span>
              </div>

              {/* Link to Video Page */}
              <Link to={`/video-page/${workshop.id}`} className="view-details-button">
                View Details
              </Link>
            </div>
          ))
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
};

export default WorkshopList;
