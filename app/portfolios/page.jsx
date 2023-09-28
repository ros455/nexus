import React from 'react';
import styles from '../../style/allPortfolio.module.scss';
import Link from 'next/link';
import { getAllPortfolio } from '@/requests/portfolio';
import Image from 'next/image'

export const metadata = {
    title: 'Portfolios',
    description: 'Portfolio developers',
  }

const categorys = [
    "Лендінги", "Корпоративні сайти", "B2B", "Магазини", "Платформи"
]
const PortfoliosPage = async () => {

    const allPortfolio = await getAllPortfolio();

    return (
        <div className={styles.all_portfolio_wrapper}>
            <div className={styles.all_portfolio_header}>
                <div className={styles.all_portfolio_title_wrap}>
                <p className={styles.all_portfolio_title_text}>Портфоліо</p>
                </div>
                <div className={styles.all_portfolio_category_wrap}>
                    {categorys.map((item) => (
                        <p key={item} 
                        className={styles.all_portfolio_category_item} >{item}</p>
                    ))}
                </div>
            </div>
            <div className={styles.all_portfolio_content_wrap}>
                {allPortfolio.length && allPortfolio.map((item, idx) => (
                    <Link href={`/portfolios/${item._id}`} key={idx} className={styles.all_portfolio_content_block}>
                        <Image src={`/projects/${item.mainImage}`} 
                        className={styles.all_portfolio_content_block_img}
                        alt='Main image'
                        width={1000}
                        height={1000}/>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default PortfoliosPage;