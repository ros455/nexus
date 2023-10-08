import React, {useState} from 'react';
import styles from '../../style/calculation.module.scss'

const NumberOfPage = ({number, setNumber}) => {
    return (
        <div className={styles.item_one_page}>
        <h4 >Кількість сторінок</h4>
        <input id='number_of_page' 
        type='range'
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        min={1}
        max={50}/>
        Number: {number}
        </div>
    );
};

export default NumberOfPage;