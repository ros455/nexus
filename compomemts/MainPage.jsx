import React from 'react';
import CallToAction from './CallToAction';
import WhyWorkWithUs from './WhyWorkWithUs';
import WeGuaranteeAndMainDirections from './WeGuaranteeAndMainDirections';
import FocusAtention from './FocusAtention';
import SevenSteps from './SevenSteps';
import SiteDream from './SiteDream';
import Reviews from './Reviews';
import Portfolios from './Portfolios';
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