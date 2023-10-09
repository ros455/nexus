import React from 'react';
import styles from '../../style/calculation.module.scss'

const CalculateContacts = (state) => {
    return (
        <div style={{marginTop:'20px'}} className={`${styles.item_one} ${styles.item_one_form}`}>
                <h4 style={{color:'red', textAlign:'center' }}> Вкажіть спосіб звязку</h4>
            <div className={styles.item_input}>
                <input 
                value={state.methodOfCommunication}
                onChange={(e) => state.setMethodOfCommunication(e.target.value)}/>
            </div>
            <div  className={styles.item_input}>
                <p>Вкажіть номер телефона або адресс електроної пошти</p>
                <input
                value={state.addressOfCommunication}
                onChange={(e) => state.setAddressOfCommunication(e.target.value)}/>
            </div>
            {/* <div  className={styles.item_input}>
                <p>Виберіть дату та час коли з вами звязатися</p>
                <input type='date'
                value={state.contactsDate}
                onChange={(e) => state.setContactsDate(e.target.value)}/>
                <input type='time'
                value={state.contactsTime}
                onChange={(e) => state.setContactsTime(e.target.value)}/>
            </div> */}
        </div>
    );
};

export default CalculateContacts;