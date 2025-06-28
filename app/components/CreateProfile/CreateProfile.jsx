import React from "react";
import Header from '../CreateProfile/Header/Header';
import ImageGallery from '../CreateProfile/ImageGallery/ImageGallery';
import styles from '../CreateProfile/AuthPage/AuthPage.module.css'; 
import Image from 'next/image'; 
import CreateProfileForm from "./CreateProfileForm/CreateProfileForm";

const CreateProfile = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftPanel}>
        <Header />
        <ImageGallery />
      </div>
      <div className={styles.rightPanel}>
        <CreateProfileForm />
      </div>
    </div>
  );
};

export default CreateProfile;