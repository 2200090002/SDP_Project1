// src/components/FeaturedWorkshopsCarousel.js
import React from 'react';
import './FeaturedWorkshopsCarousel.css'; // Include your CSS for styles

const FeaturedWorkshopsCarousel = ({ featuredWorkshops }) => {
  // Check if featuredWorkshops is undefined or not an array
  if (!featuredWorkshops || !Array.isArray(featuredWorkshops)) {
    return null; // or return a loading message or fallback UI
  }

  return (
    <div className="carousel">
      {featuredWorkshops.map((workshop) => (
        <div key={workshop.id} className="carousel-item">
          <h3>{workshop.title}</h3>
          <p>{workshop.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FeaturedWorkshopsCarousel;
