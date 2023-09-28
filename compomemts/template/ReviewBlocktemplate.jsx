'use client'
import React from 'react';
import StarRatings from 'react-star-ratings';
import styles from '../../style/reviewBlockTemplate.module.scss';
import Image from 'next/image'
const ReviewBlocktemplate = ({item}) => {
    return (
        <div className={styles.review_wrap}>
            <div className={styles.review_image_wrap}>
                <Image src={`/img/${item.image}`} 
                className={styles.review_image}
                alt={item.image}
                width={200}
                height={200}/>
            </div>
            <div className={styles.review_content_wrap}>
                <div className={styles.review_content_name_and_checked}>
                    <p className={styles.review_content_name}>{item.name}</p>
                    <div className={styles.review_content_checked_wrap}>
                    <p className={styles.review_content_checked}>Перевірений</p>
                    </div>
                </div>
                <div className={styles.review_content_date_and_star}>
                    <p className={styles.review_content_date}>{item.date}</p>
                    <div className={styles.review_content_star}>
                    {/* <StarRatings
                    rating={5}
                    starRatedColor="#ffd700"
                    numOfStars={5}
                    name="rating"
                    starHoverColor="#ffd700"
                    starDimension="15px"
                  /> */}
                    </div>
                </div>
                <div className={styles.review_content_text_wrap}>
                    <p className={styles.review_content_text}>{item.text}</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewBlocktemplate;