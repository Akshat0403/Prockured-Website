import React from "react";
import Header from '../SignUp/Header/Header';
import ImageGallery from '../SignUp/ImageGallery/ImageGallery';
import styles from '../SignUp/AuthPage/AuthPage.module.css'; 
import Image from 'next/image'; 
import SignupForm from "./SignUpForm/SignupForm";

const SignUp = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftPanel}>
        <Header />
        <ImageGallery />
      </div>
      <div className={styles.rightPanel}>
        <SignupForm />
      </div>
    </div>
  );
};

export default SignUp;