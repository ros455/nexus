import React from 'react';
import styles from '../../style/roundBlock.module.scss';
const RoundBlockTemplate = ({item}) => {
    return (
        <div className={styles.round_main_block_wrap}>
            <div className={styles.round_second_block_wrap}>
            <p>{item.icon}</p>
            <div className={styles.round_block_number_wrap}>
                <p className={styles.round_block_number}>{item.number}</p>
            </div>
            <p className={styles.round_block_text}>{item.text}</p>
            </div>
        </div>
    );
};

export default RoundBlockTemplate;