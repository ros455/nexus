import React from 'react';
import Link from 'next/link';
import styles from "../../style/portfolio.module.scss";
import Image from 'next/image'
const PortfolioItemTemplate = ({item}) => {
    return (
        <div className={styles.portfolio_template_block}>
            <Link href={`/portfolios/${item._id}`}>
            <Image className={styles.portfolio_template_img} 
            src={`/projects/${item.mainImage}`}
            alt={item.mainImage}
            width={300}
            height={350}
            // layout='responsive'
            />
            </Link>
        </div>
    );
};

export default PortfolioItemTemplate;