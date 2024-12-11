import React from 'react';
import { useLocation } from 'react-router-dom';
import './FavoriteWorkshops.css';

const FavoriteWorkshops = () => {
  const location = useLocation();
  const favorites = location.state?.favorites || []; // Get favorites from state

  return (
    <div className="favorite-workshops">
      <h2>My Favorite Workshops</h2>
      <p>You have {favorites.length} favorite workshops.</p>
      <div className="workshop-list">
        {favorites.length === 0 ? (
          <p>No favorite workshops yet.</p>
        ) : (
          favorites.map((workshopId) => {
            return (
              <div key={workshopId} className="workshop-card animate__animated animate__fadeIn">
                <h3>{workshopId}</h3> {/* This should ideally display workshop data, but for simplicity, showing the id */}
                <button className="remove-favorite-button">Remove from Favorites</button>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default FavoriteWorkshops;
