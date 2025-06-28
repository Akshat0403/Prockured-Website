import React from "react";
import styles from './PresetEditOverview.module.css';

export default function CampaignOverview({ visible, onClose, formData }) {
  if (!visible) return null;

  const selectedProduct = {
    name: "Tomato",
    image: "/images/AddProduct.png",
    description: formData.tagline || "Fresh Tomato straight from farms!",
    price: "₹ 600/Kg",
    strikePrice: "₹ 720"
  };

  return (
    <div className={styles.previewWrapper}>
        <div className={styles.previewCard}>
            <div className={styles.header}>
                <div className={styles.avatar} />
                <span className={styles.shopName}>
                    Jade’s Cafe
                </span>
            </div>
            <img className={styles.productImage} src={selectedProduct.image} alt="product" />
            <div>
                <div className={styles.productName}>
                    {selectedProduct.name}
                </div>
                <div className={styles.description}>
                    {selectedProduct.description}
                </div>
                <div className={styles.priceLine}>
                    <span className={styles.strike}>
                        {selectedProduct.strikePrice}
                    </span>
                    <span className={styles.price}>
                        {selectedProduct.price}
                    </span>
                </div>
            </div>
        </div>

      <a className={styles.sendBox} href='/?view=success'>
        <button className={styles.sendButton}>Send</button>
      </a>
    </div>
  );
}
