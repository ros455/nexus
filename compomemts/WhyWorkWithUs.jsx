import React from 'react';
import WhyUsBlockTemplate from './template/WhyUsBlockTemplate';
import {MdOutlineRocketLaunch} from 'react-icons/md';
import { FaSmileBeam } from 'react-icons/fa';
import { TbDeviceDesktopCode } from 'react-icons/tb';
import { MdDashboardCustomize } from 'react-icons/md';
import styles from '../style/whyUs.module.scss';
import Image from 'next/image'
import WhyAsImage from '../public/img/sectiontwo/section2-2.png';
import { getDictionary } from '@/lib/dictionary';

const WhyWorkWithUs = async ({lang}) => {
    const { page } = await getDictionary(lang)

    const dataArray = [
        {
            icon: <MdOutlineRocketLaunch className={styles.why_us_icon}/>,
            number: '5+',
            text: page.WhyWorkWithUs.text_icon1
        },
        {
            icon: <MdDashboardCustomize className={styles.why_us_icon}/>,
            number: '47+',
            text: page.WhyWorkWithUs.text_icon2
        },
        {
            icon: <TbDeviceDesktopCode className={styles.why_us_icon}/>,
            number: '70+',
            text: page.WhyWorkWithUs.text_icon3
        },
        {
            icon: <FaSmileBeam className={styles.why_us_icon}/>,
            number: '90+',
            text: page.WhyWorkWithUs.text_icon4
        },
    ];
    
    return (
        <div className={styles.why_us_wrap}>
            <div className={styles.why_us_title_wrap}>
                <p className={styles.why_us_title}>{page.WhyWorkWithUs.title_part1} <span>{page.WhyWorkWithUs.title_part2}</span>{page.WhyWorkWithUs.title_part3}</p>
            </div>
            <div className={styles.why_us_main_content_and_icons_wrap}>
            <div className={styles.why_us_main_content_wrap}>
                <div className={styles.why_us_img_wrap}>
                    <Image className={styles.why_us_img} 
                    src={WhyAsImage}
                    alt='why-us'
                    width={1000}
                    height={1000}/>
                </div>
                <div className={styles.why_us_text_wrap}>
                    <p>{page.WhyWorkWithUs.text_p1}</p>
                    <p>{page.WhyWorkWithUs.text_p2}</p>
                    <p>{page.WhyWorkWithUs.text_p3}</p>
                    <p>{page.WhyWorkWithUs.text_p4}</p>
                    <p>{page.WhyWorkWithUs.text_p5}</p>
                </div>
            </div>
            <div className={styles.why_us_icon_wrap}>
                {dataArray.map((item, idx) => (
                    <WhyUsBlockTemplate item={item} key={idx}/>
                ))}
            </div>
            </div>
        </div>
    );
};

export default WhyWorkWithUs;