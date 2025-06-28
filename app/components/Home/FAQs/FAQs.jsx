'use client';
import React, { useState } from 'react';
import styles from './FAQs.module.css';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqData = [
  {
    category: 'Shipping',
    questions: [
      {
        question: 'What is your shipping policy?',
        answer: `Our shipping policy ensures timely and secure delivery. Orders are processed within [X] business days, with delivery taking [X–Y] days based on location. Shipping charges vary, and tracking details will be provided once shipped. International shipping is available with applicable customs duties. For more details, visit our [Shipping Policy Page] or contact support.`,
      },
      {
        question: 'What is the status of my order?',
        answer: `You can track your order in your account under 'My Orders'.`,
      },
      {
        question: 'Can I change my order?',
        answer: `Once the order is processed, it cannot be changed. Contact support for assistance.`,
      },
    ],
  },
  {
    category: 'Payment',
    questions: [
      {
        question: 'What payment methods do you use?',
        answer: `We accept credit cards, debit cards, UPI, net banking, and wallet payments.`,
      },
      {
        question: 'What are the refund policies you have?',
        answer: `Refunds are processed within 7–10 business days for eligible returns. Please refer to our refund policy.`,
      },
    ],
  },
];

export default function FAQs() {
  const [openIndexes, setOpenIndexes] = useState({});

  const toggleQuestion = (category, index) => {
    const key = `${category}-${index}`;
    setOpenIndexes((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className={styles.container}>
      <div className={styles.pageHeader}>
        <h2>FAQs</h2>
        <span className={styles.subText}>Prockure</span>
      </div>

      {faqData.map((section, i) => (
        <div className={styles.card} key={i}>
          <h3 className={styles.category}>{section.category}</h3>

          {section.questions.map((q, idx) => {
            const key = `${section.category}-${idx}`;
            const isOpen = openIndexes[key];

            return (
              <div className={styles.qBlock} key={idx}>
                <div
                  className={styles.questionRow}
                  onClick={() => toggleQuestion(section.category, idx)}
                >
                  <p className={styles.question}>{q.question}</p>
                  {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </div>

                {isOpen && <p className={styles.answer}>{q.answer}</p>}

                <hr className={styles.divider} />
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
