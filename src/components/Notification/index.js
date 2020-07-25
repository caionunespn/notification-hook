import React, { createContext, useState, useEffect, useContext } from "react";
import {
  NotificationContainer,
  Notification,
  NotificationHeader,
} from "./styles";

const NotificationContext = createContext({
  createNotification: null,
});

function NotificationItem({ notification, removeNotification }) {
  const [fade, setFade] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      fadeIn();
    }, 200);

    setTimeout(() => {
      fadeOut();
    }, 3200);
  }, []);

  function fadeIn() {
    return setFade(1);
  }

  function fadeOut() {
    return setFade(0);
  }

  return (
    <Notification fade={fade}>
      <NotificationHeader>
        <section>
          <img src={notification.header.image} alt="logo" />
          <strong>{notification.header.title}</strong>
        </section>
        <p>{notification.header.date}</p>
      </NotificationHeader>
      <strong>{notification.title}</strong>
      <p>{notification.description}</p>
    </Notification>
  );
}

export function NotificationWrapper({ children }) {
  const [notifications, setNotifications] = useState([]);

  function createNotification(notification) {
    return setNotifications([
      ...notifications,
      { ...notification, id: notifications.length + 1 },
    ]);
  }

  function removeNotification(id) {
    return setNotifications(
      notifications.filter((notification) => notification.id !== id)
    );
  }

  return (
    <NotificationContext.Provider
      value={{
        createNotification,
      }}
    >
      <NotificationContainer>
        {notifications.map((notification) => (
          <NotificationItem
            notification={notification}
            removeNotification={removeNotification}
          />
        ))}
      </NotificationContainer>
      {children}
    </NotificationContext.Provider>
  );
}

export function useNotification(notification) {
  const context = useContext(NotificationContext);

  return context;
}
