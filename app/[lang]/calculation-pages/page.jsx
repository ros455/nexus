import React from 'react';
import { getAllCalculatePages } from '@/requests/calculation';
// import AllCalculationPagesTemplate from '@/compomemts/template/AllCalculationPagesTemplate';

export const metadata = {
    title: 'Calculator website',
    description: 'Calculator website pages',
  }
  
const CalculationPages = async ({params: { lang }}) => {
    const allPages = await getAllCalculatePages();

    return (
        <div>
            {/* <AllCalculationPagesTemplate allPages={allPages} lang={lang}/> */}
        </div>
    );
};

export default CalculationPages;