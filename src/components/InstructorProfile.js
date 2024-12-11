import React, { useEffect, useState } from 'react';
import axios from 'axios';

const InstructorProfile = ({ instructorId }) => {
  const [instructor, setInstructor] = useState(null);

  useEffect(() => {
    const fetchInstructor = async () => {
      try {
        const response = await axios.get(`/api/instructors/${instructorId}`);
        setInstructor(response.data);
      } catch (error) {
        console.error("Error fetching instructor details:", error);
      }
    };

    fetchInstructor();
  }, [instructorId]);

  return instructor ? (
    <div>
      <h2>{instructor.name}</h2>
      <p>{instructor.bio}</p>
      <h3>Workshops by {instructor.name}</h3>
      <ul>
        {instructor.workshops.map(workshop => (
          <li key={workshop.id}>{workshop.title}</li>
        ))}
      </ul>
    </div>
  ) : (
    <p>Loading instructor details...</p>
  );
};

export default InstructorProfile;
