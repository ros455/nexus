import React from 'react';
import styles from '../style/reviews.module.scss';
import TitleTemplate from './template/TitleTemplate';
import ReviewBlocktemplate from './template/ReviewBlocktemplate';
import { getDictionary } from '@/lib/dictionary';

const Reviews = async ({lang}) => {
    const { page } = await getDictionary(lang)
    const reviewsArray = [
        {
            image: 'no-avatar.png',
            date: '18/06/2019',
            name: page.Reviews.reviews_name1,
            text: page.Reviews.reviews_text1,
            id: 1,
            rating: 5
        },
        {
            image: 'no-avatar.png',
            date: '02/01/2019',
            name: page.Reviews.reviews_name2,
            text: page.Reviews.reviews_text2,
            id: 2,
            rating: 5
        },
        {
            image: 'no-avatar.png',
            date: '02/01/2019',
            name: page.Reviews.reviews_name3,
            text: page.Reviews.reviews_text3,
            id: 3,
            rating: 5
        },
        {
            image: 'no-avatar.png',
            date: '02/01/2019',
            name: page.Reviews.reviews_name4,
            text: page.Reviews.reviews_text4,
            id: 4,
            rating: 5
        },
        {
            image: 'no-avatar.png',
            date: '02/01/2019',
            name: page.Reviews.reviews_name5,
            text: page.Reviews.reviews_text5,
            id: 5,
            rating: 5
        },
        {
            image: 'no-avatar.png',
            date: '02/01/2019',
            name: page.Reviews.reviews_name6,
            text: page.Reviews.reviews_text6,
            id: 6,
            rating: 5
        },
        {
            image: 'no-avatar.png',
            date: '02/01/2019',
            name: page.Reviews.reviews_name7,
            text: page.Reviews.reviews_text7,
            id: 7,
            rating: 5
        },
        {
            image: 'no-avatar.png',
            date: '02/01/2019',
            name: page.Reviews.reviews_name8,
            text: page.Reviews.reviews_text8,
            id: 8,
            rating: 5
        },
    ];
    return (
        <div className={styles.reviews_wrap}>
            <TitleTemplate text={page.Reviews.title}/>
            <div className={styles.reviews_text_wrap}>
                <p className={styles.reviews_text}> {page.Reviews.text}</p>
            </div>
            <div className={styles.reviews_all_items_wrap}>
                {reviewsArray.map((item) => (
                <ReviewBlocktemplate item={item} key={item.id} page={page}/>
                ))}
            </div>
        </div>
    );
};

export default Reviews;