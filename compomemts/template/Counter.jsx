'use client'
import React,{useState, useEffect} from 'react';

const Counter = ({ val, time, isBool }) => {
    const [ currVal, setCurrVal ] = useState(0);
  
    useEffect(() => {
        if(isBool) {
            currVal !== val && setTimeout(setCurrVal, time, currVal + 1);
        }
    }, [ currVal, isBool ]);
  
    return <div>{currVal}</div>;
};

export default Counter;