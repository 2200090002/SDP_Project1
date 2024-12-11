import React, { useEffect, useState } from 'react';

const UserProgress = ({ userId }) => {
  const [progress, setProgress] = useState([]);

  return (
    <div>
      <h2>My Workshop Progress</h2>
      {progress.map((workshop) => (
        <div key={workshop.id}>
          <h3>{workshop.workshopTitle}</h3>
          <p>{workshop.status === 'completed' ? 'Completed' : 'In Progress'}</p>
        </div>
      ))}
    </div>
  );
};

export default UserProgress;
