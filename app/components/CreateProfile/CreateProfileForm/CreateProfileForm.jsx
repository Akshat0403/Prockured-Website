// src/components/CreateProfileForm/CreateProfileForm.jsx
'use client'; // This component will handle state and user interaction

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './CreateProfileForm.module.css';

const CreateProfileForm = () => {
  const [name, setName] = useState(''); 
  const [businessName, setBusinessName] = useState(''); 
  const [email, setEmail] = useState(''); 
  const [city, setCity] = useState(''); 
  const [pinCode, setPinCode] = useState('');
  const [state, setState] = useState(''); 
  const [country, setCountry] = useState(''); 

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Create Profile Data:', {
      name,
      businessName,
      email,
      city,
      pinCode,
      state,
      country,
    });
    alert('Profile Created! (Check console for data)');
  };

  return (
    <div className={styles.createProfileFormContainer}>
      <div className={styles.headerSection}>
        <h2 className={styles.title}>Create <br></br> Profile</h2>
        <div className={styles.logoAndCheckmark}>
          <Image src="/images/VendorProfileImage.png" alt="DM Logo" width={80} height={80} className={styles.dmLogo} />
        </div>
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        {/* Name Input */}
        <div className={styles.inputGroup}>
          <label htmlFor="name" className={styles.inputLabel}>Name *</label>
          <input
            type="text"
            id="name"
            value={name}
            placeholder='Enter Your Name'
            onChange={(e) => setName(e.target.value)}
            className={styles.inputField}
            required
          />
        </div>

        {/* Business Name Input */}
        <div className={styles.inputGroup}>
          <label htmlFor="businessName" className={styles.inputLabel}>Business Name *</label>
          <input
            type="text"
            id="businessName"
            value={businessName}
            placeholder='Enter Your Business Name'
            onChange={(e) => setBusinessName(e.target.value)}
            className={styles.inputField}
            required
          />
        </div>

        {/* Email Address Input */}
        <div className={styles.inputGroup}>
          <label htmlFor="email" className={styles.inputLabel}>Email address *</label>
          <input
            type="email"
            id="email"
            placeholder='Enter Your Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.inputField}
            required
          />
        </div>

        {/* City Input */}
        <div className={styles.inputGroup}>
          <label htmlFor="city" className={styles.inputLabel}>City *</label>
          <input
            type="text"
            id="city"
            placeholder='Enter Your City'
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className={styles.inputField}
            required
          />
        </div>

        {/* Pin Code Input */}
        <div className={styles.inputGroup}>
          <label htmlFor="pinCode" className={styles.inputLabel}>Pin Code *</label>
          <input
            type="text"
            id="pinCode"
            placeholder='Enter Your Pincode'
            value={pinCode}
            onChange={(e) => setPinCode(e.target.value)}
            className={styles.inputField}
            required
          />
        </div>

        {/* State Input */}
        <div className={styles.inputGroup}>
          <label htmlFor="state" className={styles.inputLabel}>State *</label>
          <input
            type="text"
            id="state"
            placeholder='Enter Your State'
            value={state}
            onChange={(e) => setState(e.target.value)}
            className={styles.inputField}
            required
          />
        </div>

        {/* Country Input */}
        <div className={styles.inputGroup}>
          <label htmlFor="country" className={styles.inputLabel}>Country *</label>
          <input
            type="text"
            id="country"
            placeholder='Enter Your Country'
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className={styles.inputField}
            required
          />
        </div>

        {/* Sign Up Button */}
        <a href = '/?view=chat' className={styles.signUpButton}>  
            Sign Up
        </a>
      </form>
    </div>
  );
};

export default CreateProfileForm;