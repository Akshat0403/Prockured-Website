// pages/new-campaign.js
import { useState } from 'react';
//import { useRouter } from 'next/router';
import styles from './PresetEdit.module.css';
import { ChevronLeftIcon } from 'lucide-react';
import PresetEditOverview from '../ExistingCampaignOverview/PresetEditOverview';
import CampaignOverview from '../NewCampaignOverview/CampaignOverview';


export default function PresetEdit() {
  //const router = useRouter();
    const [showPreview, setShowPreview] = useState(false);

    const [formData, setFormData] = useState({
        day: '',
        month: '',
        year: '',
        hour: '09',
        minute: '00',
        ampm: 'AM',
        audience: ['Ring Marg', 'Indian Restaurant', 'SB Road'],
        selectedProducts: [],
        tagline: '',
    });

    const sampleCatalogue = [
        { name: 'Red Capsicum', type: 'Vegetable', price: '₹ 64/Kg', offer: '10% off' },
        { name: 'Red Chilli', type: 'Vegetable', price: '₹ 111/Kg', offer: '10% off' },
    ];

    const handleProductSelection = (productName) => {
        setFormData((prev) => {
        const exists = prev.selectedProducts.includes(productName);
        return {
            ...prev,
            selectedProducts: exists
            ? prev.selectedProducts.filter((p) => p !== productName)
            : [...prev.selectedProducts, productName],
        };
        });
    };

    //   const handleSubmit = () => {
    //     console.log('Sending to API:', formData);
    //     router.push({
    //       pathname: '/campaign-summary',
    //       query: { data: JSON.stringify(formData) },
    //     });
    //   };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <a href='/?view=existing-preset'>
                    <ChevronLeftIcon size={24} color='black' />
                </a>
                <h2 className={styles.heading}>Preset Edit</h2>
            </div>
            <div className={styles.entryForm}>
                <div className={styles.section}>
                    <h2>
                        Date
                    </h2>
                    <div className={styles.inputGroup}>
                        <input
                            className={styles.input}
                            placeholder="Day"
                            onChange={(e) => setFormData({ ...formData, day: e.target.value })}
                        />
                        <input
                            className={styles.input}
                            placeholder="Month"
                            onChange={(e) => setFormData({ ...formData, month: e.target.value })}
                        />
                        <input
                            className={styles.input}
                            placeholder="Year"
                            onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                        />
                    </div>
                </div>

                <div className={styles.section}>
                    <h2>
                        Time
                    </h2>
                    <div className={styles.inputGroup}>
                        <input
                            className={styles.input}
                            placeholder='Hour'
                            value={formData.hour}
                            onChange={(e) => setFormData({ ...formData, hour: e.target.value })}
                        />
                        <input
                            className={styles.input}
                            placeholder='Minute'
                            value={formData.minute}
                            onChange={(e) => setFormData({ ...formData, minute: e.target.value })}
                        />
                        <select
                            className={styles.select}
                            value={formData.ampm}
                            onChange={(e) => setFormData({ ...formData, ampm: e.target.value })}
                        >
                            <option value="AM">AM</option>
                            <option value="PM">PM</option>
                        </select>
                    </div>
                </div>

                <div className={styles.section}>
                    <h4>Choose Audience</h4>
                    <div className={styles.audienceTags}>
                    {formData.audience.map((a) => (
                        <span key={a} className={styles.tag}>{a}</span>
                    ))}
                    </div>
                </div>
            </div>
            

            <div className={styles.entryForm}>
                <div className={styles.section}>
                    <h4>Choose Product Image</h4>
                    <div className={styles.imageWrapper}>
                        <img src="/images/AddProduct.png" className={styles.image} alt="Product" />
                    </div>
                </div>

                <div className={styles.section}>
                    <h4>
                        Choose Product *
                    </h4>
                    <div className={styles.productsList}>
                        {sampleCatalogue.map((prod) => (
                            <div key={prod.name} className={styles.productItem}>
                                <input
                                    type="checkbox"
                                    onChange={() => handleProductSelection(prod.name)}
                                    checked={formData.selectedProducts.includes(prod.name)}
                                    color='#76B117'
                                />
                                <span>
                                    {prod.name}
                                </span>
                                <span>
                                    {prod.type} 
                                </span>
                                <span>
                                    {prod.price} 
                                </span>
                                <span>
                                    {prod.offer}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Tagline */}
            <div className={styles.section}>
                <textarea
                className={styles.textarea}
                rows={3}
                placeholder="Write Tagline Text*"
                onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
                />
            </div>

            {/* Buttons */}
            <div className={styles.actions}>
                <button className={styles.cancelBtn}>Cancel</button>
                <button className={styles.saveBtn} onClick={() => setShowPreview(true)}>Save Changes</button>
            </div>
            <CampaignOverview visible={showPreview} onClose={() => setShowPreview(false)} formData={formData} />
        </div>
    );
}
