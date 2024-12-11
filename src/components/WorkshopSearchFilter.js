import React, { useState } from 'react';
import axios from 'axios';

const WorkshopSearchFilter = ({ setWorkshops }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async (event) => {
    setSearchTerm(event.target.value);
    
    try {
      // Make an API call to search workshops based on the searchTerm
      const response = await axios.get(`http://localhost:8082/api/workshops/search?term=${event.target.value}`);
      setWorkshops(response.data); // Update the state with filtered workshops
    } catch (error) {
      console.error("Error fetching filtered workshops:", error);
    }
  };

  return (
    <div className="workshop-search-filter">
      <input
        type="text"
        value={searchTerm}
        placeholder="Search workshops..."
        onChange={handleSearch}
      />
    </div>
  );
};

export default WorkshopSearchFilter;
