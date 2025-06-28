// src/components/LoginForm/LoginForm.jsx
import React from 'react';
import styles from './ForgotPasswordForm.module.css';
import Image from 'next/image';

const ForgotPasswordForm = () => {
  return (
    <div>

      <div className={styles.logoProckure}>
        {/* Placeholder for the logo. Replace with your actual logo image path */}
        <Image src="/images/ProckuredImage.jpg" alt="Prockure Logo" width={240} height={200} />
      </div>
      <div className={styles.loginFormContainer}>
        
        <h2 className={styles.welcomeText}>Forgot Password ?</h2>

        <form className={styles.form}>
          <div className={styles.inputGroup}>
            <input
              type="text"
              placeholder="Phone Number"
              className={styles.inputField}
            />
            <h6 className={styles.sampleText}>*We will send you a message to set or reset your new password</h6>
          </div>
          <button type="submit" className={styles.loginButton}>
            Submit
          </button>
        </form>

        <div className={styles.signUpLink}>
          Create An Account <a href="/?view=signup">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;