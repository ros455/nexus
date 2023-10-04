import React from 'react';

const IndividualFunctions = ({description, technicaTask, setDescription, setTechnicaTask}) => {
    const changeFunc = () => {
        setTechnicaTask({selected: !technicaTask.selected, price: technicaTask.price, name: technicaTask.name})
    }
    return (
        <div style={{border: '1px solid black'}}>
        <h4 style={{fontWeight: 600, fontSize: '20px'}}>Індивідуальні функції</h4>
        <div>
        <input id='individual_func_technical_task' 
        type='checkbox'
        onChange={changeFunc}/>
        <label htmlFor='individual_func_technical_task'>Написання ТЗ</label>
        </div>
        <p>Чи є у  Вас що додати?</p>
        <textarea 
        value={description}
        onChange={(e) => setDescription(e.target.value)}/>
        </div>
    );
};

export default IndividualFunctions;