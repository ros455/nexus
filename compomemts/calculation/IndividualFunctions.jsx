import React from 'react';
import styles from '../../style/calculation.module.scss'


const IndividualFunctions = ({description, technicaTask, setDescription, setTechnicaTask}) => {
    const changeFunc = () => {
        setTechnicaTask({selected: !technicaTask?.selected, price: technicaTask?.price, name: technicaTask?.name})
    }
    return (
        <div className={styles.order_form_individual_funk}>
        <h4 >Індивідуальні функції</h4>
        <div className={styles.order_form_tz_chekbox}>
        <input id='individual_func_technical_task' 
        type='checkbox'
        onChange={changeFunc}/>
        <label htmlFor='individual_func_technical_task'>Написання ТЗ</label>
        </div>
        <h4 style={{marginTop:'20px'}}>Чи є у  Вас що додати?</h4>
        <textarea 
        value={description}
        onChange={(e) => setDescription(e.target.value)}/>
        </div>
    );
};

export default IndividualFunctions;