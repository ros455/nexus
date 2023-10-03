import React, {useState} from 'react';

const NumberOfPage = ({number, setNumber}) => {
    return (
        <div style={{border: '1px solid black'}}>
        <h4 style={{fontWeight: 600, fontSize: '20px'}}>Кількість сторінок</h4>
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