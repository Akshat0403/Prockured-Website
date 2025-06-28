'use client';

import React from 'react';
import styles from './CustomerOverview.module.css';
import { ChevronLeftIcon } from 'lucide-react';

const customers = [
  {
    restaurant: 'Bite & Co.',
    labels: ['All Restaurants', 'Asian Restaurants'],
    amount: '₹ 14,375',
    date: '25-06-2024',
  },
  {
    restaurant: 'Munch',
    labels: ['Café', 'Mall Road'],
    amount: '₹ 9,375',
    date: '24-06-2024',
  },
  {
    restaurant: 'Sabali',
    labels: ['Asian Restaurants'],
    amount: '₹ 4,475',
    date: '20-06-2024',
  },
  {
    restaurant: 'Hotel Jyot',
    labels: ['Chinese Restaurants'],
    amount: '₹ 50,375',
    date: '19-06-2024',
  },
  {
    restaurant: 'Taste',
    labels: ['Asian Restaurants', 'Curry Road'],
    amount: '₹ 12,875',
    date: '19-06-2024',
  },
  {
    restaurant: 'Zoombar',
    labels: ['Asian Restaurants', 'Curry Road'],
    amount: '₹ 12,875',
    date: '19-06-2024',
  },
  {
    restaurant: 'Zaeka',
    labels: ['Asian Restaurants', 'Curry Road'],
    amount: '₹ 12,875',
    date: '19-06-2024',
  },
];

export default function CustomerOverview() {
  return (
    <div className={styles.container}>
        <div className={styles.headers}>
            <a href='/?view=setting'>
                <ChevronLeftIcon size={22} color='black' strokeWidth={3} />
            </a>
            <h2 className={styles.title}>
                Customers
            </h2>
        </div>
      <div className={styles.table}>
        <div className={`${styles.row} ${styles.header}`}>
          <div>Restaurants</div>
          <div>Label</div>
          <div>Amount</div>
          <div>Date</div>
          <div>Summary</div>
        </div>

        {customers.map((item, index) => (
          <div key={index} className={styles.row}>
            <div className={styles.restaurant}>{item.restaurant}</div>
            <div className={styles.labels}>
              {item.labels.map((label, i) => (
                <span key={i} className={styles.labelTag}>{label}</span>
              ))}
            </div>
            <div className={styles.amount}>{item.amount}</div>
            <div className={styles.date}>{item.date}</div>
            <a href='/?view=customer-detail'>
              <button className={styles.summaryButton}>View Summary</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
