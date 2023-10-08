'use client'
import React, {useState, useEffect} from 'react';
import styles from '../../style/calculation.module.scss'
import TypeSite from './TypeSite';
import TypeDesign from './TypeDesign';
import NumberOfPage from './NumberOfPage';
import Adaptive from './Adaptive';
import AdditionalFunctionality from './AdditionalFunctionality';
import AdditionalServices from './AdditionalServices';
import ManagementSystem from './ManagementSystem';
import IndividualFunctions from './IndividualFunctions';
import OrderForm from './OrderForm';
import CalculateContacts from './CalculateContacts';
import axios from 'axios';
const CalculationMain = () => {
    const [siteTypes, setSiteTypes] = useState({});
    const [siteDesign, setSiteDesign] = useState({});
    const [siteAdaptive, setSiteAdaptive] = useState({});
    const [siteManagementSystem, setSiteManagementSystem] = useState({});
    const [siteAdditionalFunctionality, setSiteAdditionalFunctionality] = useState([]);
    const [siteAdditionalServices, setSiteAdditionalServices] = useState([]);
    const [description, setDescription] = useState('');
    const [technicaTask, setTechnicaTask] = useState({ selected: false, price: 800, name: 'Технічне завдання' });
    const [numberOfPage, setNumberOfPage] = useState(1);
    const [totalPriceForpages, setTotalPriceForpages] = useState(0);
    const [totalPriceState, setTotalPriceState] = useState(0);
    const [numberOfLanguage, setNumberOfLanguage] = useState(1);
    const [priceForLanguage, setPriceForLanguage] = useState(1);
    const [siteLnguage, setSiteLnguage] = useState({selected: false, price: 800, name: 'Декілька мов'});
    const [siteDesignLink, setSiteDesignLink] = useState('');

    const [methodOfCommunication, setMethodOfCommunication] = useState('');
    const [addressOfCommunication, setAddressOfCommunication] = useState('');
    const [contactsDate, setContactsDate] = useState('');
    const [contactsTime, setContactsTime] = useState('');

    const createCalculatePage = async (totalPrice, priceForTotalPages, languagePrice) => {
         axios.post('http://localhost:4444/api/create-calculate-page', {
            siteTypes: {
                name: siteTypes.name,
                price: siteTypes.price
            },
            siteDesign: {
                name: siteDesign.name,
                price: siteDesign.price,
                link: siteDesignLink
            },
            siteAdaptive: {
                name: siteAdaptive.name,
                price: siteAdaptive.price
            },
            siteManagementSystem: {
                name: siteManagementSystem.name,
                price: siteManagementSystem.price
            },
            siteAdditionalFunctionality: siteAdditionalFunctionality,
            siteAdditionalServices: siteAdditionalServices,
            description: description,
            technicaTask: {
                name: technicaTask.name,
                price: technicaTask.price
            },
            numberOfPage: {
                count: numberOfPage,
                total: priceForTotalPages
            },
            language: {
                numberOfLanguage: numberOfLanguage,
                price: siteLnguage.price,
                total: languagePrice
            },
            totalPrice
        }).then((res) => {
            console.log('res',res.data);
        }).catch((error) => {
            console.log(error);
        })
    }

    const sendOrder = () => {
        axios.post('http://localhost:4444/api/create-order', {
            siteTypes: {
                name: siteTypes.name,
                price: siteTypes.price
            },
            siteDesign: {
                name: siteDesign.name,
                price: siteDesign.price,
                link: siteDesignLink
            },
            siteAdaptive: {
                name: siteAdaptive.name,
                price: siteAdaptive.price
            },
            siteManagementSystem: {
                name: siteManagementSystem.name,
                price: siteManagementSystem.price
            },
            siteAdditionalFunctionality: siteAdditionalFunctionality,
            siteAdditionalServices: siteAdditionalServices,
            description: description,
            technicaTask: {
                name: technicaTask.name,
                price: technicaTask.price
            },
            numberOfPage: {
                count: numberOfPage,
                total: totalPriceForpages
            },
            language: {
                numberOfLanguage: numberOfLanguage,
                price: siteLnguage.price,
                total: priceForLanguage
            },
            totalPrice: totalPriceState,
            comunication: {
                method: methodOfCommunication,
                address: addressOfCommunication,
                date: contactsDate,
                time: contactsTime
            }
        }).then((res) => {
            alert('order send');
            console.log('res',res.data);
            window.location.reload();
        }).catch((error) => {
            console.log(error);
        })
    }
    
    const calculateTotalPrice = () => {
        const totalAditionalFunctionality = siteAdditionalFunctionality.reduce((acc, item) => acc + item.price, 0);
        const totalAditionalServices = siteAdditionalServices.reduce((acc, item) => acc + item.price, 0);
        const priceForOnePage = 500;
        const priceForTotalPages = numberOfPage == 1 ? 0 : numberOfPage * priceForOnePage;
        const technicaTaskPrice = technicaTask.selected ? technicaTask.price : 0;
        const languagePrice = numberOfLanguage > 1 && siteLnguage.selected ? siteLnguage.price *  (numberOfLanguage - 1): 0;
        setPriceForLanguage(languagePrice);

        const totalPrice = (siteTypes.price || 0) + 
        (siteDesign.price || 0) + 
        (siteAdaptive.price || 0) + 
        (siteManagementSystem.price || 0) + 
        totalAditionalFunctionality + totalAditionalServices +
        priceForTotalPages + technicaTaskPrice + languagePrice
        setTotalPriceState(totalPrice);
        setTotalPriceForpages(priceForTotalPages);
        createCalculatePage(totalPrice, priceForTotalPages, languagePrice);
    };

    return (
        <div className={styles.order_calc_wrap}>

        <div className={styles.calculation_wrap}>
            <div className={styles.wrap_item_one_left}>
                <TypeSite 
                className={styles.item_one}
                setSelectedOption={setSiteTypes} selectedOption={siteTypes}/>
                <TypeDesign 
                className={styles.item_one}
                setSelectedOption={setSiteDesign} 
                selectedOption={siteDesign}
                siteDesignLink={siteDesignLink}
                setSiteDesignLink={setSiteDesignLink}/>
                <NumberOfPage 
                className={styles.item_one}
                number={numberOfPage} setNumber={setNumberOfPage}/>
                <Adaptive 
                className={styles.item_one}
                setSelectedOption={setSiteAdaptive} selectedOption={siteAdaptive}/>
                <ManagementSystem setSelectedOption={setSiteManagementSystem} selectedOption={siteManagementSystem}/>
            </div>
            <div className={styles.wrap_item_one_right}>
                <AdditionalFunctionality setResultArray={setSiteAdditionalFunctionality} 
                resultArray={siteAdditionalFunctionality}
                setNumberOfLanguage={setNumberOfLanguage}
                numberOfLanguage={numberOfLanguage}
                setSiteLnguage={setSiteLnguage}
                siteLnguage={siteLnguage}/>
                <AdditionalServices setResultArray={setSiteAdditionalServices} resultArray={siteAdditionalServices}/>
                <IndividualFunctions 
                    description={description} 
                    setDescription={setDescription}
                    technicaTask={technicaTask}
                    setTechnicaTask={setTechnicaTask}/>

                <button
                className={styles.order_form_button}
                    onClick={calculateTotalPrice}>Розрахувати вартість</button>
            </div>


            </div>
            <div className={styles.order_form_wrap}>
            <h4>Total price: {totalPriceState}</h4>
            {!!totalPriceState && 
            <>
            <div className={styles.order_form_total_info}>
                <OrderForm
                siteTypes={siteTypes}
                siteDesign={siteDesign}
                siteAdaptive={siteAdaptive}
                siteManagementSystem={siteManagementSystem}
                siteAdditionalFunctionality={siteAdditionalFunctionality}
                siteAdditionalServices={siteAdditionalServices}
                description={description}
                technicaTask={technicaTask}
                numberOfPage={numberOfPage}
                totalPriceState={totalPriceState}
                numberOfLanguage={numberOfLanguage}
                siteLnguage={siteLnguage}
                priceForLanguage={priceForLanguage}
                />
                <CalculateContacts
                methodOfCommunication={methodOfCommunication}
                setMethodOfCommunication={setMethodOfCommunication}
                addressOfCommunication={addressOfCommunication}
                setAddressOfCommunication={setAddressOfCommunication}
                contactsDate={contactsDate}
                setContactsDate={setContactsDate}
                contactsTime={contactsTime}
                setContactsTime={setContactsTime}/>
                            <button 
            className={styles.order_form_button}
            onClick={sendOrder}>Замовити сайт</button>
            </div>
            </>
            }
            </div>
        </div>
    );
};

export default CalculationMain;