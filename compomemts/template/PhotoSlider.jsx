'use client'
import React, { useState } from "react";
import Image from "next/image";
import styles from "../../style/portfolioOne.module.scss";
import OnePhotoModal from "./OnePhotoModal";
import ModalImage from 'react-modal-image';

const PhotoSlider = ({ mainImage, portfolio }) => {
    const [currentMainImage, setCurrentMainImage] = useState(mainImage);
    const [isOpen, setIsOpen] = useState(false);

    const handleImageClick = (imgSrc) => {
        setCurrentMainImage(`/projects/${imgSrc}`);
    };

    const handleCloseModal = () => {
        setIsOpen(false);
    }

    console.log('currentMainImage',currentMainImage);

    return (
      <div className={styles.slider_photo_wrap}>
        <div
          className={styles.portfolio_one_img_wrap}
          onClick={() => setIsOpen(!isOpen)}
        >
          <Image
            className={styles.portfolio_one_img}
            src={currentMainImage}
            alt={portfolio?.mainImage}
            width={600}
            height={600}
          />
        </div>
        <div className={styles.portfolio_many_img_wrap}>
          {portfolio?.images.map((img, index) => (
            <div className={styles.portfolio_many_img_block} key={index}>
              <Image
                className={styles.portfolio_many_img_item}
                src={`/projects/${img}`}
                alt={portfolio?.mainImage}
                width={200}
                height={200}
                onClick={() => handleImageClick(img)}
              />
            </div>
          ))}
        </div>
        <OnePhotoModal         
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            currentImg={currentMainImage}/>
      </div>
    );
};

export default PhotoSlider;
