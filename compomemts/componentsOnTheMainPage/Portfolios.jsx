import React from "react";
import styles from "../../style/portfolio.module.scss";
import TitleTemplate from "../template/TitleTemplate";
import PortfolioItemTemplate from "../template/PortfolioItemTemplate";
import Link from 'next/link';
import { getAllPortfolio } from "@/requests/portfolio";
import { getDictionary } from '@/lib/dictionary';
const Portfolios = async ({lang}) => {
  const allPortfolio = await getAllPortfolio();
  const { page } = await getDictionary(lang)

  return (
    <div className={styles.portfolio_wrap}>
      <div className={styles.portfolio_block}>
        <TitleTemplate text={"Портфоліо робіт"} />

        <div className={styles.portfolio_items_wrap}>
          {allPortfolio && !!allPortfolio.length && allPortfolio.slice(0,9).map((item) => (
            <PortfolioItemTemplate key={item._id} item={item} />
          ))}
        </div>
      </div>
      <div className={styles.portfolio_button_wrap}>
      <div className={styles.portfolio_button_block}>
          <Link href='/portfolios'>
            <button className={styles.portfolio_button}>{page.Portfolios.More}</button>
          </Link>
      </div>
      </div>
    </div>
  );
};

export default Portfolios;
