import React, {useState} from 'react';
import styles from '../../style/calculation.module.scss'

const ManagementSystem = ({ siteManagementSystemYes, siteManagementSystemNo, handleChangeManagementSystemYes, handleChangeManagementSystemNo }) => {

    return (
        <div className={styles.item_one}>
        <h4 >Система управління (адмін панель)</h4>
        <div className={styles.input_wrap}>
        <input id='management_system_yes' 
        type='checkbox'
        checked={siteManagementSystemYes?.selected}
        onChange={handleChangeManagementSystemYes}/>
        <label htmlFor='management_system_yes'>Так</label>
        </div>
        <div className={styles.input_wrap}>
        <input id='management_system_not' 
        type='checkbox'
        checked={siteManagementSystemNo?.selected}
        onChange={handleChangeManagementSystemNo}/>
        <label htmlFor='management_system_not'>Ні</label>
        </div>
        </div>
    );
};

export default ManagementSystem;