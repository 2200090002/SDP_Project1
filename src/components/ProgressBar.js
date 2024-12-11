import React from 'react';
import './ProgressBar.css';

const ProgressBar = ({ progress }) => (
  <div className="progress-bar">
    <div
      className="progress"
      style={{
        width: `${progress}%`,
        backgroundColor: progress >= 75 ? '#4caf50' : progress >= 50 ? '#ffeb3b' : '#f44336',
      }}
    >
      {progress}%
    </div>
  </div>
);

export default ProgressBar;
