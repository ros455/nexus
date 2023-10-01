import React from 'react';
import TitleTemplate from './template/TitleTemplate';
import ContactForm from './template/ContactForm';
import styles from '../style/siteDream.module.scss';
import Image from 'next/image'
import computor from '../public/img/computor.svg';
import { getDictionary } from '@/lib/dictionary';
const SiteDream = async ({lang}) => {
    const { page } = await getDictionary(lang)
    return (
        <div className={styles.site_dream_wrap}>
            <TitleTemplate text={page.SiteDream.title}/>
            <div className={styles.site_dream_main_block}>
                <div className={styles.site_dream_contact_form_wrap}>
                    <ContactForm page={page}/>
                </div>
                <div className={styles.site_dream_image_wrap}>
                    <Image 
                    src={computor}
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