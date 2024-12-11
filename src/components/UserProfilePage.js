import React, { useState } from 'react';
import './UserProfilePage.css';

const UserProfilePage = () => {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    phone: '',
    bio: '',
    profilePicture: null,
  });

  const handleUpdate = () => {
    alert('Profile updated successfully!');
    console.log('Updated Profile Data:', profile);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setProfile({ ...profile, profilePicture: file });
    console.log('Selected File:', file);
  };

  return (
    <div className="user-profile">
      <h2>User Profile</h2>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={profile.name}
          onChange={(e) => setProfile({ ...profile, name: e.target.value })}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={profile.email}
          onChange={(e) => setProfile({ ...profile, email: e.target.value })}
        />
      </div>
      <div>
        <label>Phone:</label>
        <input
          type="tel"
          value={profile.phone}
          onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
        />
      </div>
      <div>
        <label>Bio:</label>
        <textarea
          value={profile.bio}
          onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
        />
      </div>
      <div>
        <label>Profile Picture:</label>
        <input type="file" onChange={handleFileChange} />
        {profile.profilePicture && (
          <div>
            <p>Selected File: {profile.profilePicture.name}</p>
          </div>
        )}
      </div>
      <button onClick={handleUpdate}>Update Profile</button>
    </div>
  );
};

export default UserProfilePage;
