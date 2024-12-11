import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Notifications.css';

const Notifications = ({ username }) => {
  const [notifications, setNotifications] = useState([]);
  const [workshopNotifications, setWorkshopNotifications] = useState([]);
  const [otherNotifications, setOtherNotifications] = useState([]);
  const [totalNotifications, setTotalNotifications] = useState(0);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        // Fetch general notifications
        const generalResponse = await axios.get(`/api/notifications/${username}`);
        setNotifications(generalResponse.data);

        // Fetch workshop notifications
        const workshopResponse = await axios.get(`/api/notifications/workshops/${username}`);
        setWorkshopNotifications(workshopResponse.data);

        // Fetch other notifications
        const otherResponse = await axios.get(`/api/notifications/other/${username}`);
        setOtherNotifications(otherResponse.data);

        // Calculate total notifications
        const totalCount =
          generalResponse.data.length +
          workshopResponse.data.length +
          otherResponse.data.length;
        setTotalNotifications(totalCount);
      } catch (error) {
        console.error("Error fetching notifications:", error);
      }
    };

    fetchNotifications();
  }, [username]);

  return (
    <div className="notification-container">
      <h2>Notifications</h2>
      <p>Total Notifications: {totalNotifications}</p>

      <h3>General Notifications</h3>
      {notifications.length > 0 ? (
        notifications.map((notification, index) => (
          <div key={index} className="notification">
            <p>{notification.message}</p>
          </div>
        ))
      ) : (
        <p>No general notifications at this time.</p>
      )}

      <h3>Workshop Notifications</h3>
      {workshopNotifications.length > 0 ? (
        workshopNotifications.map((notification, index) => (
          <div key={index} className="notification workshop">
            <p>{notification.message}</p>
          </div>
        ))
      ) : (
        <p>No workshop notifications at this time.</p>
      )}

      <h3>Other Notifications</h3>
      {otherNotifications.length > 0 ? (
        otherNotifications.map((notification, index) => (
          <div key={index} className="notification other">
            <p>{notification.message}</p>
          </div>
        ))
      ) : (
        <p>No other notifications at this time.</p>
      )}
    </div>
  );
};

export default Notifications;
