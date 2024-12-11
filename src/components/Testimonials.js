import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Testimonials.css'
const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get('/api/testimonials');
        setTestimonials(response.data);
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <div className="testimonials">
      <h2>What Our Attendees Say</h2>
      <div className="testimonial-cards">
        {testimonials.length === 0 ? (
          <p>No testimonials available.</p>
        ) : (
          testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <p>"{testimonial.feedback}"</p>
              <p>- {testimonial.user}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Testimonials;
