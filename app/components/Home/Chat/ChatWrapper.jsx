'use client';
import React, { useState } from 'react';
import ChatEmpty from './ChatEmpty';
import ChatList from './ChatList';
import ChatWindow from './ChatWindow';

const ChatWrapper = () => {
  const [selectedChat, setSelectedChat] = useState(null);

  const dummyChats = [
    // // Uncomment to simulate no chats
    // // empty array: []
    // { id: 1, name: 'Crunch', lastMessage: 'Hey, need 5kg potatoes', unread: true },
    // { id: 2, name: 'Bite & Co.', lastMessage: 'Need order confirmation', unread: false },
  ];

  const hasChats = dummyChats.length > 0;

  if (!hasChats) {
    // 🟥 No chats at all — Show ONLY first screen
    return <ChatEmpty fullScreen />;
  }

  return (
    <div style={{ display: 'flex', flex: 1, height: '100%' }}>
      <ChatList
        chats={dummyChats}
        selectedChat={selectedChat}
        onSelectChat={setSelectedChat}
      />

      {/* 🟡 If chats exist but none selected → show empty panel */}
      {!selectedChat ? (
        <ChatEmpty />
      ) : (
        <ChatWindow chat={selectedChat} />
      )}
    </div>
  );
};

export default ChatWrapper;
