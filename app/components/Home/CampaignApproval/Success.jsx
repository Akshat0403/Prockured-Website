// pages/success.js
import styles from './Success.module.css';
import Image from 'next/image';

export default function Success() {


    return (
        <div className={styles.container}>
            <div className={styles.iconWrapper}>
                <Image
                src="/images/ApprovalPending.png" // Replace with your own icon if needed
                alt="Success"
                width={60}
                height={60}
                />
            </div>
            <h2 className={styles.title}>Successfully Sent</h2>
            <p className={styles.subtitle}>Wait for some time and see the magic happen !</p>
            <a className={styles.button} href='/?view=chat'>
                Check Insights
            </a>
        </div>
    );
}
