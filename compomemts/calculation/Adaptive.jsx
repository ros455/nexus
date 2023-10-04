import React, {useState} from 'react';

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
        <div style={{border: '1px solid black'}}>
        <h4 style={{fontWeight: 600, fontSize: '20px'}}>Адаптив під різні екрани</h4>
        <div>
        <input id='adaptive_yes' 
        type='checkbox'
        checked={siteAdaptiveYes.selected}
        onChange={handleChangeAdaptiveYes}/>
        <label htmlFor='adaptive_yes'>Так</label>
        </div>
        <div>
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