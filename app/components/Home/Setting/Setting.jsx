import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from './Setting.module.css';

export default function Setting() {
    const [showFeatureModal, setShowFeatureModal] = useState(false);
    const [minOrderValue, setMinOrderValue] = useState('');
    const [showMinOrderPrompt, setShowMinOrderPrompt] = useState(false);
    const [tempValue, setTempValue] = useState('');

    useEffect(() => {
        const savedValue = localStorage.getItem('minOrderValue');
        if (savedValue) setMinOrderValue(savedValue);
    }, []);

    const handleMinOrderClick = () => {
        setTempValue(minOrderValue);
        setShowMinOrderPrompt(true);
    };

    const handleSaveMinValue = () => {
        if (tempValue) {
            localStorage.setItem('minOrderValue', tempValue);
            setMinOrderValue(tempValue);
        }
        setShowMinOrderPrompt(false);
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Image 
                    src={'/images/VendorProfileImage.png'}
                    width={100}
                    height={100}
                    alt="Vendor Home Page"
                />
                <h4>Vendor Name</h4>
                <h4>Vendor</h4>
            </div>

            <div className={styles.buttonContainer}>
                <a className={styles.buttonView} href="/?view=edit-profile">
                    <Image 
                        src={'/images/EditProfileDetails.png'}
                        alt="Edit Profile"
                        width={40}
                        height={40}
                        className={styles.images}
                    />
                    <h3 className={styles.buttonText}>Edit Profile Details</h3>
                </a>

                <div className={styles.buttonView} onClick={handleMinOrderClick} style={{ cursor: 'pointer' }}>
                    <Image 
                        src={'/images/MinimumOrderValue.png'}
                        alt="Minimum Order Value"
                        width={30}
                        height={30}
                        className={styles.images}
                    />
                    <h3 className={styles.buttonText}>
                        Minimum Order Value{minOrderValue ? `: ₹${minOrderValue}` : ''}
                    </h3>
                </div>

                <a className={styles.buttonView} href="/?view=customer">
                    <Image 
                        src={'/images/Customer.png'}
                        alt="Customer"
                        width={30}
                        height={30}
                        className={styles.images}
                    />
                    <h3 className={styles.buttonText}>Customer</h3>
                </a>

                <div className={styles.buttonView} onClick={() => setShowFeatureModal(true)} style={{ cursor: 'pointer' }}>
                    <Image 
                        src={'/images/TeamsAndRoles.png'}
                        alt="Teams & Roles"
                        width={30}
                        height={30}
                        className={styles.images}
                    />
                    <h3 className={styles.buttonText}>Teams & Roles</h3>
                </div>

                <div className={styles.buttonView} onClick={() => setShowFeatureModal(true)} style={{ cursor: 'pointer' }}>
                    <Image 
                        src={'/images/InviteVendor.png'}
                        alt="Invite Vendor"
                        width={30}
                        height={30}
                        className={styles.images}
                    />
                    <h3 className={styles.buttonText}>Invite Vendor</h3>
                </div>

                <a className={styles.buttonView} href='/?view=catalogue'>
                    <Image 
                        src={'/images/Catalogue.png'}
                        alt="Catalogue"
                        width={30}
                        height={30}
                        className={styles.images}
                    />
                    <h3 className={styles.buttonText}>Manage your Catalogue</h3>
                </a>

                <div className={styles.buttonView} onClick={() => setShowFeatureModal(true)} style={{ cursor: 'pointer' }}>
                    <Image 
                        src={'/images/Log Out.png'}
                        alt="Log Out"
                        width={30}
                        height={30}
                        className={styles.images}
                    />
                    <h3 className={styles.buttonText}>Log Out</h3>
                </div>
            </div>

            {showFeatureModal && (
                <div className={styles.modalOverlay}>
                    <div className={styles.modalContent}>
                        <h3 style={{ color: '#76B117', marginBottom: 10 }}>Feature Not Available</h3>
                        <p>This feature is currently unavailable.</p>
                        <button className={styles.modalBtn} onClick={() => setShowFeatureModal(false)}>
                            Close
                        </button>
                    </div>
                </div>
            )}

            {showMinOrderPrompt && (
                <div className={styles.modalOverlay}>
                    <div className={styles.modalContent}>
                        <h3>Set Minimum Order Value</h3>
                        <input
                            type="number"
                            value={tempValue}
                            onChange={(e) => setTempValue(e.target.value)}
                            className={styles.inputBox}
                            placeholder="Enter value in ₹"
                        />
                        <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                            <button className={styles.modalBtn} onClick={handleSaveMinValue}>Save</button>
                            <button className={styles.modalBtn} onClick={() => setShowMinOrderPrompt(false)}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
