import React from 'react';
import styles from '../../style/portfolioOne.module.scss';

const PortfolioOneFormOrder = ({portfolio, lang}) => {
    return (
<div className={styles.footer_wrap} >

<div className={styles.contact_as} >
    <h2>Contact us</h2>
    
    <div className={styles.input_wrap}  >
        <div className={styles.name_email} >
            <div className={styles.input} >
                <label htmlFor="name"> <span>*</span>Name</label>
                <input id='name' type="text" placeholder='Name'/>
            </div>
            <div className={styles.input} >
                <label htmlFor="email"> <span>*</span>Phone</label>
                <input id='email' type="text" placeholder='+38 (0**) ** ** ***'/>
            </div>
        </div>
        <div className={styles.text_wrap} >
            <label htmlFor="desc"> <span>*</span>Description</label>
            <textarea name="" id="desc" cols="30" rows="10" placeholder={portfolio?.title}></textarea>
        </div>
    </div>
    <p className={styles.info_send_text}>Leave your message here and we will reply to you shortly, or contact us directly by email: nexus2000@gmail.com</p>
    <button  className={`${styles.button} ${styles.activClass}`} >submit</button>
</div>
</div>
    );
};

export default PortfolioOneFormOrder;