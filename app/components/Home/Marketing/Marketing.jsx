import React from "react";
import Image from "next/image";
import styles from "./Marketing.module.css";

export default function Marketing() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <Image
          src="/images/MoreImage.png"
          alt="Start a Campaign"
          width={300}
          height={200}
          className={styles.image}
        />
        <a href="/?view=new-campaign" className={styles.button}>
            Start a Campaign
        </a>
        
      </div>
      <div className={styles.card}>
        <Image
          src="/images/More.jpg"
          alt="Use Existing Preset"
          width={300}
          height={200}
          className={styles.image}
        />
        <a className={styles.button} href="/?view=existing-preset">
          Use Existing Preset
        </a>
      </div>
    </div>
  );
}
