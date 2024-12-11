import React, { useState } from 'react';
import axios from 'axios';
import './FeedbackForm.css'; // Add a separate CSS file for styling

const FeedbackForm = ({ workshopId }) => {
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(0);
  const [category, setCategory] = useState('General');
  const [message, setMessage] = useState(''); // For success or error messages
  const [error, setError] = useState(''); // For validation errors

  const handleFeedbackSubmit = async (e) => {
    e.preventDefault();

    // Validation: Ensure feedback and rating are provided
    if (!feedback.trim()) {
      setError('Feedback cannot be empty.');
      return;
    }
    if (rating === 0) {
      setError('Please select a rating.');
      return;
    }

    const feedbackData = {
      text: feedback,
      rating,
      category,
      workshopId,
    };

    try {
      await axios.post(`http://localhost:8082/api/workshops/${workshopId}/feedback`, feedbackData);
      setMessage('Feedback submitted successfully!');
      setFeedback(''); // Clear feedback input after submission
      setRating(0); // Reset rating
      setCategory('General'); // Reset category
      setError(''); // Clear error
    } catch (error) {
      setMessage('Failed to submit feedback. Please try again.');
    }
  };

  return (
    <div className="feedback-form-container">
      <h2>Provide Your Feedback</h2>
      {message && <p className="success-message">{message}</p>}
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleFeedbackSubmit}>
        <div className="form-group">
          <label>Feedback Category:</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="General">General</option>
            <option value="Suggestion">Suggestion</option>
            <option value="Complaint">Complaint</option>
            <option value="Praise">Praise</option>
          </select>
        </div>
        <div className="form-group">
          <label>Your Feedback:</label>
          <textarea
            placeholder="Share your thoughts about the workshop..."
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Rating:</label>
          <div className="star-rating">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`star ${star <= rating ? 'selected' : ''}`}
                onClick={() => setRating(star)}
              >
                ★
              </span>
            ))}
          </div>
        </div>
        <button type="submit" className="submit-button">
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;
