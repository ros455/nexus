import React, {useState} from 'react';

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
        <div style={{border: '1px solid black'}}>
        <h4 style={{fontWeight: 600, fontSize: '20px'}}>Система управління (адмін панель)</h4>
        <div>
        <input id='management_system_yes' 
        type='checkbox'
        checked={siteManagementSystemYes?.selected}
        onChange={handleChangeManagementSystemYes}/>
        <label htmlFor='management_system_yes'>Так</label>
        </div>
        <div>
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