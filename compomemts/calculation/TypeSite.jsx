import React, {useState} from 'react';
// import checkboxInputTemplate from './template/checkboxInputTemplate';
const TypeSite = ({ setSelectedOption, selectedOption }) => {

    const [siteTypesStore, setSiteTypesStore] = useState({selected: false, price: 1000, name: 'Інтернет магазин'});
    const [siteTypesLanding, setSiteTypesLanding] = useState({ selected: false, price: 500, name: 'Лендінг - сайт візитка' });
    const [siteTypesCorporate, setSiteTypesCorporate] = useState({ selected: false, price: 800, name: 'Корпоративний сайт' });
    const [siteTypesB2B, setSiteTypesB2B] = useState({ selected: false, price: 1200, name: 'B2B' });

    const handleChangeTypesStore = () => {
        setSiteTypesStore((prevState) => ({ ...prevState, selected: true }));
        setSiteTypesLanding((prevState) => ({ ...prevState, selected: false }));
        setSiteTypesCorporate((prevState) => ({ ...prevState, selected: false }));
        setSiteTypesB2B((prevState) => ({ ...prevState, selected: false }));
        setSelectedOption({selected: true, price: siteTypesStore?.price, name: siteTypesStore?.name})
    }
    
    const handleChangeTypesLanding = () => {
        setSiteTypesStore((prevState) => ({ ...prevState, selected: false }));
        setSiteTypesLanding((prevState) => ({ ...prevState, selected: true }));
        setSiteTypesCorporate((prevState) => ({ ...prevState, selected: false }));
        setSiteTypesB2B((prevState) => ({ ...prevState, selected: false }));
        setSelectedOption({selected: true, price: siteTypesLanding?.price, name: siteTypesLanding?.name})
    }
    
    const handleChangeTypesCorporate = () => {
        setSiteTypesStore((prevState) => ({ ...prevState, selected: false }));
        setSiteTypesLanding((prevState) => ({ ...prevState, selected: false }));
        setSiteTypesCorporate((prevState) => ({ ...prevState, selected: true }));
        setSiteTypesB2B((prevState) => ({ ...prevState, selected: false }));
        setSelectedOption({selected: true, price: siteTypesCorporate?.price, name: siteTypesCorporate?.name})
    }
    
    const handleChangeTypesB2B = () => {
        setSiteTypesStore((prevState) => ({ ...prevState, selected: false }));
        setSiteTypesLanding((prevState) => ({ ...prevState, selected: false }));
        setSiteTypesCorporate((prevState) => ({ ...prevState, selected: false }));
        setSiteTypesB2B((prevState) => ({ ...prevState, selected: true }));
        setSelectedOption({selected: true, price: siteTypesB2B?.price, name: siteTypesB2B?.name})
    }
    
    return (
        <div style={{ border: '1px solid black' }}>
            <h4 style={{ fontWeight: 600, fontSize: '20px' }}>Оберіть тип сайту</h4>
            <div>
                <input
                    id='type_store'
                    type='checkbox'
                    checked={siteTypesStore?.selected}
                    onChange={handleChangeTypesStore}
                />
                <label htmlFor='type_store'>Інтернет магазин</label>
            </div>
            
            <div>
                <input
                    id='type_landing'
                    type='checkbox'
                    checked={siteTypesLanding?.selected}
                    onChange={handleChangeTypesLanding}
                />
                <label htmlFor='type_landing'>Лендінг - сайт візитка</label>
            </div>
            <div>
                <input
                    id='type_corporate'
                    type='checkbox'
                    checked={siteTypesCorporate?.selected}
                    onChange={handleChangeTypesCorporate}
                />
                <label htmlFor='type_corporate'>Корпоративний сайт</label>
            </div>
            <div>
                <input
                    id='type_b2b'
                    type='checkbox'
                    checked={siteTypesB2B?.selected}
                    onChange={handleChangeTypesB2B}
                />
                <label htmlFor='type_b2b'>B2B</label>
            </div>
        </div>
    );
};

export default TypeSite;