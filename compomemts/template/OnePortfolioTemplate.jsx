import React from 'react';
import styles from '../../style/portfolioOne.module.scss';
import Image from 'next/image'
const OnePortfolioTemplate = ({portfolio, lang}) => {

    return (
        <div className={styles.portfolio_one_wrap}>
            <div className={styles.portfolio_one_img_wrap}>
                <Image className={styles.portfolio_one_img} 
                src={`/projects/${portfolio?.mainImage}`}
                alt={portfolio?.mainImage}
                width={1000}
                height={1000}/>
            </div>
            <div className={styles.portfolio_one_content_wrap}>
                <div className={styles.portfolio_one_content_block}>
                    <div className={styles.portfolio_one_content_title_wrap}>
                        <p className={styles.portfolio_one_content_title_text}>{portfolio?.title}</p>
                        {lang == 'ua' && portfolio &&
                        <p>{portfolio?.description?.ua}</p>
                        }
                        {lang == 'en' &&
                        <p>{portfolio?.description?.en}</p>
                        }
                    </div>
                    <div className={styles.portfolio_one_content_category_wrap}>
                        <p className={styles.portfolio_one_content_category_text}>{portfolio?.category}</p>
                    </div>
                    <div className={styles.portfolio_one_content_tags_wrap}>
                        {lang == 'ua' && 
                        portfolio && portfolio?.tags?.ua.map((tag) => (
                            <div key={tag} className={styles.portfolio_one_content_tags_block}>
                                <p className={styles.portfolio_one_content_tags_round}></p>
                                <p className={styles.portfolio_one_content_tags_text}>{tag}</p>
                            </div>
                        ))}
                        {lang == 'en' && 
                        portfolio && portfolio?.tags?.en.map((tag) => (
                            <div key={tag} className={styles.portfolio_one_content_tags_block}>
                                <p className={styles.portfolio_one_content_tags_round}></p>
                                <p className={styles.portfolio_one_content_tags_text}>{tag}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OnePortfolioTemplate;