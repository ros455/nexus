import React from "react";
import styles from "../style/portfolio.module.scss";
import TitleTemplate from "./template/TitleTemplate";
import PortfolioItemTemplate from "./template/PortfolioItemTemplate";
import Link from 'next/link';
import { getAllPortfolio } from "@/requests/portfolio";
const Portfolios = async () => {
  const allPortfolio = await getAllPortfolio();

  return (
    <div className={styles.portfolio_wrap}>
      <div className={styles.portfolio_block}>
        <TitleTemplate text={"Портфоліо робіт"} />

        <div className={styles.portfolio_items_wrap}>
          {allPortfolio.length && allPortfolio.map((item) => (
            <PortfolioItemTemplate key={item._id} item={item} />
          ))}
        </div>
      </div>
      <div className={styles.portfolio_button_wrap}>
      <div className={styles.portfolio_button_block}>
          <Link href='/portfolios'>
            <button className={styles.portfolio_button}>Більше</button>
          </Link>
      </div>
      </div>
    </div>
  );
};

export default Portfolios;
