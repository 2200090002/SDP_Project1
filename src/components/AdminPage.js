import React from 'react';
import { Link } from 'react-router-dom';
import './AdminPage.css';

const AdminPage = () => {
  return (
    <div className="admin-page-container">
      <h2>Admin Dashboard</h2>
      <div className="admin-actions">
        <Link to="/admin/manage-workshops">
          <button className="admin-button">Manage Workshops</button>
        </Link>
        <Link to="/admin/manage-users">
          <button className="admin-button">Manage Users</button>
        </Link>
        <Link to="/admin/view-feedback">
          <button className="admin-button">View Feedback</button>
        </Link>
      </div>
    </div>
  );
};

export default AdminPage;
