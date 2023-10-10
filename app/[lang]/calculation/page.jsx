import React from 'react';
import CalculationMain from '@/compomemts/calculation/CalculationMain';
import { getDictionary } from '@/lib/dictionary'
const CalculationPage = async ({params: { lang }}) => {
    const { page } = await getDictionary(lang);
    return (
        <div>
            <CalculationMain page={page}/>
        </div>
    );
};

export default CalculationPage;