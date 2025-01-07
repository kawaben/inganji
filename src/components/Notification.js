import React, { useState } from "react";
import './styles/Notification.css';
import './styles/grobal.css';

import { useLanguage } from "./context/LanguageContext";


const NotificationPage = () => {
  const { language} = useLanguage(); // Using Language Context

  const text = {
    en: { title: "Notifications", button: "read", },
    fr: { title: "Notifications", button: "lire",},
    sw: { title: "Arifa", button: "soma", },
    kn: { title: "Kumenyesha", button: "soma", }
  
  };

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
    <div className="alerts">
      <h1>{text[language]?.title}</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {notifications.map((notification) => (
          <li
          key={notification.id}
          className={notification.isRead ? "notification read" : "notification unread"}
        >
        
            <div className="message">{notification.message}</div>
            {!notification.isRead && (
              <button
                onClick={() => markAsRead(notification.id)}
              >
                {text[language]?.button}
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationPage;
