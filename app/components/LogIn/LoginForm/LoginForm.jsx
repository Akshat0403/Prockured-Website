// src/components/LoginForm/LoginForm.jsx
import React from 'react';
import styles from './LoginForm.module.css';
import Image from 'next/image';

const LoginForm = () => {
  return (
    <div>

      <div className={styles.logoProckure}>
        {/* Placeholder for the logo. Replace with your actual logo image path */}
        <Image src="/images/ProckuredImage.jpg" alt="Prockure Logo" width={240} height={200} />
      </div>
      <div className={styles.loginFormContainer}>
        
        <h2 className={styles.welcomeText}>Welcome!</h2>

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
            <a href='/?view=forgot-password'>
              <button type="button" className={styles.forgotPassword}>
                Forgot Password?
              </button>
            </a>
          </div>
          <a href='/?view=create-profile'>
            <div type='submit' className={styles.loginButton}>
              Login  
            </div>
          </a>
        </form>

        <div className={styles.signUpLink}>
          Create An Account <a href="/?view=signup">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;