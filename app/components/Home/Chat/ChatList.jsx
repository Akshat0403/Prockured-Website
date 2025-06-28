import React from 'react';
import styles from './Chat.module.css';

const ChatList = ({ chats, onSelectChat, selectedChat }) => {
  return (
    <div className={styles.chatList}>
      <h3 className={styles.chatTitle}>All Chats</h3>
      <input className={styles.searchInput} placeholder="Search Products, Vendors…" />

      {chats.map((chat) => (
        <div
          key={chat.id}
          className={`${styles.chatItem} ${selectedChat?.id === chat.id ? styles.active : ''}`}
          onClick={() => onSelectChat(chat)}
        >
          <div className={styles.avatar}>{chat.name[0]}</div>
          <div className={styles.chatInfo}>
            <div className={styles.chatName}>{chat.name}</div>
            <div className={styles.lastMessage}>{chat.lastMessage}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatList;
