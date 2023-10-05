import React, {useState} from 'react';
const TypeDesign = ({ setSelectedOption, selectedOption, siteDesignLink, setSiteDesignLink }) => {
    const [siteDesignYour, setSiteDesignYour] = useState({selected: false, price: 0, name: 'Ваш дизайн'});
    const [siteDesignTemplate, setSiteDesignTemplate] = useState({ selected: false, price: 500, name: 'Шаблонний' });
    const [siteDesignIndividual, setSiteDesignIndividual] = useState({ selected: false, price: 800, name: 'Індивідуальний' });

    const handleChangeDesignYour = () => {
        setSiteDesignYour((prevState) => ({ ...prevState, selected: true }));
        setSiteDesignTemplate((prevState) => ({ ...prevState, selected: false }));
        setSiteDesignIndividual((prevState) => ({ ...prevState, selected: false }));
        setSelectedOption({selected: true, price: siteDesignYour?.price, name: siteDesignYour?.name})
    }
    
    const handleChangeDesignTemplate = () => {
        setSiteDesignYour((prevState) => ({ ...prevState, selected: false }));
        setSiteDesignTemplate((prevState) => ({ ...prevState, selected: true }));
        setSiteDesignIndividual((prevState) => ({ ...prevState, selected: false }));
        setSelectedOption({selected: true, price: siteDesignTemplate?.price, name: siteDesignTemplate?.name})
    }
    
    const handleChangeDesignIndividual = () => {
        setSiteDesignYour((prevState) => ({ ...prevState, selected: false }));
        setSiteDesignTemplate((prevState) => ({ ...prevState, selected: false }));
        setSiteDesignIndividual((prevState) => ({ ...prevState, selected: true }));
        setSelectedOption({selected: true, price: siteDesignIndividual?.price, name: siteDesignIndividual?.name})
    }

    return (
        <div style={{border: '1px solid black'}}>
        <h4 style={{fontWeight: 600, fontSize: '20px'}} >Тип дизайну</h4>
        <div>
        <input id='design_your' 
        type='checkbox'
        checked={siteDesignYour.selected}
        onChange={handleChangeDesignYour}/>
        <label htmlFor='design_your'>Ваш дизайн</label>
        <input 
        placeholder='Посилання на ваш дизайн'
        onChange={(e) => setSiteDesignLink(e.target.value)}
        value={siteDesignLink}/>
        </div>
        <div>
        <input id='design_template' 
        type='checkbox'
        checked={siteDesignTemplate.selected}
        onChange={handleChangeDesignTemplate}/>
        <label htmlFor='design_template'>Шаблонний</label>
        </div>
        <div>
        <input id='design_idividual' 
        type='checkbox'
        checked={siteDesignIndividual.selected}
        onChange={handleChangeDesignIndividual}/>
        <label htmlFor='design_idividual'>Індивідуальний</label>
        </div>
        </div>
    );
};

export default TypeDesign;