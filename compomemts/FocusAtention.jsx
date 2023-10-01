import React from 'react';
import ContactForm from './template/ContactForm';
import styles from  '../style/focusAtention.module.scss'
import Image from 'next/image'
import PeopleAndComputor from '../public/img/people-and-computor.svg';
import backgroundImage from '../public/icon/background-item.svg';
import { getDictionary } from '@/lib/dictionary';
const FocusAtention = async ({lang}) => {
  const { page } = await getDictionary(lang)

    return (
        <div className={styles.focus_atention_wrap}>
            <div className={styles.focus_atention_bc_image_text_wrap}>
                <div className={styles.focus_atention_bc_image_wrap}>
                    <Image className={styles.focus_atention_bc_image} 
                    src={backgroundImage}
                    alt='background'
                    width={1000}
                    height={1000}/>
                </div>
                <div className={styles.focus_atention_text_wrap}>
                    <p className={styles.focus_atention_text}>Сфокусуй увагу клієнта на своєму продукті, на ключові переваги та вигоди</p>
                </div>
            </div>
            <div className={styles.focus_atention_form_wrap}>
            <ContactForm page={page}/>
            </div>
            <div className={styles.focus_atention_main_photo_wrap}>
                <Image className={styles.focus_atention_main_photo} 
                src={PeopleAndComputor}
                alt='people-and-computor-background'
                width={1000}
                height={1000}/>
            </div>
        </div>
    );
};

export default FocusAtention;