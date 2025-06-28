import React from "react";
import Image from "next/image";
import styles from './ImageGallery.module.css';

const images = [
    {src: '/images/Image1.png', alt: 'Image1'},
    {src: '/images/Image2.png', alt: 'Image2'},
    {src: '/images/Image3.png', alt: 'Image3'},
    {src: '/images/Image4.png', alt: 'Image4'},
    {src: '/images/Image5.png', alt: 'Image5'},
    {src: '/images/Image6.png', alt: 'Image6'},
    {src: '/images/Image7.png', alt: 'Image7'},
    {src: '/images/Image8.png', alt: 'Image8'},
    {src: '/images/Image9.png', alt: 'Image9'},
]

export default function ImageGallery (){
    return (
        <div className={styles.galleryContainer}>
            {images.map((img, index) => (
                <div key={index} className={styles.imageWrapper}>
                    <Image 
                        src = {img.src}
                        alt = {img.alt}
                        layout = "fill"
                        objectFit="cover"
                        className={styles.image}
                    />
                </div>
            ))}
        </div>
    )
}