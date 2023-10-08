import React, {useState} from 'react';
import styles from '../../style/calculation.module.scss'

const ManagementSystem = ({ setSelectedOption, selectedOption }) => {
    const [siteManagementSystemYes, setManagementSystemYes] = useState({selected: false, price: 1000, name: 'Так'});
    const [siteManagementSystemNo, setSiteManagementSystemNo] = useState({ selected: false, price: 0, name: 'Ні' });

    const handleChangeManagementSystemYes = () => {
        setManagementSystemYes((prevState) => ({ ...prevState, selected: true }));
        setSiteManagementSystemNo((prevState) => ({ ...prevState, selected: false }));
        setSelectedOption({selected: true, price: siteManagementSystemYes?.price, name: siteManagementSystemYes?.name})
    }
    
    const handleChangeManagementSystemNo = () => {
        setManagementSystemYes((prevState) => ({ ...prevState, selected: false }));
        setSiteManagementSystemNo((prevState) => ({ ...prevState, selected: true }));
        setSelectedOption({selected: true, price: siteManagementSystemNo?.price, name: siteManagementSystemNo?.name})
    }

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