import React from "react";
import Image from "next/image";
import styles from "./Catalogue.module.css";

export default function Catalogue(){
    return(
        <div className={styles.container}>
            <Image 
                src={'/images/VendorHomePage.png'}
                alt="Empty Catalogue"
                width={500}
                height={500}
            />
            <a href="/?view=add-product">
                <button type="submit" className = {styles.addProductButton}>
                    <h3 className={styles.addProductText}>+ Add Product</h3>
                </button>
            </a>
        </div>
    )
}