import React, { useState } from "react";

const NotificationPage = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, message: "You have a new message", isRead: false },
    { id: 2, message: "Your order has been shipped", isRead: false },
    { id: 3, message: "Your password was updated", isRead: true },
  ]);

  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((notification) =>
        notification.id === id ? { ...notification, isRead: true } : notification
      )
    );
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Notifications</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {notifications.map((notification) => (
          <li
            key={notification.id}
            style={{
              padding: "10px",
              marginBottom: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              backgroundColor: notification.isRead ? "#f9f9f9" : "#e6f7ff",
            }}
          >
            <div>{notification.message}</div>
            {!notification.isRead && (
              <button
                onClick={() => markAsRead(notification.id)}
                style={{
                  marginTop: "5px",
                  padding: "5px 10px",
                  backgroundColor: "#007bff",
                  color: "#fff",
                  border: "none",
                  borderRadius: "3px",
                  cursor: "pointer",
                }}
              >
                Mark as Read
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationPage;
