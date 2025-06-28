// AddProduct.js
import React, { useState } from 'react';
import { ChevronLeftIcon } from 'lucide-react';
import Image from 'next/image';
import styles from './AddProduct.module.css';

export default function AddProduct() {
  const [productData, setProductData] = useState({
    productName: '',
    productUnitValue: '',
    productUnitType: 'kg',
    productPrice: '',
    productCategory: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalProductData = {
      ...productData,
      productUnit: `${productData.productUnitValue} ${productData.productUnitType}`,
    };
    console.log('Product Data to be saved:', finalProductData);
    alert('Product data submitted. Check console for details.');
  };

  const categories = [
    'Select Category',
    'Fruits',
    'Vegetables',
  ];

  const units = ['kg', 'gm', 'ltr', 'ml', 'pcs', 'dozen', 'bundle', 'pack'];

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <a href='/?view=catalogue'>
          <ChevronLeftIcon size={24} />
        </a>
        <h2>Add Product</h2>
      </div>

      <div className={styles.formContainer}>
        <div className={styles.imageSection}>
          <Image
            src="/images/AddProduct.png"
            width={100}
            height={100}
            alt="Product"
            className={styles.productImage}
          />
          <div className={styles.editIcon}>✏️</div>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          {/* Row 1 */}
          <div className={styles.row}>
            <div className={styles.inputGroup}>
              <label>Product Name*</label>
              <input
                type="text"
                name="productName"
                value={productData.productName}
                onChange={handleChange}
                placeholder="Enter Product Name"
                required
              />
            </div>
            <div className={styles.inputGroup}>
              <label>Unit*</label>
              <div className={styles.unitWrapper}>
                <input
                  type="number"
                  name="productUnitValue"
                  value={productData.productUnitValue}
                  onChange={handleChange}
                  placeholder="Enter Product Unit"
                  required
                />
                <select
                  name="productUnitType"
                  value={productData.productUnitType}
                  onChange={handleChange}
                >
                  {units.map((unit) => (
                    <option key={unit} value={unit}>
                      {unit}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className={styles.inputGroup}>
              <label>Price</label>
              <input placeholder="Price" />
            </div>
          </div>

          {/* Row 2 */}
          <div className={styles.row}>
            <div className={styles.inputGroup}>
              <label>Link to Category*</label>
              <select
                name="productCategory"
                value={productData.productCategory}
                onChange={handleChange}
                required
              >
                {categories.map((category) => (
                  <option
                    key={category}
                    value={category === 'Select Category' ? '' : category}
                    disabled={category === 'Select Category'}
                  >
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Button */}
          <div className={styles.buttonWrapper}>
            <button type="submit" className={styles.submitButton}>
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
