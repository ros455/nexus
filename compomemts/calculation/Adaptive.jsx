import React, {useState} from 'react';
import styles from '../../style/calculation.module.scss'

const Adaptive = ({ siteAdaptiveYes, siteAdaptiveNo, handleChangeAdaptiveYes, handleChangeAdaptiveNo}) => {

    return (
        <div className={styles.item_one}>
        <h4 >Адаптив під різні екрани</h4>
        <div className={styles.input_wrap}>
        <input id='adaptive_yes' 
        type='checkbox'
        checked={siteAdaptiveYes.selected}
        onChange={handleChangeAdaptiveYes}/>
        <label htmlFor='adaptive_yes'>Так</label>
        </div>
        <div className={styles.input_wrap}>
        <input id='adaptive_not' 
        type='checkbox'
        checked={siteAdaptiveNo.selected}
        onChange={handleChangeAdaptiveNo}/>
        <label htmlFor='adaptive_not'>Ні</label>
        </div>
        </div>
    );
};

export default Adaptive;