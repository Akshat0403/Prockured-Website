'use client';
import React, { useState, useEffect, useRef } from 'react';
import styles from './ChatSupport.module.css';
import { Send } from 'lucide-react';

const defaultMessages = [
  {
    from: 'bot',
    text: 'Hello! Welcome to Prockured Support. How can I help you today?',
  },
];

export default function ChatSupport() {
  const [messages, setMessages] = useState(defaultMessages);
  const [input, setInput] = useState('');
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { from: 'user', text: input };
    const botReply = getBotReply(input);

    setMessages((prev) => [...prev, userMessage, botReply]);
    setInput('');
  };

  const getBotReply = (text) => {
    const lowered = text.toLowerCase();

    if (lowered.includes('add') && lowered.includes('product')) {
      return {
        from: 'bot',
        text: 'Please go to your Catalogue and click on "Add". It will provide you an option to add products.',
      };
    }

    if (lowered.includes('catalogue') || lowered.includes('catalog')) {
      return {
        from: 'bot',
        text: 'You can find the catalogue under the left-side menu in your dashboard.',
      };
    }

    if (lowered.includes('thank')) {
      return {
        from: 'bot',
        text: 'You’re most welcome! Let me know if you need anything else.',
      };
    }

    return {
      from: 'bot',
      text: 'I’m sorry, I didn’t understand that. Can you please rephrase your question?',
    };
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>Chat Support</div>

      <div className={styles.chatWindow}>
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={msg.from === 'user' ? styles.userMsg : styles.botMsg}
          >
            <div className={styles.bubble}>{msg.text}</div>
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>

      <div className={styles.inputArea}>
        <input
          type="text"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleSend}>
          <Send size={20} />
        </button>
      </div>
    </div>
  );
}
