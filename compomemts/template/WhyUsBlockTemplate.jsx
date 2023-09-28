import React from 'react';
import styles from '../../style/whyUs.module.scss';
const WhyUsBlockTemplate = ({item}) => {
    return (
        <div className={styles.why_us_icon_item_wrap}>
            <div>{item.icon}</div>
            <p className={styles.why_us_icon_number}>{item.number}</p>
            <p className={styles.why_us_icon_text}>{item.text}</p>
        </div>
    );
};

export default WhyUsBlockTemplate;