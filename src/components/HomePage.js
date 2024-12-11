import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from './Footer'; // Importing Footer component
import './HomePage.css';

const HomePage = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserDetails = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        return;
      }

      try {
        const response = await fetch('http://localhost:8085/api/users/me', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch user details');
        }

        const userData = await response.json();
        setUser(userData);
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    fetchUserDetails();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear token
    setUser(null);
    navigate('/'); // Redirect to homepage or login
  };

  return (
    <div className="home-page">
      <div className="corner-buttons">
        {user ? (
          <>
            <span className="welcome-message">Welcome, {user.name}</span>
            <button onClick={handleLogout} className="nav-button corner">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="nav-button corner">Login</Link>
            <Link to="/signup" className="nav-button corner">Sign Up</Link>
          </>
        )}
        <Link to="/admin" className="nav-button corner">Admin Page</Link>
      </div>
      <hr className="divider" />
      <h1>{user ? `Welcome back, ${user.name}` : 'Welcome to the Online Workshops Platform'}</h1>
      <div className="top-buttons">
        <Link to="/platform" className="nav-button">Platform Overview</Link>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
