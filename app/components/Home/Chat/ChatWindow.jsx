import React from 'react';
import styles from './Chat.module.css';

const ChatWindow = ({ chat }) => {
  return (
    <div className={styles.chatWindow}>
      <div className={styles.chatHeader}>
        <div>{chat.name}</div>
        <button className={styles.greenBtn}>🟢</button>
      </div>

      <div className={styles.chatMessages}>
        <div className={styles.messageBubble + ' ' + styles.messageLeft}>
          Hello! We want to place an order before confirming the rates.
        </div>
        <div className={styles.messageBubble + ' ' + styles.messageRight}>
          Good meet!
        </div>
      </div>

      <div className={styles.orderCard}>
        <strong>Order</strong>
        <p>Item: Tomato – 10kg</p>
        <button className={styles.viewBtn}>View Details</button>
      </div>

      <div className={styles.chatInput}>
        <input placeholder="Type a message..." />
        <button>➤</button>
      </div>
    </div>
  );
};

export default ChatWindow;
