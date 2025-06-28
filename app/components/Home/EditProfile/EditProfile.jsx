import { ChevronLeftIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
import styles from './EditProfile.module.css';

export default function EditProfile() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
            <a href="/?view=setting">
                <ChevronLeftIcon size={24} color="black" className={styles.backIcon} />
            </a>
                <h3 className={styles.headerTitle}>Profile</h3>
            </div>

            <div className={styles.profileView}>
                <Image
                    src="/images/VendorProfileImage.png"
                    width={100}
                    height={100}
                    alt="Profile Image"
                />
                <h4>Frugreen</h4>
                <h3 className={styles.vendorText}>Vendor</h3>
            </div>

            <div className={styles.formSection}>
                <div className={styles.leftColumn}>
                    <h3 className={styles.detailHeader}>Personal Details</h3>
                    <div className={styles.grid}>
                        {["Name*", "Email*", "Phone*", "Password*"].map((label, idx) => (
                            <div className={styles.entryDiv} key={idx}>
                                <h4 className={styles.entry}>{label}</h4>
                                <input
                                    type="text"
                                    placeholder={label}
                                    className={styles.inputs}
                                />
                            </div>
                        ))}
                    </div>
                    <a className={styles.changePassword}>Change Password</a>
                </div>

                <div className={styles.rightColumn}>
                    <h3 className={styles.detailHeader}>Business Address Details</h3>
                    <div className={styles.grid}>
                        {["Business Name*", "Pincode*", "Shipping Address*", "Billing Address*", "GST Number*", "State*", "Country*"].map((label, idx) => (
                            <div className={styles.entryDiv} key={idx}>
                                <h4 className={styles.entry}>{label}</h4>
                                <input
                                    type="text"
                                    placeholder={label}
                                    className={styles.inputs}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className={styles.buttonContainer}>
                <button className={styles.cancelBtn}>Log Out</button>
                <button className={styles.saveBtn}>Save</button>
            </div>
        </div>
    );
}
