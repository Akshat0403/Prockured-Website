// src/app/page.js
import React from 'react';
import Header from '../ForgotPassword/Header/Header';
import ImageGallery from '../ForgotPassword/ImageGallery/ImageGallery';
import ForgotPasswordForm from './ForgotPassword/ForgotPasswordForm';
import styles from '../ForgotPassword/AuthPage/AuthPage.module.css'; // Main page container styles
import Image from 'next/image'; // For the Prockure logo on the form itself

const ForgotPassword = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftPanel}>
        <Header />
        <ImageGallery />
      </div>
      <div className={styles.rightPanel}>
        <ForgotPasswordForm />
      </div>
    </div>
  );
};

export default ForgotPassword;