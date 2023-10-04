'use client'
import React, {useState} from 'react';
import TypeSite from './TypeSite';
import TypeDesign from './TypeDesign';
import NumberOfPage from './NumberOfPage';
import Adaptive from './Adaptive';
import AdditionalFunctionality from './AdditionalFunctionality';
import AdditionalServices from './AdditionalServices';
import ManagementSystem from './ManagementSystem';
import IndividualFunctions from './IndividualFunctions';
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
    
    const calculateTotalPrice = () => {
        let totalPrice = 0;
        let totalAditionalFunctionality = 0;
        let totalAditionalServices = 0;
        const priceForOnePage = 500;
        const priceForTotalPages = numberOfPage == 1 ? 0 : numberOfPage * priceForOnePage;
        const technicaTaskPrice = technicaTask.selected ? technicaTask.price : 0;

        if(siteAdditionalFunctionality.length) {
            siteAdditionalFunctionality.forEach((item) => {
                totalAditionalFunctionality += item.price;
            })
        }

        if(siteAdditionalServices.length) {
            siteAdditionalServices.forEach((item) => {
                totalAditionalServices += item.price;
            })
        }

        totalPrice = (siteTypes.price || 0) + 
        (siteDesign.price || 0) + 
        (siteAdaptive.price || 0) + 
        (siteManagementSystem.price || 0) + 
        totalAditionalFunctionality + totalAditionalServices +
        priceForTotalPages + technicaTaskPrice ;
        return totalPrice;
    };

    console.log('numberOfPage',numberOfPage);

    return (
        <div>
            <TypeSite setSelectedOption={setSiteTypes} selectedOption={siteTypes}/>
            <TypeDesign setSelectedOption={setSiteDesign} selectedOption={siteDesign}/>
            <NumberOfPage number={numberOfPage} setNumber={setNumberOfPage}/>
            <Adaptive setSelectedOption={setSiteAdaptive} selectedOption={siteAdaptive}/>
            <AdditionalFunctionality setResultArray={setSiteAdditionalFunctionality} resultArray={siteAdditionalFunctionality}/>
            <AdditionalServices setResultArray={setSiteAdditionalServices} resultArray={siteAdditionalServices}/>
            <ManagementSystem setSelectedOption={setSiteManagementSystem} selectedOption={siteManagementSystem}/>
            <IndividualFunctions 
            description={description} 
            setDescription={setDescription}
            technicaTask={technicaTask}
            setTechnicaTask={setTechnicaTask}/>
            Total price: {calculateTotalPrice()}
        </div>
    );
};

export default CalculationMain;