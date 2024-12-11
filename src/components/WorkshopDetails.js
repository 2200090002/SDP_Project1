import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './WorkshopDetails.css';

const WorkshopDetails = ({ workshops }) => {
  const { id } = useParams();  // Get workshop ID from the URL
  const [workshop, setWorkshop] = useState(null);

  // Find the workshop by ID
  useEffect(() => {
    const foundWorkshop = workshops.find(workshop => workshop.id === parseInt(id));
    setWorkshop(foundWorkshop);
  }, [id, workshops]);

  if (!workshop) {
    return <p>Workshop not found.</p>;
  }

  return (
    <div className="workshop-details-container">
      <h2>{workshop.title}</h2>
      <div className="workshop-video">
        <div className="video-container">
          <video controls src={workshop.videoUrl} className="workshop-video-content">
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <p>{workshop.description}</p>

      <div className="workshop-image">
        <img src={workshop.imageUrl} alt={workshop.title} />
      </div>

      <div className="workshop-date-location">
        <span>{workshop.date}</span> | <span>{workshop.location}</span>
      </div>
    </div>
  );
};

export default WorkshopDetails;
