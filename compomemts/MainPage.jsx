import React from 'react';
import CallToAction from './CallToAction';
import WhyWorkWithUs from './WhyWorkWithUs';
import WeGuaranteeAndMainDirections from './WeGuaranteeAndMainDirections';
import FocusAtention from './FocusAtention';
import SevenSteps from './SevenSteps';
import SiteDream from './SiteDream';
import Reviews from './Reviews';
import Portfolios from './Portfolios';
const MainPage = () => {
    return (
        <>
            <CallToAction/>
            <WhyWorkWithUs/>
            <WeGuaranteeAndMainDirections/>
            <Portfolios/>
            <FocusAtention/>
            <SevenSteps/>
            <SiteDream/>
            <Reviews/>
        </>
    );
};

export default MainPage;