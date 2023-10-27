
import React from 'react';
import styles from '../../style/portfolioOne.module.scss';
import Image from 'next/image'

const PortfolioTags = ({tags}) => {
    return (
        <div className={styles.wrap_tags}>
            {tags.map((tag,idx) => (
                <div 
                className={styles.tags_one}
                key={idx}>

                    <Image  
                src={`/img/tags/${tag}.svg`}
                alt={'1'}
                width={20}
                height={20}/>
                    <p>{tag}</p>
                </div>
            ))}
        </div>
    );
};

export default PortfolioTags;