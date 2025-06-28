'use client';
import React from 'react';
import styles from './ExistingPreset.module.css';
import { ChevronRight } from 'lucide-react';

export default function ExistingPreset() {
  const previousCampaigns = [
    "Ocean to Plate! Dive into a 15% discount. Fresh, flavorful, and responsibly sourced.",
    "Sweet Deal Alert! Now 15% off. Picked at peak ripeness for maximum flavor.",
    "Fresh Stock Just In! Quench your thirst with nature’s finest. Order now!",
    "Fresh Stock Just In! Quench your thirst with nature’s finest. Order now!",
    "Fresh Stock Just In! Quench your thirst with nature’s finest. Order now!",
    "Color Your Plate! Enjoy 10% off. Add a pop of flavor and color to your meals."
  ];

  const drafts = [
    "Wake Up to Savings! Get 15% off our best blends. Brew happiness every morning!",
    "Creamy Delight at a Discount! Enjoy 20% off. Perfect for your next guacamole!"
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.leftColumn}>
        <h2 className={styles.sectionTitle}>Previous Campaigns</h2>
        {previousCampaigns.map((text, i) => (
          <div key={i} className={styles.listItem}>
            <span>{text}</span>
            <a href="/?view=preset-edit">
                <ChevronRight size={18} />
            </a>
          </div>
        ))}
      </div>

      <div className={styles.rightColumn}>
        <h2 className={styles.sectionTitle}>Drafts</h2>
        {drafts.map((text, i) => (
          <div key={i} className={styles.draftItem}>
            <span>{text}</span>
            <a href="/?view=preset-edit">
                <ChevronRight size={18} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
