import React, { useEffect, useState } from 'react';
import './ViewFeedback.css';

const ViewFeedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/feedbacks');
        if (response.ok) {
          const data = await response.json();
          setFeedbacks(data);
        } else {
          console.error('Failed to fetch feedbacks');
        }
      } catch (error) {
        console.error('Error fetching feedbacks:', error);
      }
    };

    fetchFeedbacks();
  }, []);

  return (
    <div className="view-feedback-container">
      <h2>Feedbacks</h2>
      {feedbacks.length > 0 ? (
        <div className="feedback-list">
          {feedbacks.map((feedback) => (
            <div key={feedback.id} className="feedback-item">
              <h4>{feedback.title}</h4>
              <p>{feedback.message}</p>
              <p className="feedback-details">
                By: {feedback.user} | Date: {new Date(feedback.date).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p>No feedback available.</p>
      )}
    </div>
  );
};

export default ViewFeedback;
