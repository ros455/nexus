import React from 'react';
import CallToAction from './componentsOnTheMainPage/CallToAction';
import WhyWorkWithUs from './componentsOnTheMainPage/WhyWorkWithUs';
import WeGuaranteeAndMainDirections from './componentsOnTheMainPage/WeGuaranteeAndMainDirections';
import FocusAtention from './componentsOnTheMainPage/FocusAtention';
import SevenSteps from './componentsOnTheMainPage/SevenSteps';
import SiteDream from './componentsOnTheMainPage/SiteDream';
import Reviews from './componentsOnTheMainPage/Reviews';
import Portfolios from './componentsOnTheMainPage/Portfolios';
import VisibleArrowUp from './ArrowUp/VisibleArrowUp';
const MainPage = ({lang}) => {
    return (
        <>
            <CallToAction lang={lang}/>
            <WhyWorkWithUs lang={lang}/>
            <WeGuaranteeAndMainDirections lang={lang}/>
            <Portfolios/>
            <FocusAtention lang={lang}/>
            <SevenSteps lang={lang}/>
            <SiteDream lang={lang}/>
            <Reviews lang={lang}/>
            <VisibleArrowUp/>
        </>
    );
};

export default MainPage;