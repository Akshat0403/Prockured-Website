// src/components/LoginForm/LoginForm.jsx
import React from 'react';
import styles from './SignupForm.module.css';
import Image from 'next/image';

const SignupForm = () => {
  return (
    <div>

      <div className={styles.logoProckure}>
        {/* Placeholder for the logo. Replace with your actual logo image path */}
        <Image src="/images/ProckuredImage.jpg" alt="Prockure Logo" width={240} height={200} />
      </div>
      <div className={styles.loginFormContainer}>
        
        <h2 className={styles.welcomeText}>Create An Account.</h2>

        <form className={styles.form}>
          <div className={styles.inputGroup}>
            <input
              type="text"
              placeholder="Phone Number"
              className={styles.inputField}
            />
          </div>
          <div className={styles.inputGroup}>
            <input
              type="password"
              placeholder="Password"
              className={styles.inputField}
            />
          </div>
          <div className={styles.inputGroup}>
            <input
              type="password"
              placeholder="Confirm Password"
              className={styles.inputField}
            />
          </div>
          <a href='/?view=create-profile'>
            <button type="submit" className={styles.loginButton}>
              Sign Up
            </button>
          </a>
        </form>

        <div className={styles.signUpLink}>
          Already Have a Account <a href="/">Log In</a>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;