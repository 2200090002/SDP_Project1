import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Schedule = () => {
  const [workshops, setWorkshops] = useState([]);

  useEffect(() => {
    const fetchWorkshops = async () => {
      try {
        const response = await axios.get('/api/workshops');
        setWorkshops(response.data); // Set the workshop data from backend
      } catch (error) {
        console.error('Error fetching workshops:', error);
      }
    };

    fetchWorkshops();
  }, []);

  return (
    <div>
      <h2>Workshop Schedule</h2>
      <ul>
        {workshops.map((workshop) => (
          <li key={workshop.id}>
            <strong>{workshop.title}</strong> - {new Date(workshop.date).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Schedule;
