// src/app/page.js
import React from 'react';
import Header from '../LogIn/Header/Header';
import ImageGallery from '../LogIn/ImageGallery/ImageGallery';
import LoginForm from '../LogIn/LoginForm/LoginForm';
import styles from '../LogIn/AuthPage/AuthPage.module.css'; // Main page container styles
import Image from 'next/image'; // For the Prockure logo on the form itself

const LogIn = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftPanel}>
        <Header />
        <ImageGallery />
      </div>
      <div className={styles.rightPanel}>
        <LoginForm />
      </div>
    </div>
  );
};

export default LogIn;