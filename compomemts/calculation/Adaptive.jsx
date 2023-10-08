import React, {useState} from 'react';
import styles from '../../style/calculation.module.scss'

const Adaptive = ({ setSelectedOption, selectedOption }) => {
    const [siteAdaptiveYes, setSiteAdaptiveYes] = useState({selected: false, price: 1000, name: 'Так'});
    const [siteAdaptiveNo, setSiteAdaptiveNo] = useState({ selected: false, price: 0, name: 'Ні' });

    const handleChangeAdaptiveYes = () => {
        setSiteAdaptiveYes((prevState) => ({ ...prevState, selected: true }));
        setSiteAdaptiveNo((prevState) => ({ ...prevState, selected: false }));
        setSelectedOption({selected: true, price: siteAdaptiveYes.price, name: siteAdaptiveYes.name})
    }
    
    const handleChangeAdaptiveNo = () => {
        setSiteAdaptiveYes((prevState) => ({ ...prevState, selected: false }));
        setSiteAdaptiveNo((prevState) => ({ ...prevState, selected: true }));
        setSelectedOption({selected: true, price: siteAdaptiveNo.price, name: siteAdaptiveNo.name})
    }
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