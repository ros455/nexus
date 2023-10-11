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
import RangeSlider from './RangeSlider';
const CalculationMain = ({page}) => {
    const [value, setValue] = useState(25);
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

    const [siteAdaptiveYes, setSiteAdaptiveYes] = useState({selected: false, price: 1000, name: page.Calculator.Yes});
    const [siteAdaptiveNo, setSiteAdaptiveNo] = useState({ selected: false, price: 0, name: page.Calculator.No });

    //Management system

    const [siteManagementSystemYes, setManagementSystemYes] = useState({selected: false, price: 1000, name: page.Calculator.Yes});
    const [siteManagementSystemNo, setSiteManagementSystemNo] = useState({ selected: false, price: 0, name: page.Calculator.No  });

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
        handleChangeAdaptiveYes();
        handleChangeManagementSystemYes();
        setSiteTypesError(false);
    }
    const choseTypeLanding = () => {
        handleChangeAdaptiveYes();
        handleChangeManagementSystemNo();
        setSiteTypesError(false);
    }
    const choseTypeCorporate = () => {
        handleChangeAdaptiveYes();
        handleChangeManagementSystemNo();
        setSiteTypesError(false);
    }
    const choseTypeB2B = () => {
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


          let isValid = false;
      
          if(!!!resoult.length) {
            isValid = true;
          } else {
            resoult.forEach((item) => {
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
    
    return (
      <div className={styles.order_calc_wrap}>
        <div className={styles.calculation_wrap}>
          <div className={styles.wrap_item_one_left}>
            <TypeSite
              page={page}
              setSelectedOption={setSiteTypes}
              selectedOption={siteTypes}
              choseTypeStore={choseTypeStore}
              choseTypeLanding={choseTypeLanding}
              choseTypeCorporate={choseTypeCorporate}
              choseTypeB2B={choseTypeB2B}
              siteTypesError={siteTypesError}
            />
            <TypeDesign
              page={page}
              setSelectedOption={setSiteDesign}
              selectedOption={siteDesign}
              siteDesignLink={siteDesignLink}
              setSiteDesignLink={setSiteDesignLink}
              setSiteDesignError={setSiteDesignError}
              siteDesignError={siteDesignError}
            />
            {/* <NumberOfPage 
                number={numberOfPage} setNumber={setNumberOfPage}/> */}
            <div style={{width: '50%'}}>
              <RangeSlider
                page={page}
                value={numberOfPage}
                onChange={(e) => setNumberOfPage(e.target.value)}
              />
            </div>
            <Adaptive
              page={page}
              siteAdaptiveYes={siteAdaptiveYes}
              siteAdaptiveNo={siteAdaptiveNo}
              handleChangeAdaptiveYes={handleChangeAdaptiveYes}
              handleChangeAdaptiveNo={handleChangeAdaptiveNo}
            />
            <ManagementSystem
              page={page}
              siteManagementSystemYes={siteManagementSystemYes}
              siteManagementSystemNo={siteManagementSystemNo}
              handleChangeManagementSystemYes={handleChangeManagementSystemYes}
              handleChangeManagementSystemNo={handleChangeManagementSystemNo}
            />
          </div>
          <div className={styles.wrap_item_one_right}>
            <AdditionalFunctionality
              page={page}
              setResultArray={setSiteAdditionalFunctionality}
              resultArray={siteAdditionalFunctionality}
              setNumberOfLanguage={setNumberOfLanguage}
              numberOfLanguage={numberOfLanguage}
              setSiteLnguage={setSiteLnguage}
              siteLnguage={siteLnguage}
            />
            <AdditionalServices
              page={page}
              setResultArray={setSiteAdditionalServices}
              resultArray={siteAdditionalServices}
            />
            <IndividualFunctions
              page={page}
              description={description}
              setDescription={setDescription}
              technicaTask={technicaTask}
              setTechnicaTask={setTechnicaTask}
            />

            <button
              className={styles.order_form_button}
              onClick={calculateTotalPrice}
            >
              {page.Calculator.Calculate_cost}
            </button>
            <CalculationValidation
              siteTypesError={siteTypesError}
              siteDesignError={siteDesignError}
            />
          </div>
        </div>
        <div className={styles.order_form_wrap}>
          <h4>{page.Calculator.Total_price}: {totalPriceState}</h4>
          {!!totalPriceState && (
            <>
              <div className={styles.order_form_total_info}>
                <OrderForm
                  page={page}
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
                  page={page}
                  methodOfCommunication={methodOfCommunication}
                  setMethodOfCommunication={setMethodOfCommunication}
                  addressOfCommunication={addressOfCommunication}
                  setAddressOfCommunication={setAddressOfCommunication}
                  contactsDate={contactsDate}
                  setContactsDate={setContactsDate}
                  contactsTime={contactsTime}
                  setContactsTime={setContactsTime}
                />
                <button
                  className={styles.order_form_button}
                  onClick={sendOrder}
                >
                  {page.Calculator.Order_site}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    );
};

export default CalculationMain;