'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image'
import styles from '../style/allPortfolio.module.scss';

const PortfolioItem = ({item}) => {
    const ref = React.useRef(null);

    const handleMouseMove = (event) => {
      const rect = ref.current.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
  
      const xPercent = (x / rect.width - 0.5) * 2; 
      const yPercent = (y / rect.height - 0.5) * 2;
  
      ref.current.style.transform = `perspective(500px) rotateY(${xPercent * 10}deg) rotateX(${-yPercent * 10}deg)`;
    };
  
    const handleMouseLeave = () => {
      ref.current.style.transform = '';
    };
    return (
        <Link href={`/portfolios/${item._id}`} className={styles.all_portfolio_content_block} prefetch={false}>
          <div ref={ref} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className={styles.all_portfolio_content_block_img_wrap}>
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
          </div>
        </Link>
      );
};

export default PortfolioItem;