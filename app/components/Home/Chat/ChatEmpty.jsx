import React from 'react';
import Image from 'next/image';

const ChatEmpty = ({ fullScreen }) => {
  const styles = {
    container: {
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: fullScreen ? '200px' : '16px',
      borderRadius: '12px',
      border: fullScreen ? 'none' : '2px solid #b5e61d',
    },
    contentWrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '16px',
    },
    image: {
      maxWidth: '300px',
    },
    text: {
      fontSize: '18px',
      color: '#555',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.contentWrapper}>
        <Image
          src="/images/VendorHomePage.png"
          alt="No Chat"
          style={styles.image}
          width={300}
          height={300}
        />
        <h3 style={styles.text}>No Chats Available</h3>
      </div>
    </div>
  );
};

export default ChatEmpty;
