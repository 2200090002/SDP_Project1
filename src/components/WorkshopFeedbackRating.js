import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WorkshopFeedbackRating = ({ workshopId }) => {
  const [feedbackList, setFeedbackList] = useState([]);
  const [newFeedback, setNewFeedback] = useState('');
  const [rating, setRating] = useState(5);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch feedback and rating from API
    const fetchFeedback = async () => {
      try {
        const response = await axios.get(`http://localhost:8082/api/workshops/${workshopId}/feedback`);
        setFeedbackList(response.data); // Assuming response.data is an array of feedback
      } catch (err) {
        setError('Failed to load feedback.');
      } finally {
        setLoading(false);
      }
    };

    if (workshopId) {
      fetchFeedback();
    }
  }, [workshopId]);

  const handleFeedbackSubmit = async () => {
    // API call to submit feedback
    if (newFeedback.trim() === '') {
      setError('Feedback cannot be empty.');
      return;
    }

    const feedbackData = {
      text: newFeedback,
      rating: rating,
    };

    try {
      await axios.post(`http://localhost:8082/api/workshops/${workshopId}/feedback`, feedbackData);
      setNewFeedback(''); // Clear input after submission
      setRating(5); // Reset rating to default value
      setError(''); // Clear any previous errors
      // Optionally refetch feedback list to include the newly added feedback
      const response = await axios.get(`http://localhost:8082/api/workshops/${workshopId}/feedback`);
      setFeedbackList(response.data);
    } catch (err) {
      setError('Failed to submit feedback.');
    }
  };

  if (loading) return <p>Loading feedback...</p>; // Loading state
  if (error) return <p>{error}</p>; // Error state

  return (
    <div>
      <h2>Feedback & Ratings</h2>
      {feedbackList.length > 0 ? (
        feedbackList.map((feedback, index) => (
          <div key={index}>
            <p>{feedback.text}</p>
            <p>Rating: {feedback.rating}/5</p>
          </div>
        ))
      ) : (
        <p>No feedback yet.</p>
      )}
      <textarea
        placeholder="Add your feedback"
        value={newFeedback}
        onChange={(e) => setNewFeedback(e.target.value)}
      />
      <select value={rating} onChange={(e) => setRating(Number(e.target.value))}>
        {[1, 2, 3, 4, 5].map(r => (
          <option key={r} value={r}>
            {r}
          </option>
        ))}
      </select>
      <button onClick={handleFeedbackSubmit}>Submit Feedback</button>
    </div>
  );
};

export default WorkshopFeedbackRating;
