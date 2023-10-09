import React, {useState} from 'react';
import styles from '../../style/calculation.module.scss'
import {BsInfoCircle} from 'react-icons/bs';
// import checkboxInputTemplate from './template/checkboxInputTemplate';
import CalculateInfo from './CalculateInfo';
const TypeSite = ({ setSelectedOption, siteTypesError, choseTypeStore, choseTypeLanding, choseTypeCorporate , choseTypeB2B }) => {

    const [siteTypesStore, setSiteTypesStore] = useState({selected: false, price: 1000, name: 'Інтернет магазин'});
    const [siteTypesLanding, setSiteTypesLanding] = useState({ selected: false, price: 500, name: 'Лендінг - сайт візитка' });
    const [siteTypesCorporate, setSiteTypesCorporate] = useState({ selected: false, price: 800, name: 'Корпоративний сайт' });
    const [siteTypesB2B, setSiteTypesB2B] = useState({ selected: false, price: 1200, name: 'B2B' });
    const [showInfoModalStore, setShowInfoModalStore] = useState(false);
    const [showInfoModalLanding, setShowInfoModalLanding] = useState(false);
    const [showInfoModalCorporate, setShowInfoModalCorporate] = useState(false);
    const [showInfoModalB2B, setShowInfoModalB2B] = useState(false);

    const handleChangeTypesStore = () => {
        setSiteTypesStore((prevState) => ({ ...prevState, selected: true }));
        setSiteTypesLanding((prevState) => ({ ...prevState, selected: false }));
        setSiteTypesCorporate((prevState) => ({ ...prevState, selected: false }));
        setSiteTypesB2B((prevState) => ({ ...prevState, selected: false }));
        setSelectedOption({selected: true, price: siteTypesStore?.price, name: siteTypesStore?.name})
        choseTypeStore();
    }
    
    const handleChangeTypesLanding = () => {
        setSiteTypesStore((prevState) => ({ ...prevState, selected: false }));
        setSiteTypesLanding((prevState) => ({ ...prevState, selected: true }));
        setSiteTypesCorporate((prevState) => ({ ...prevState, selected: false }));
        setSiteTypesB2B((prevState) => ({ ...prevState, selected: false }));
        setSelectedOption({selected: true, price: siteTypesLanding?.price, name: siteTypesLanding?.name})
        choseTypeLanding();
    }
    
    const handleChangeTypesCorporate = () => {
        setSiteTypesStore((prevState) => ({ ...prevState, selected: false }));
        setSiteTypesLanding((prevState) => ({ ...prevState, selected: false }));
        setSiteTypesCorporate((prevState) => ({ ...prevState, selected: true }));
        setSiteTypesB2B((prevState) => ({ ...prevState, selected: false }));
        setSelectedOption({selected: true, price: siteTypesCorporate?.price, name: siteTypesCorporate?.name})
        choseTypeCorporate();
    }
    
    const handleChangeTypesB2B = () => {
        setSiteTypesStore((prevState) => ({ ...prevState, selected: false }));
        setSiteTypesLanding((prevState) => ({ ...prevState, selected: false }));
        setSiteTypesCorporate((prevState) => ({ ...prevState, selected: false }));
        setSiteTypesB2B((prevState) => ({ ...prevState, selected: true }));
        setSelectedOption({selected: true, price: siteTypesB2B?.price, name: siteTypesB2B?.name})
        choseTypeB2B();
    }
    
    return (
        <div className={styles.item_one}>
            <h4 className={`${siteTypesError && styles.error_message}`}>Оберіть тип сайту</h4>
            <div className={styles.input_wrap} >
                <input
                    id='type_store'
                    type='checkbox'
                    checked={siteTypesStore?.selected}
                    onChange={handleChangeTypesStore}
                />
                <label htmlFor='type_store'>Інтернет магазин</label>
                <div 
                className={styles.info_wrap}
                onMouseEnter={() => setShowInfoModalStore(true)}
                onMouseLeave={() => setShowInfoModalStore(false)}>
                <BsInfoCircle 
                className={styles.info_icon} 
                />
                <CalculateInfo 
                show={showInfoModalStore}/>
                </div>
            </div>
            
            <div className={styles.input_wrap}>
                <input
                    id='type_landing'
                    type='checkbox'
                    checked={siteTypesLanding?.selected}
                    onChange={handleChangeTypesLanding}
                />
                <label htmlFor='type_landing'>Лендінг - сайт візитка</label>
                <div 
                onMouseEnter={() => setShowInfoModalLanding(true)}
                onMouseLeave={() => setShowInfoModalLanding(false)}>
                <BsInfoCircle 
                className={styles.info_icon} 
                />
                <CalculateInfo 
                show={showInfoModalLanding}/>
                </div>
            </div>
            <div className={styles.input_wrap}>
                <input
                    id='type_corporate'
                    type='checkbox'
                    checked={siteTypesCorporate?.selected}
                    onChange={handleChangeTypesCorporate}
                />
                <label htmlFor='type_corporate'>Корпоративний сайт</label>
                <div 
                onMouseEnter={() => setShowInfoModalCorporate(true)}
                onMouseLeave={() => setShowInfoModalCorporate(false)}>
                <BsInfoCircle 
                className={styles.info_icon} 
                />
                <CalculateInfo 
                show={showInfoModalCorporate}/>
                </div>
            </div>
            <div className={styles.input_wrap}>
                <input
                    id='type_b2b'
                    type='checkbox'
                    checked={siteTypesB2B?.selected}
                    onChange={handleChangeTypesB2B}
                />
                <label htmlFor='type_b2b'>B2B</label>
                <div 
                onMouseEnter={() => setShowInfoModalB2B(true)}
                onMouseLeave={() => setShowInfoModalB2B(false)}>
                <BsInfoCircle 
                className={styles.info_icon} 
                />
                <CalculateInfo 
                show={showInfoModalB2B}/>
                </div>
            </div>
        </div>
    );
};

export default TypeSite;