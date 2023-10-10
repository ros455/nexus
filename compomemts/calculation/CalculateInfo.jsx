import React from 'react';
import {BsInfoCircle} from 'react-icons/bs';
import styles from '../../style/calculateInfo.module.scss';
const CalculateInfo = ({show}) => {
    return (
        <div className={styles.info_modal_block}>
            {show && 
            <div className={styles.info_wrap}>
                <p className={styles.info_text}>Text</p>
            </div>
            }
        </div>
    );
};

export default CalculateInfo;