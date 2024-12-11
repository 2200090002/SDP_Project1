import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './MyWorkshopPage.css';
import axios from 'axios';

const MyWorkshopPage = () => {
  const [workshops, setWorkshops] = useState([]);
  const [favorites, setFavorites] = useState([]); // Add favorites state
  const navigate = useNavigate();

  useEffect(() => {
    const fetchWorkshops = async () => {
      try {
        const response = await axios.get('/api/user/1/workshops'); // Replace '1' with the actual userId
        setWorkshops(response.data);
      } catch (error) {
        console.error('Error fetching workshops:', error);
      }
    };

    fetchWorkshops();
  }, []);

  const toggleFavorite = (workshopId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(workshopId)
        ? prevFavorites.filter((id) => id !== workshopId)
        : [...prevFavorites, workshopId]
    );
  };

  const handleFavoriteClick = () => {
    navigate('/favorite', { state: { favorites } }); // Pass favorites to FavoriteWorkshops page
  };

  return (
    <div className="my-workshop-page">
      <h1>My Workshop</h1>
      <div className="top-buttons">
        <button className="nav-button" onClick={handleFavoriteClick}>
          Favorite Workshops
        </button>
        <Link to="/feedback" className="nav-button">Feedback</Link>
        <Link to="/testimonials" className="nav-button">Testimonials</Link>
        <Link to="/example" className="nav-button">FAQ</Link>
      </div>
      <div className="workshop-list">
        {workshops.length > 0 ? (
          workshops.map((workshop) => (
            <div key={workshop.id} className="workshop-card">
              <h3>{workshop.title}</h3>
              <p>{workshop.description}</p>
              <p>{workshop.date}</p>
              <button
                onClick={() => toggleFavorite(workshop.id)}
                className={`favorite-button ${favorites.includes(workshop.id) ? 'favorited' : ''}`}
              >
                {favorites.includes(workshop.id) ? 'Remove from Favorites' : 'Add to Favorites'}
              </button>
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
          ))
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
};

export default MyWorkshopPage;
