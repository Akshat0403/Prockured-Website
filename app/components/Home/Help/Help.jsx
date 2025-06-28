'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './Help.module.css';
import ChatSupport from '../ChatSupport/ChatSupport';
import FAQs from '../FAQs/FAQs';

export default function Help() {
  const [activeTab, setActiveTab] = useState('chat');

  return (
    <div className={styles.container}>
      {/* Left Panel */}
        <div className={styles.sidebar}>
            <h2 className={styles.headerText1}>
                Hey <span className={styles.highlight}>Frugreen</span> !
            </h2>
            <h2 className={styles.headerText2}>How can we help?</h2>

            <div className={styles.buttons}>
                <div
                    className={`${styles.buttonsDiv} ${activeTab === 'chat' ? styles.active : ''}`}
                    onClick={() => setActiveTab('chat')}
                >
                    <Image src="/images/EditProfileDetails.png" alt="Chat" width={24} height={24} />
                    <span className={styles.buttonsText}>Chat Support</span>
                </div>

                <div
                    className={`${styles.buttonsDiv} ${activeTab === 'history' ? styles.active : ''}`}
                    onClick={() => setActiveTab('history')}
                >
                    <Image src="/images/MinimumOrderValue.png" alt="History" width={24} height={24} />
                    <span className={styles.buttonsText}>Support History</span>
                </div>

                <div 
                    className={`${styles.buttonsDiv} ${activeTab === 'faq' ? styles.active : ''}`}
                    onClick={() => setActiveTab('faq')}
                >
                    <Image src="/images/TeamsAndRoles.png" alt="FAQ" width={24} height={24} />
                    <span className={styles.buttonsText}>FAQ & SOP</span>
                </div>
            </div>
        </div>

        {/* Right Content */}
        <div className={styles.mainContent}>
            {activeTab === 'chat' && <ChatSupport />}
            {activeTab === 'history' && <ChatSupport />}
            {activeTab === 'faq' && <FAQs />}
        </div>
    </div>
  );
}
