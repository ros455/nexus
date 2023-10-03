import React, {useState} from 'react';

const RadioInputTemplate = ({boolean, state, setState, setSelectedOption, selectedOption}) => {
    const [booleanState, setBooleanState] = useState(false);

    const changeFunc = () => {
        // setState((prevState) => ({ ...prevState, selected: true }));
        // setSelectedOption({selected: true, price: state.price, name: state.name})
        setBooleanState(!booleanState);
    }
    return (
        <div>
        <input
            id='type_store'
            type='radio'
            name='siteType'
            checked={booleanState}
            onChange={(() => setBooleanState(!booleanState))}
        />
        <label htmlFor='type_store'>{state.name} {selectedOption.selected ? 'true' : 'false'}</label>
    </div>
    );
};

export default RadioInputTemplate;