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
import { validationCalculate } from '@/valodation/validation';
import CalculationValidation from './CalculationValidation';
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

    //Adaptive state

    const [siteAdaptiveYes, setSiteAdaptiveYes] = useState({selected: false, price: 1000, name: 'Так'});
    const [siteAdaptiveNo, setSiteAdaptiveNo] = useState({ selected: false, price: 0, name: 'Ні' });

    //Management system

    const [siteManagementSystemYes, setManagementSystemYes] = useState({selected: false, price: 1000, name: 'Так'});
    const [siteManagementSystemNo, setSiteManagementSystemNo] = useState({ selected: false, price: 0, name: 'Ні' });

    //Error state

    const [siteTypesError, setSiteTypesError] = useState(false);
    const [siteDesignError, setSiteDesignError] = useState(false);

    //Management func

    const handleChangeManagementSystemYes = () => {
        setManagementSystemYes((prevState) => ({ ...prevState, selected: true }));
        setSiteManagementSystemNo((prevState) => ({ ...prevState, selected: false }));
        setSiteManagementSystem({selected: true, price: siteManagementSystemYes?.price, name: siteManagementSystemYes?.name})
    }
    
    const handleChangeManagementSystemNo = () => {
        setManagementSystemYes((prevState) => ({ ...prevState, selected: false }));
        setSiteManagementSystemNo((prevState) => ({ ...prevState, selected: true }));
        setSiteManagementSystem({selected: true, price: siteManagementSystemNo?.price, name: siteManagementSystemNo?.name})
    }


    //Adaptive func

    const handleChangeAdaptiveYes = () => {
        setSiteAdaptiveYes((prevState) => ({ ...prevState, selected: true }));
        setSiteAdaptiveNo((prevState) => ({ ...prevState, selected: false }));
        setSiteAdaptive({selected: true, price: siteAdaptiveYes.price, name: siteAdaptiveYes.name})
    }
    
    const handleChangeAdaptiveNo = () => {
        setSiteAdaptiveYes((prevState) => ({ ...prevState, selected: false }));
        setSiteAdaptiveNo((prevState) => ({ ...prevState, selected: true }));
        setSiteAdaptive({selected: true, price: siteAdaptiveNo.price, name: siteAdaptiveNo.name})
    }



    const choseTypeStore = () => {
        console.log('choseTypeStore');
        handleChangeAdaptiveYes();
        handleChangeManagementSystemYes();
        setSiteTypesError(false);
    }
    const choseTypeLanding = () => {
        console.log('choseTypeLanding');
        handleChangeAdaptiveYes();
        handleChangeManagementSystemNo();
        setSiteTypesError(false);
    }
    const choseTypeCorporate = () => {
        console.log('choseTypeCorporate');
        handleChangeAdaptiveYes();
        handleChangeManagementSystemNo();
        setSiteTypesError(false);
    }
    const choseTypeB2B = () => {
        console.log('choseTypeB2B');
        handleChangeAdaptiveNo();
        handleChangeManagementSystemYes();
        setSiteTypesError(false);
    }

    

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
        const resoult = validationCalculate({
            type: !!!siteTypes?.name,
            design: !!!siteDesign?.name
          });

          console.log('resoult',resoult);

          let isValid = false;
      
          if(!!!resoult.length) {
            isValid = true;
          } else {
            resoult.forEach((item) => {
                console.log('item.reason',item.reason);
              item.reason == 'type' && setSiteTypesError(true);
              item.reason == 'design' && setSiteDesignError(true);
            })
          }
          if(isValid) {
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
          }
    };
    
    console.log('siteTypesError',siteTypesError);
    return (
        <div className={styles.order_calc_wrap}>

        <div className={styles.calculation_wrap}>
            <div className={styles.wrap_item_one_left}>
                <TypeSite 
                setSelectedOption={setSiteTypes} selectedOption={siteTypes}
                choseTypeStore={choseTypeStore}
                choseTypeLanding={choseTypeLanding}
                choseTypeCorporate={choseTypeCorporate}
                choseTypeB2B={choseTypeB2B}
                siteTypesError={siteTypesError}
                />
                <TypeDesign 
                setSelectedOption={setSiteDesign} 
                selectedOption={siteDesign}
                siteDesignLink={siteDesignLink}
                setSiteDesignLink={setSiteDesignLink}
                setSiteDesignError={setSiteDesignError}
                siteDesignError={siteDesignError}/>
                <NumberOfPage 
                number={numberOfPage} setNumber={setNumberOfPage}/>
                <Adaptive 
                siteAdaptiveYes={siteAdaptiveYes}
                siteAdaptiveNo={siteAdaptiveNo}
                handleChangeAdaptiveYes={handleChangeAdaptiveYes}
                handleChangeAdaptiveNo={handleChangeAdaptiveNo}/>
                <ManagementSystem 
                siteManagementSystemYes={siteManagementSystemYes}
                siteManagementSystemNo={siteManagementSystemNo}
                handleChangeManagementSystemYes={handleChangeManagementSystemYes}
                handleChangeManagementSystemNo={handleChangeManagementSystemNo}/>
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
                    onClick={calculateTotalPrice}
                    >Розрахувати вартість
                </button>
                    <CalculationValidation
                    siteTypesError={siteTypesError}
                    siteDesignError={siteDesignError}/>
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