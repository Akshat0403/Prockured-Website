'use client';

import React from 'react';
import styles from './CustomerDetail.module.css';
import { ChevronLeft } from 'lucide-react';

const summaryData = {
  name: 'Bite & Co.',
  contact: 'Mr. Karan Rao',
  phone: '+91 9876543210',
  city: 'Jaipur',
  date: '24 June 2024',
  total: '₹ 14,375',
  pastOrders: [
    { date: '16-06-2024', item: 'Carrot', quantity: 45, value: '₹8,375' },
    { date: '08-06-2024', item: 'Tomato', quantity: 15, value: '₹7,375' },
    { date: '06-06-2024', item: 'Potato', quantity: 45, value: '₹10,542' },
    { date: '28-05-2024', item: 'Tomato', quantity: 15, value: '₹7,375' },
    { date: '21-05-2024', item: 'Garlic', quantity: 35, value: '₹13,254' },
    { date: '15-05-2024', item: 'Ginger', quantity: 14, value: '₹9,541' },
    { date: '09-05-2024', item: 'Onion', quantity: 25, value: '₹5,544' },
    { date: '01-05-2024', item: 'Garlic', quantity: 21, value: '₹14,754' },
  ],
};

export default function CustomerDetail() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <a href='/?view=customer'>
          <ChevronLeft className={styles.backIcon} />
        </a>
        <h2 className={styles.title}>{summaryData.name}</h2>
      </div>

      <div className={styles.infoSection}>
        <div className={styles.infoBlock}>
          <strong>{summaryData.contact}</strong>
          <p>{summaryData.phone}</p>
        </div>
        <div className={styles.infoBlock}>
          <strong>{summaryData.city}</strong>
          <p>{summaryData.date}</p>
        </div>
        <div className={styles.infoBlock}>
          <strong className={styles.dueLabel}>Due Amount *</strong>
          <p className={styles.totalAmount}>Total <span>{summaryData.total}</span></p>
        </div>
      </div>

      <div className={styles.table}>
        <div className={`${styles.row} ${styles.headerRow}`}>
          <div>Past Order Date</div>
          <div>Most Ordered</div>
          <div>Number of Items</div>
          <div>Total Value</div>
        </div>

        {summaryData.pastOrders.map((order, index) => (
          <div key={index} className={styles.row}>
            <div>{order.date}</div>
            <div>{order.item}</div>
            <div>{order.quantity}</div>
            <div>{order.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
