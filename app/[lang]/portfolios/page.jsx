import React from 'react';
import styles from '../../../style/allPortfolio.module.scss';
import { getAllPortfolio } from '@/requests/portfolio';
import AllPortfoliosTemplate from '@/compomemts/template/AllPortfoliosTemplate';
export const metadata = {
    title: 'Portfolios',
    description: 'Portfolio developers',
  }
  
const PortfoliosPage = async ({params: { lang }}) => {


    const allPortfolio = await getAllPortfolio();

    return (
        <div className={styles.all_portfolio_wrapper}>
            <AllPortfoliosTemplate allPortfolio={allPortfolio} lang={lang}/>
        </div>
    );
};

export default PortfoliosPage;