'use client'
import React, { useEffect, useState } from 'react';
import styles from '../../style/allPortfolio.module.scss';
import Link from 'next/link';
import Image from 'next/image'
const categorysUA = [
    "Всі" ,"Лендінги", "Корпоративні сайти", "B2B", "Магазини", "Платформи"
]
const categorysEN = [
    "All" ,"Landings", "Corporate sites", "B2B", "Shops", "Platforms"
]
const AllPortfoliosTemplate = ({allPortfolio, lang}) => {
    const [allPortfolioState, setAllPortfolioState] = useState([]);
    const [curentCaterogiUa, setCurentCategoriUa] = useState('Всі')
    const [curentCaterogiEn, setCurentCategoriEn] = useState('All')
    useEffect(() => {
        setAllPortfolioState(allPortfolio)
    },[])

    const filteredPortfolioByCategoryUa = (category) => {
        if(category == 'Всі') {
            setAllPortfolioState(allPortfolio);
            setCurentCategoriUa(category)
            return;
        }

        const newArray = allPortfolio.filter((item) => item.categoryUa == category);
        setAllPortfolioState(newArray);
        setCurentCategoriUa(category)

    }
    const filteredPortfolioByCategoryEn = (category) => {
        if(category == 'All') {
            setAllPortfolioState(allPortfolio);
            setCurentCategoriEn(category)
            return;
        }

        const newArray = allPortfolio.filter((item) => item.categoryEn == category);
        setAllPortfolioState(newArray);
        setCurentCategoriEn(category)
    }

    console.log('url != port && ',{allPortfolioState});

    return (
      <>
        <div className={styles.all_portfolio_header}>
          <div className={styles.all_portfolio_title_wrap}>
            <p className={styles.all_portfolio_title_text}>Портфоліо</p>
          </div>
          <div className={styles.all_portfolio_category_wrap}>
            {lang == 'ua' && categorysUA.map((item) => (
              <p key={item} 
              className={`${styles.all_portfolio_category_item} ${curentCaterogiUa == item && styles.all_portfolio_category_item_curent}`}
              onClick={() => filteredPortfolioByCategoryUa(item)}>
                {item}
              </p>
            ))}
            {lang == 'en' && categorysEN.map((item) => (
              <p key={item} 
              className={`${styles.all_portfolio_category_item} ${curentCaterogiEn == item && styles.all_portfolio_category_item_curent}`}
              onClick={() => filteredPortfolioByCategoryEn(item)}>
                {item}
              </p>
            ))}
          </div>
        </div>
        <div className={styles.all_portfolio_content_wrap}>
          {allPortfolioState && !!allPortfolioState.length &&
            allPortfolioState.map((item, idx) => (
              <Link
                href={`/portfolios/${item._id}`}
                key={idx}
                className={styles.all_portfolio_content_block}
                prefetch={false}
              >
                <Image
                  src={`/projects/${item.mainImage}`}
                  className={styles.all_portfolio_content_block_img}
                  alt="Main image"
                  width={1000}
                  height={1000}
                />
                <div className={styles.all_portfolio_content_block_info}>
                    <h4>{item.title}</h4>
                    <p>{item.categoryEn}</p>
                </div>
              </Link>
            ))}
        </div>
      </>
    );
};

export default AllPortfoliosTemplate;