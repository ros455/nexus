import React from 'react';
import WhyUsBlockTemplate from './template/WhyUsBlockTemplate';
import {MdOutlineRocketLaunch} from 'react-icons/md';
import { FaSmileBeam } from 'react-icons/fa';
import { TbDeviceDesktopCode } from 'react-icons/tb';
import { MdDashboardCustomize } from 'react-icons/md';
import styles from '../style/whyUs.module.scss'
import Image from 'next/image'

const dataArray = [
    {
        icon: <MdOutlineRocketLaunch className={styles.why_us_icon}/>,
        number: '5+',
        text: 'Років на ринку'
    },
    {
        icon: <MdDashboardCustomize className={styles.why_us_icon}/>,
        number: '47+',
        text: 'Дизайнів створено'
    },
    {
        icon: <TbDeviceDesktopCode className={styles.why_us_icon}/>,
        number: '70+',
        text: 'Виконано проектів'
    },
    {
        icon: <FaSmileBeam className={styles.why_us_icon}/>,
        number: '90+',
        text: 'Щасливих клієнтів'
    },
];

const WhyWorkWithUs = () => {
    return (
        <div className={styles.why_us_wrap}>
            <div className={styles.why_us_title_wrap}>
                <p className={styles.why_us_title}>Чому варто <span>працювати з нами</span>? Як ми допоможимо у розробці Вашого сайту?</p>
            </div>
            <div className={styles.why_us_main_content_and_icons_wrap}>
            <div className={styles.why_us_main_content_wrap}>
                <div className={styles.why_us_img_wrap}>
                    <Image className={styles.why_us_img} 
                    src='./img/why-us.svg'
                    alt='why-us'
                    width={1000}
                    height={1000}/>
                </div>
                <div className={styles.why_us_text_wrap}>
                    <p>Вітаємо на сайті нашої компанії!</p>
                    <p>Ми молода та енергійна команда професіоналів, що складається з веб-дизайнера, фронтенд та бекенд розробників, які займаються створенням сайтів та макетів.</p>
                    <p>Наша мета полягає в тому, щоб допомогти нашим клієнтам досягти своїх цілей через Високоякісну розробку та дизайн їхніх веб-проектів.</p>
                    <p>Ми пропонуємо індивідуальний підхід до кожного проекту, щоб забезпечити те, що Наш клієнт отримає рішення, яке повністю задовольнить його потреби та вимоги. Ми розуміємо, що кожен проект має свої унікальні вимоги та обмеження, і ми готові працювати з нашими клієнтами, щоб забезпечити успішне завершення проекту. Наша команда має багаторічний досвід у створенні різноманітних веб-сайтів, макетів та інших веб-додатків.</p>
                    <p>Ми використовуємо сучасні технології та інструменти, щоб забезпечити найкращу продуктивність та якість розробки.</p>
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