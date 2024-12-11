import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate
import './VideoPage.css';

const VideoPage = ({ workshops }) => {
  const { id } = useParams(); // Get the ID from the URL
  const [workshop, setWorkshop] = useState(null);
  const navigate = useNavigate(); // Hook to navigate to another page

  // Find the workshop by ID
  useEffect(() => {
    const foundWorkshop = workshops.find(workshop => workshop.id === parseInt(id));
    setWorkshop(foundWorkshop);
  }, [id, workshops]);

  if (!workshop) {
    return <p>Workshop not found.</p>;
  }

  // Function to navigate back to the workshop list
  const handleGoBack = () => {
    navigate('/workshop-list'); // Navigate to the workshop list page
    window.scrollTo(0, 0); // Scroll to the top of the page when navigating
  };

  return (
    <div className="video-page-container">
      <h2>{workshop.title}</h2>
      <div className="video-container">
        <video controls src={workshop.videoUrl} className="workshop-video">
          Your browser does not support the video tag.
        </video>
      </div>
      {/* Text before the video */}
      <p className="video-description">
        Watch this video to learn more about the {workshop.title}. It provides an overview of the key concepts and techniques discussed in the workshop.
      </p>
      {/* Button to go back to the WorkshopList */}
      <button onClick={handleGoBack} className="back-button">
        Back to Workshop List
      </button>
    </div>
  );
};

export default VideoPage;
