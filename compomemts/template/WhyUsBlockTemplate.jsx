'use client'
// import React from 'react';
// import styles from '../../style/whyUs.module.scss';
// import Counter from './Counter';
// const WhyUsBlockTemplate = ({item}) => {
//     return (
//         <div className={styles.why_us_icon_item_wrap}>
//             <div>{item.icon}</div>
//             <div className={styles.why_us_icon_number}>
//                 <Counter val={item.number} time={item.time} isBool={false}/>+
//             </div>
//             <p className={styles.why_us_icon_text}>{item.text}</p>
//         </div>
//     );
// };

// export default WhyUsBlockTemplate;

import React, { useState, useEffect, useRef } from 'react';
import styles from '../../style/whyUs.module.scss';
import Counter from './Counter';

const WhyUsBlockTemplate = ({ item }) => {
    const [isVisible, setIsVisible] = useState(false);
    const blockRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Коли блок стає видимим, встановлюємо isVisible у true
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // Вимикаємо обробник, якщо не хочемо більше слідкувати за змінами
                }
            },
            {
                threshold: 0.1 // відсоток видимості елемента, необхідний для активації обробника
            }
        );

        if (blockRef.current) {
            observer.observe(blockRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div ref={blockRef} className={styles.why_us_icon_item_wrap}>
            <div>{item.icon}</div>
            <div className={styles.why_us_icon_number}>
                <Counter val={item.number} time={item.time} isBool={isVisible} />+
            </div>
            <p className={styles.why_us_icon_text}>{item.text}</p>
        </div>
    );
};

export default WhyUsBlockTemplate;