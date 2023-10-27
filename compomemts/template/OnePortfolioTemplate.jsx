
import React from 'react';
import styles from '../../style/portfolioOne.module.scss';
import Image from 'next/image'
import PhotoSlider from './PhotoSlider';
import PortfolioTags from './PortfolioTags';
import PortfolioOneTools from './PortfolioOneTools';
import PortfolioOneFormOrder from './PortfolioOneFormOrder';
const OnePortfolioTemplate = ({portfolio, lang}) => {

    return (
        <div className={styles.portfolio_one_wrap}>
            {/* <PhotoSlider 
            mainImage={`/projects/${portfolio?.mainImage}`}
            portfolio={portfolio}/> */}
            <div className={styles.portfolio_one_wrap_header}>
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
                        <p className={styles.portfolio_one_content_categories_text}>{portfolio?.categoryUa}</p>
                        }
                        {lang == 'en' &&
                        <p className={styles.portfolio_one_content_categories_text}>{portfolio?.categoryEn}</p>
                        }
                    </div>
                    {lang == 'ua' && 
                        <PortfolioTags
                        tags ={portfolio?.tags?.ua}
                        />
                    }
                    {lang == 'en' && 
                        <PortfolioTags
                        tags ={portfolio?.tags?.en}
                        />
                    }
                    <PortfolioOneTools/>
                    <div className={styles.portfolio_one_content_category_wrap}>
                        <p className={styles.portfolio_one_content_category_text}>{portfolio?.category}</p>
                    </div>
                    {/* <div className={styles.portfolio_one_content_tags_wrap}>
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
                    </div> */}
                </div>
            </div>
            </div>
                    <div className={styles.portfolio_one_wrap_footer}>
                    {/* <Image className={styles.portfolio_one_img} 
                        src={`/projects/${portfolio?.images}`}
                        alt={portfolio?.images}
                        width={1000}
                        height={1000}/> */}
                        {portfolio?.images.map((img, index) => (
                            <Image
                                key={index}
                                src={`/projects/${img}`}
                                alt={portfolio?.mainImage}
                                width={1440}
                                height={4009}
                                
                            />
                        ))}
                        <PortfolioOneFormOrder
                        portfolio = {portfolio}
                        lang = {lang}
                        />
                    </div>
        </div>
    );
};

export default OnePortfolioTemplate;