import React from 'react';

import styles from './notification.module.css';

const Notification = ({ type, message }) => {
  return <div className={`${styles.container} ${styles[type]}`}>{message}</div>;
};

export default Notification;
