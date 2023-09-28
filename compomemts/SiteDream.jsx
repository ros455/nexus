import React from 'react';
import TitleTemplate from './template/TitleTemplate';
import ContactForm from './template/ContactForm';
import styles from '../style/siteDream.module.scss';
import Image from 'next/image'
const SiteDream = () => {
    return (
        <div className={styles.site_dream_wrap}>
            <TitleTemplate text={'Створимо сайт, про який мрієте'}/>
            <div className={styles.site_dream_main_block}>
                <div className={styles.site_dream_contact_form_wrap}>
                    <ContactForm/>
                </div>
                <div className={styles.site_dream_image_wrap}>
                    <Image 
                    src='/img/computor.svg'
                    alt='computor'
                    width={500}
                    height={500}
                    className={styles.site_dream_image}
                    />
                </div>
            </div>
        </div>
    );
};

export default SiteDream;