// src/app/page.js
import React from 'react';
import SingleImageDisplay from '../components/SingleImageDisplay/SingleImageDisplay';
import LogIn from '../components/LogIn/LogIn'; // Make sure this path is correct based on your renaming
import styles from './AuthPage.module.css'; // Importing styles for the main page layout

const HomePage = () => {
  // Path to your single collection image within the public directory
  const collectionImageUrl = '/images/collection-image.jpg';

  return (
    <div className={styles.container}>
      {/* Left Panel: Displays the single image */}
      <div className={styles.leftPanel}>
        <SingleImageDisplay imageUrl={collectionImageUrl} altText="Collection of Fresh Produce" />
      </div>

      {/* Right Panel: Contains the login form/component */}
      <div className={styles.rightPanel}>
        <LogIn /> {/* This renders your simplified LogIn component */}
      </div>
    </div>
  );
};

export default HomePage;