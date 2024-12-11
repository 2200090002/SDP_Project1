// WorkshopCard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Ensure axios is imported here
import { Link } from 'react-router-dom';
import './WorkshopCard.css';

const WorkshopCard = ({ workshop, favorites, toggleFavorite }) => {
  // Example of fetching data using axios (if required)
  const [workshopDetails, setWorkshopDetails] = useState(null);

  useEffect(() => {
    const fetchWorkshopDetails = async () => {
      try {
        const response = await axios.get(`/api/workshops/${workshop.id}`);
        setWorkshopDetails(response.data);
      } catch (error) {
        console.error('Error fetching workshop details:', error);
      }
    };

    fetchWorkshopDetails();
  }, [workshop.id]);

  return (
    <div className="workshop-card">
      <h3>{workshop.title}</h3>
      <p>{workshop.description}</p>
      <p>{workshop.date}</p>

      <button
        onClick={() => toggleFavorite(workshop.id)}
        className={`favorite-button ${favorites.includes(workshop.id) ? 'favorited' : ''}`}
      >
        {favorites.includes(workshop.id) ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>

      <Link to={`/workshops/${workshop.id}`} className="view-details-button">
        View Details
      </Link>
    </div>
  );
};

export default WorkshopCard;
